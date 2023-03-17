//CALL STACK
// const multiply = (x,y) => x * y

// const square = x => multiply(x,x)

// const isrighttriangle = (a,b,c) => (
//     square(a) + square(b) === square(c)
// )


//WEB API
// console.log("Send a request to the server...")   //this is printed first
// setTimeout(() => {
//     console.log("Sending request to the server....")    //this is a Web API and this is printed last (after 3 seconds)
// },3000)
// console.log("Request sent!")    //this is printed second

//CALLBACK FUNCTIONS

function delayedcolorchange(color,delay,donext){
    setTimeout(() => {
        document.body.style.backgroundColor = color
        donext && donext()
    },delay)
}

delayedcolorchange('red',1000,() => {
    delayedcolorchange('orange',1000,() => {
        delayedcolorchange('yellow',1000,() => {
            delayedcolorchange('green',1000,() =>{
                delayedcolorchange('blue',1000,() => {
                    delayedcolorchange('indigo',1000,() => {
                        delayedcolorchange('violet',1000)
                    })
                })
            })
        })
    })
})

searchmoviesAPI ('amadeus', () => {
    savetomyDB(movies, () => {
        //if it works, run this:
    }, () => {
        //if it doesnt work, run this:
    })
},() => {
    //if API is down or request has failed
}) 