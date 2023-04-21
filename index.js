const express = require("express")

const app = express()
const  {connection} = require("./config/db")
const {userModel} = require("./model/userModel")
const cors = require("cors")
require("dotenv").config()
app.use(cors())
app.use(express.json())

app.get("/", async (req,res)=>{

    const key = req.query.name
    
    
    try{
      

          const data = await userModel.find({
            "$or":[
                {"name":{$regex:key}},
                {"primaryText":{$regex:key}},
                {"headline":{$regex:key}},
                {"description":{$regex:key}}
                

            ]
          }) 
          res.send(data)
    }catch(err){
        res.send(err)
    }

  
})


app.post("/data", async (req,res)=>{
    
   try{
const user = new  userModel(req.body)
user.save()
res.send({"msg":"data added successfully"})
   }catch(err){
    res.send({"msg":"something went wrong"})
   }
   
    
})



app.listen(process.env.port, async()=>{
    try{
            await connection
              console.log("db connected")
    }catch(err){
        console.log(err)
    }
    console.log("port running at 7300")
})