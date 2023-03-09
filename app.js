//arrow functions implicit return.
// const sum = (a,b) => a + b;
// const rollDie = () => (
//     Math.floor(Math.random() * 6) + 1
// )

// //default parameters
// function rollDie(numsides = 6){
//     return Math.floor(Math.random() * numsides) + 1
// }

// //default parameters
// function greet(hello = "Hey there,", name){
//     console.log(`${hello} ${name}!`)
// }

//spread

// //spread in javascript object literals
// const feline = {legs: 4, family: "Feline"}
// const canine = {isFurry: true, family: "Canine"}
// const catdog = {...feline, ...canine}  //spread function 
// catdog = {...feline, ...canine, family: "Steele"} //changing the new object literal


// //rest
// function sum(){
//     console.log(arguments)
// }

// function sum1(...nums){         //rest (...) used
//     return nums.reduce((total, el) => total + el)
// }

// function medal(gold, silver, ...everyoneelse){
//     console.log(`Gold medal goes to ${gold}`)
//     console.log(`Silver medal goes to ${silver}`)
//     console.log(`And thanks everyone else for participating ${everyoneelse}`)
// }


// //destructuring
// const scores = [10000,2000,300,40,5]
// const highscores = scores[0]
// const secondhighscore = scores[1]

// const [gold,silver,bronze,...everyoneElse] = scores;



//destructuring objects
const user = {
    email: 'vrishiriyer@gmail.com',
    password: 'vrishir',
    firstName: 'Vrishir',
    lastName: 'Iyer',
    born: 2001,
    died: false,
    bio: 'Vrishir Iyer is a software and electronics engineer',
    city: 'Ahmedabad',
    state: 'Gujarat'
}

const {email, firstName, lastName, bio} = user;

const {born: birthyear, died: deathyear} = user;    //extracting variables to different variable names  



//destructuring params