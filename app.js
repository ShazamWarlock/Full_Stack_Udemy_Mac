// // const req =  new XMLHttpRequest();

// // req.onload = () => {
// //     console.log("IT LOADED!!"); 
// //     console.log(this);
// // }

// // req.onerror = () => {
// //     console.log("ERROR!");
// //     console.log(this);
// // }

// // req.open("GET", "https://swapi.dev/apipeople/1");

// // req.send();



// // fetch("https://swapi.dev/api/people/1")
// // .then((res) => {
// //     console.log("Resolved!",res)
// //     return res.json()
// // })
// // .then((data) => {
// //     console.log("JSON Resolved!",data)
// //     return fetch("https://swapi.dev/api/people/2")
// // })
// // .then((res) => {
// //     console.log("SECOND REQUEST RESOLVED!")
// //     return res.json()
// // })
// // .then((data) => {
// //     console.log("JSON Resolved!",data)
// // })
// // .catch((e) => {
// //     console.log("Error!",e)
// // })


// // const loadStarWarspeople =  async () => {
// //     try{
// //         const res = await fetch("https://swapi.dev/api/people/1");
// //         const data = await res.json();
// //         console.log(data);
// //         const res2 = await fetch("https://swapi.dev/api/people/2");
// //         const data2 = await res2.json();
// //         console.log(data2);
// //     } catch(e){
// //         console.log("ERROR!", e)
// //     }
// // }

// // loadStarWarspeople()


// // axios.get("https://swapi.dev/api/people/1")
// // .then((res) => {
// //     console.log("RESPONSE!", res)
// // })
// // .catch((e) => {
// //     console.log("ERROR!", e)
// // });


// // const loadStarWarspeople =  async (id) => {
// //     try{
// //         const res = await axios.get(`https://swapi.dev/api/people/${id}`);
// //         console.log(res.data);
// //     }catch(e){
// //         console.log("ERROR!",e)
// //     }
// // };  

// // loadStarWarspeople(3);

// const button = document.querySelector('button')
// const joke = document.querySelector("#jokes")
// const getDadjoke = async () => {
//     try{
//         const config = { headers:  { Accept: 'application/json'}}
//         const res = await axios.get('https://icanhazdadjoke.com/',config)
//         return res.data.joke
//     } catch(e){
//         return 'No jokes available. Sorry!'
//     }
// }
 
// const addNewJoke = async () => {
//     const joketext = await getDadjoke()
//     console.log(joketext)
//     const newLI = document.createElement('LI')
//     newLI.append(joketext)
//     jokes.append(newLI)
// }

// button.addEventListener('click', addNewJoke)
const form = document.querySelector("#searchForm");
form.addEventListener('submit', async function (e) {
    e.preventDefault();
    const searchTerm = form.elements.query.value;
    const config = {params: {q : searchTerm}}
    const res =  await axios.get(`https://api.tvmaze.com/search/shows?`, config);
    makeImages(res.data);
    form.elements.query.value = '';
})

const makeImages = (shows) => {
    for(let result of shows){
        if(result.show.image){
            const img = document.createElement('IMG');
            img.src = result.show.image.medium;
            document.body.append(img);
        }
    }
}