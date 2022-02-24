const express = require("express")
const mysql=require("mysql")
const cors = require("cors")
const bodyParser= require("body-parser")
const app =express()


const db=mysql.createPool({
  host:"localhost",
  user:"root",
  password:"",
  database:"CRUDDatabase",
})

app.use(cors())
app.use(express.json())
app.use(bodyParser.urlencoded({
  extended:true
}));

app.get("/api/get",(req,res)=>{
   const sqlSelect=
  "SELECT * FROM Posts "
  db.query(sqlSelect,(err,result)=>{
    res.send(result)
})
})

app.post("/api/insert",(req,res)=>{
  const text=req.body.text
  const imageUrl=req.body.imageUrl
  const date=req.body.date
 const sqlInset="INSERT INTO Posts (text,imageUrl,date) VALUES (?,?,?)"
  db.query(sqlInset,[text,imageUrl,date],(err,result)=>{
    console.log(err)
  })
  
})
app.listen(3001,()=>{
  console.log("running on port 3001")
})