const  express = require('express');
const cors = require('cors')
const phones = require('./pns.json')
const app = express();
const port = 5000

app.use(cors())
app.get('/', (req, res)=>{

    res.send("my information not coming soon")

})

app.get('/phones', (req, res)=>{
    res.send(phones)
})

app.get('/phones/:id', (req, res)=>{
    const id = parseInt(req.params.id)
    // console.log('i need id', id)

    const phone = phones.find(phone=> phone.id === id) || {};
    res.send(phone)
})

app.listen(port)