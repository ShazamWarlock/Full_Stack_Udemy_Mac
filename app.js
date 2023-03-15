// document.querySelector('button').addEventListener('click',function(evt){
//     console.log(evt)
// })

// const input = document.querySelector('input')
// input.addEventListener('keydown',(e) => {
//     console.log(e.key)
//     console.log(e.code)
// })

// input.addEventListener('keyup',() => {
//     console.log('Keyup')
// })

// window.addEventListener("keydown",(e) => {
//     switch(e.code){
//         case 'ArrowUp': console.log("UP!")
//                         break;
//         case 'ArrowDown': console.log("DOWN!")
//                           break;
//         case 'ArrowLeft': console.log("LEFT!")
//                           break;
//         case 'ArrowRight': console.log("RIGHT!")
//                            break;
//         default: console.log("NOT ARROW KEY!") 
//     }
// })

const form =  document.querySelector("#shelterForm")
const input = document.querySelector("#text")
const list =  document.querySelector("#list")

form.addEventListener("submit",(e) => {
    e.preventDefault()
    const catname = input.value
    const newLi = document.createElement('LI')
    newLi.innerText = catname
    list.append(newLi)
    input.value = " "
})