const p1button = document.querySelector("#p1button")
const p2button = document.querySelector("#p2button")
const p1display = document.querySelector("#p1score")
const p2display = document.querySelector("#p2score")
const reset = document.querySelector("#reset")
const winningscoreselect = document.querySelector("#playto")
const winner = document.querySelector("#winner")

let p1score = 0
let p2score = 0
let winningScore = 5
let isgameover = false

p1button.addEventListener('click', () => {
    if(!isgameover){
            p1score+=1
            if(p1score == winningScore){
                isgameover = true
                p1display.classList.add('winner')
                p2display.classList.add('loser')
                p1button.disabled = true
                p2button.disabled = true
                declarewinner()
            }
            p1display.textContent = p1score
    }
})

p2button.addEventListener('click', () => {
    if(!isgameover){
            p2score+=1
            if(p2score == winningScore){
                isgameover = true,
                p1display.classList.add('winner')
                p2display.classList.add('loser')
                p1button.disabled = true
                p2button.disabled = true
                declarewinner()
            }
            p2display.textContent = p2score
    }
})

function declarewinner(){
    if(isgameover == true){
        if(p1score>p2score){
            winner.innerHTML = "Player 1 is the winner!"
        }else{
            winner.innerHTML = "Player 2 is the winner!"
        }
    }
}

winningscoreselect.addEventListener('change', function(){
    winningScore = parseInt(this.value)
    resetgame()
})
reset.addEventListener('click',resetgame)

function resetgame(){
    isgameover = false
    p1score = 0
    p2score = 0
    p1display.textContent = 0
    p2display.textContent = 0
    p1display.classList.remove('winner','loser')
    p2display.classList.remove('winner','loser')
    p1button.disabled = false
    p2button.disabled = false
    winner.innerHTML = "Component"
}
