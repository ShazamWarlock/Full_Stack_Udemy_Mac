const express = require("express")
const app = express()

/* we use app.use to run something when any request is made */

// app.use((req,res) => {
//     console.log("We got a new request!!")
//     res.send("<h1 style='color:aquamarine;'>This is a new request!<h1>")  /* we use this to change the page layout*/
// })

// app.get('*', (req,res) => {
//     // console.log("CATS REQUEST!!")
//     res.send("I DO NOT know that path kind sir!")
// })

// app.get('/', (req,res) => {
//     // console.log("CATS REQUEST!!")
//     res.send("This is the home page!")
// })

app.get('/r/:subreddit/:postId', (req,res) => {
    const {subreddit, postId} = req.params;
    res.send(`<h1>Viewing ${postId} while browsing the ${subreddit} subreddit`)
})
app.get('/cats', (req,res) => {
    // console.log("CATS REQUEST!!")
    res.send("MEOW!")
})

app.get('/dogs', (req,res) => {
    // console.log("CATS REQUEST!!")
    res.send("WOOF!")
})

app.post('/cats', (req,res) => {
    // console.log("CATS REQUEST!!")
    res.send("This is a POST request for cats!! This is different than a GET request!!")
})

app.listen(8080, () => {
    console.log("LISTENING ON PORT 8080")
})

