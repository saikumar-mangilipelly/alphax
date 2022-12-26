const exp=require('express')
const app=exp()
const mongoclient=require('mongodb').MongoClient
require('dotenv').config()
const path=require('path')
app.use(exp.static(path.join(__dirname,'./build')))
app.use(exp.json())
mongoclient.connect(process.env.DB_CONNECTION_URL)
.then((client)=>{
    let db_obj=client.db("alphax")
    let userdata=db_obj.collection("userdata")
    app.set("userdata",userdata)
    console.log("DB Connection Successful ...!!")
})
.catch(err=>console.log("Error in database connection",err))
const userapi=require('./APIS/Userapi')
app.use('/user',userapi)
app.use('*',(request,response)=>{
    response.sendFile(path.join(__dirname,'./build/index.html'))
})
app.use((request,response)=>{
    console.log(error)
    response.send({message:"error occured",reason:`Invalid Url ${request.url}`})
})
app.use((error,response)=>{
    console.log(error)
    response.send({message:"Error Occured",reason:`${error.message}`})
})
app.listen(process.env.PORT,()=>console.log(`server is running on port no : ${process.env.PORT}`))