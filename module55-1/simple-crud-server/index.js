
const express = require('express')
const {MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const  app = express()
const cors = require('cors')
const port = process.env.PORT || 3000;


// middleWare
app.use(cors())
app.use(express.json())



// copy88614 
//   jqWdpRgmRtaesoxD

const uri = "mongodb+srv://copy88614:jqWdpRgmRtaesoxD@cluster0.ecz9zda.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {

    try{

        await client.connect()
         // Send a ping to confirm a successful connection
    // await client.db("admin").command({ ping: 1 });
    // console.log("Pinged your deployment. You successfully connected to MongoDB!");
      const database = client.db('dbuser')
      const userscollection = database.collection('users')


      app.get('/users', async(req, res)=>{
         const cursor = userscollection.find()
         const result =  await cursor.toArray()
        //  console.log(result)
        res.send(result)

      })

    app.post('/users', async(req, res)=>{
        console.log('data in the server', req.body)
        const newUSEr = req.body;
        const result =  await userscollection.insertOne(newUSEr)
        res.send(result)
    })
      
    app.get('/users/:id', async(req, res)=>{
      const id = req.params.id;
      const  query = {_id:  new ObjectId(id)}
      const result = await userscollection.findOne(query)
      res.send(result)
    })
      

    app.put('/users/:id', async(req, res)=>{
          const id = req.params.id;
          const  filter = {_id: new ObjectId(id)}
          const user = req.body
              console.log(user)
          const updateDoc = {
            $set:{
              name:user.name,
              email: user.email
            }
          }
          const options = { upsert: true };
          const result = await userscollection.updateOne(filter, updateDoc, options)
           
          res.send(result)
               
          
       
    } )

    app.delete('/users/:id', async(req, res)=>{
      // console.log(req.params.id)
       const id = req.params.id;
       const  query = {_id: new ObjectId(id)}
       const result = await userscollection.deleteOne(query)
       res.send(result)
   

    } )

    }

    finally{

    }
}
run().catch(console.dir)


app.get('/', (req, res)=>{
    res.send('Simple Crud server running')
})

app.listen(port, ()=>{
    console.log( `simple crud server running on ${port}`)
})