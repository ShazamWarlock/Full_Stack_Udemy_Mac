// const btn = document.querySelector("#button")

// btn.onclick = function click(){
//     console.log("You clicked me!")
//     console.log("Congrats")
// }

// btn.onmouseenter = () => {
//     console.log("Stop that right now")
// }

// const h1 = document.querySelector("h1")
// h1.onclick = () => {
//     console.log("Now why would you click a heading you idiot?")
// }

// const btn1 = document.querySelector("#button2")
// btn1.addEventListener("mouseup", () =>{
//     alert('You clicked the 2nd version!!')
// })


//rgb exercise
const button = document.querySelector("button")
const h1 = document.querySelector("h1")

button.addEventListener("click", () => {
    const newColor = randomColor()
    document.body.style.backgroundColor = newColor
    h1.innerText = newColor
})

const randomColor = () => {
    const r = Math.floor(Math.random() * 255)  
    const g = Math.floor(Math.random() * 255)  
    const b = Math.floor(Math.random() * 255)
    return `rgb(${r},${g},${b})`
}

const btns = document.querySelectorAll("button")
const h1s = document.querySelectorAll("h1")

for (let button of btns){
button.addEventListener("click",colorize)
}
for (let h1 of h1s){
h1.addEventListener("click", colorize)

}

function colorize() {
    this.style.backgroundColor = randomColor()
    this.style.color = randomColor()
}