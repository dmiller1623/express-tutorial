const button = document.querySelector('.button')
var textDisplay = document.querySelector('.clicked')

button.addEventListener('click', () => handleClick())

const handleClick = () => {
  textDisplay.innerHTML = 'Ooo Nice Click';
}