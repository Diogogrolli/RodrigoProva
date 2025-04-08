const cardIds = ['card1', 'card2', 'card3', 'card4'];
const pokemons = [6, 25, 150, 132]; 

pokemons.forEach((idPokemon, index) => {
  fetch(`https://pokeapi.co/api/v2/pokemon/${idPokemon}`)
    .then(res => res.json())
    .then(data => {
      const nome = data.name;
      const imagem = data.sprites.front_default;
      const tipo = data.types[0].type.name;

      const card = document.getElementById(cardIds[index]);
      card.innerHTML = `
        <img src="${imagem}" alt="${nome}" />
        <h3>${nome.toUpperCase()}</h3>
        <p>Tipo: ${tipo}</p>
      `;
    })
    .catch(error => {
      console.error("Erro ao carregar Pokémon:", error);
    });
});
