const express = require('express')
const cors = require('cors')
const jwt = require('jsonwebtoken')
const cookieParser = require('cookie-parser');
const app = express();
const port = process.env.PORT || 3000;
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
require('dotenv').config()
// middelware
app.use(cors({origin: ['http://localhost:5173'], 
             credentials:true
}))
app.use(express.json())
app.use(cookieParser())









const verifyToken =(req, res, next)=>{
   const token = req?.cookies?.token;
   if(!token){
    return res.status(401).send({message: "unauthorized access (token not found)"})
   }
      jwt.verify(token, process.env.JWT_ACCESS_SECRET, (err, decoded)=>{
        if(err){
          return res.status(401).send({message: 'unauthorized access'})
        }
        req.decoded = decoded;
        console.log(decoded)
        next()
      })
}



const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.ecz9zda.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();

    const jobCollection = client.db('CareerCodes').collection('jobs');
    const applicationCollection = client.db('CareerCodes').collection('applications')
    


// jwt token related api
      app.post('/jwt', async(req, res)=>{
        console.log(req.body)
        const  userinfo = req.body;
        

        
        const token = jwt.sign(userinfo, process.env.JWT_ACCESS_SECRET, {expiresIn: '2h'})
            res.cookie('token', token, {
              httpOnly: true, 
              secure: false
            })

        res.send({success: true})

      })
 
     
    //jobs api 
    app.get('/jobs', verifyToken, async(req, res)=>{
       const email = req.query.email ;


    if(email && email !== req.decoded.email){
      return res.status(403).send({message: "forbidden access"})
    }


       const query = {}
       if(email){
        query.hr_email = email
       }

        const cursor =jobCollection.find(query)
        const result =  await cursor.toArray();
        res.send(result)


    })

    // new job add
    app.post('/addjob', async(req, res)=>{
      const item = req.body
      const result = await jobCollection.insertOne(item)
      res.send(result)
    })



    //
    app.get('/jobs/:id', async(req, res)=>{
        const id = req.params.id;
        const query = {_id: new ObjectId(id)}
        const result = await jobCollection.findOne(query)
        
        res.send(result)
    })

    // 
    app.get('/applications/job/:job_id', async(req, res)=>{
      const jobid = req.params.job_id;
      const query = { jobId: jobid}
      const result = await applicationCollection.find(query).toArray()
      res.send(result)
    })

    // 
    app.patch('/applications/job/:job_id', async(req, res)=>{
              const id = req.params.job_id
              
              const filter = {_id: new ObjectId(id)}
              const updateDoc = {
                $set: { staus: req.body.status }
              }
              const result = await applicationCollection.updateOne(filter, updateDoc)
              res.send(result)
    })


    //job applications realated api
    app.post('/applications', async(req, res)=>{
        const application = req.body;
        const result = await applicationCollection.insertOne(application)
        res.send(result)
    })
    // ekhaane ? = diye get korte hobe
    app.get('/applications', verifyToken,  async(req, res)=>{
           const email = req.query.email;
           
              if(email !== req.decoded.email){
                return res.status(403).send('forbid access')
              }

          //  console.log('inside application api ', req.cookies)
           const query = {
            applicant: email,

           }

           const result =  await applicationCollection.find(query).toArray()
            for(const application of result){
                const jobid = application.jobId
                const   jobQuery = {_id: new ObjectId(jobid)}
                const job  = await jobCollection.findOne(jobQuery)
                  application.company = job.company;
                  application.title = job.title;
                  application.company_logo = job.company_logo
            }

           res.send(result)
    })








    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);











app.get('/', (req, res)=>{
    res.send('code career is cooking')
})


app.listen(port, ()=>{
    console.log(`server runnig on port ${port}`)
})