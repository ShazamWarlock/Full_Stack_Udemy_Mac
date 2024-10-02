const express = require('express')
const app = express()
const path = require('path')

app.set('view engine', 'ejs')   //this will include the embedded javascript 
app.set('views', path.join(__dirname,'/views'))

app.get('/', (req,res) => {
    res.render('home.ejs')
})

app.get('/r/:subreddit', (req,res) => {
    const {subreddit} = req.params
    res.render('subreddit', { subreddit })
})

app.get('/cats', (req,res) => {
    const cats = ['Socrates', 'Hercules', 'Ares', 'Zeus', 'Achilles', 'Mercury']
    res.render('cats.ejs', { cats })
})


app.get('/rand', (req,res) => {
    const num =  Math.floor(Math.random() * 10) + 1
    res.render('random.ejs',{ num })    //key and value pair is the same 
    // res.render('random.ejs',{ rand: num })    //key and value are different from each other
})

app.listen(3000, () => {
    console.log("Listening on Port 3000!!!")
})