const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const express = require('express');
const app = express();
const port = 5000;
const cors = require('cors');

app.use(express.json());
app.use(cors());

const uri = `mongodb+srv://dbuser2:AnOyXN8v59bGpYJE@cluster0.in8lp.mongodb.net/?retryWrites=true&w=majority`;
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverApi: ServerApiVersion.v1
})

async function run(){
    try{
        app.get('/',(req,res)=>{
            res.send('hello hello');
        })
    }finally{}
}
run().catch(console.dir);



app.listen(port,()=>{
    console.log('Backend listening on port '+ port);
})