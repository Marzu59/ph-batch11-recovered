
const express = require('express');
const app =  express()
const port = 5000

app.get('/', (req, res)=>{
res.send("Hello myh first ever server")
})

app.get('/data', (req, res)=>{
    res.send("More data coming soon")
})

app.listen(port, ()=>{
    console.log(`my first server is runnin ${port}`)
})