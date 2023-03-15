// document object model DOM is used to link Javascript to HTML/CSS file and make your website look so cool!!!
//getelementbyId
// YOUR CODE GOES IN HERE:

const container = document.querySelector('#container')
const baseURL = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/pokemon/'
let number = prompt("How many pokemon do you want?")


for(let i = 0; i<number; i++){
    const pokemon = document.createElement('div')
    const label = document.createElement('span')
    label.innerText = `#${i+1}`
    const newImg = document.createElement("img")
    newImg.src = `${baseURL}${i}.png`
    pokemon.appendChild(newImg)
    pokemon.appendChild(label)
    container.appendChild(pokemon)
}