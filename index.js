const express =require("express")
const app=express();
const cors=require("cors")
const bodyParser=require("body-parser")
const port=process.env.PORT || 4006;
const mongoose=require("mongoose")
const Content=require("./schema")

 app.use(bodyParser.urlencoded({
    extended:true
 }))

 app.use(bodyParser.json())

 app.use(cors())

mongoose.connect("mongodb+srv://Pavi1919:<password>@cluster0.q7dnn34.mongodb.net/?retryWrites=true&w=majority")
    .then(()=>{
        console.log("Mongodb connected successfully")
    })
    .catch((err)=>{
        console.log(err)
    })

app.get("/",(req,res)=>{
    res.send("API is working")
})

app.get("/users",async(req,res)=>{
    Content.find()
        .then(found=>console.log(found))
})

app.post("/store",(req,res)=>{
    const username="utest@gmail.com",password="utesting"
    const newData=new Content({
        username,password
    })
    newData.save()
})


app.listen(port,()=> console.log("server is running on port",port))