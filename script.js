const jokeElement = document.getElementById('joke')

const jokeBtn = document.getElementById('jokeBtn')

generateJoke() // to generate a joke when the page loads

function generateJoke() {
  const config = {
    headers: {
      Accept: 'application/json',
    },
  }
  fetch('https://icanhazdadjoke.com', config)
    .then((res) => res.json)
    .then()
}
