const express = require('express')
const  app = express()
const cors = require('cors')
const port = 2000

app.use(cors())
app.use(express.json())

app.get('/', (req, res)=>{
    res.send('user server is ongoing')
})


const users = [
    {id:1, name: 'Nazmul', email: 'mdla@gmail.com' },
    {id:1, name: 'Habib', email: 'halil@gmail.com' }
]

app.get('/users', (req, res)=>{
    res.send(users)

})
app.post('/users', (req, res)=>{

    console.log('user post method', req.body)
    const newuser = req.body
    newuser.id = users.length + 1;
    users.push(newuser)
    res.send(newuser)

})





app.listen(port, ()=>{
    console.log(`running on port ${port}`)
})