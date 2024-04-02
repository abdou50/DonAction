require("dotenv").config()
const express=require("express")
const app=express()
const db=require("./db")
const cors=require("cors")
const userRouter=require("./routers/User")
const Donationrouter=require("./routers/Donation")
app.use(cors())
app.use(express.json())
const port=process.env.port;
app.use(userRouter)
app.use(Donationrouter)
app.get("/",()=>{
    console.log("hello world")
})
app.listen(port,()=>{
    console.log(`server is running on port ${port}`)
})
