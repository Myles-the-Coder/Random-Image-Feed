const container = document.querySelector('.container')
const button = document.querySelector('.btn')
const unsplashURL ='https://source.unsplash.com/random/'
const rows = 10

for(let i = 0; i < rows * 3; i++) {
  const image = document.createElement('img')
  image.src = `${unsplashURL}${getRandomSize()}`

  container.appendChild(image)
}

button.addEventListener('click', () => {
  window.location.reload()
})

function getRandomSize() {
  return `${getRandomNumber()}x${getRandomNumber()}`
}

function getRandomNumber() {
  return Math.floor(Math.random() * 10) + 300
}
