const cardsElement = document.querySelector('#cards');

const apiUrl = 'https://api.pokemontcg.io/v2/cards?name=pikachu';

async function getPokemonCards() {
  const response = await fetch(apiUrl);
  const json = await response.json();
  console.log(json.data);
  json.data.forEach((card) => {
    const image = document.createElement('img');
    image.src = card.images.small;
    cardsElement.append(image);
  });
}

getPokemonCards();
