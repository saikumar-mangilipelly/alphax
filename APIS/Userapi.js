const exp=require("express")
const userapi=exp.Router()
const expressAsyncHandler=require("express-async-handler")
require("dotenv").config()
userapi.use(exp.json())
const bcryptjs=require("bcryptjs")
const jwt=require("jsonwebtoken")
userapi.post('/login',expressAsyncHandler(async(request,response)=>{
    let userdata=request.app.get("userdata")
    let usercred=request.body
    let userdb=await userdata.findOne({username:usercred.username})
    if(userdb===null){
        response.send({message:"Invalid User"})
    }
    else{
        let status=await bcryptjs.compare(usercred.password,userdb.password)
        if(status==false){
            response.send({message:"Invalid password"})
        }
        else{
            let token=jwt.sign({username:userdb.username},process.env.Secret_key,{expiresIn:70})
            response.send({message:"success",payload:token,userobj:userdb})
        }
    }
}))

userapi.post('/register',expressAsyncHandler(async(request,response)=>{
    let userdata=request.app.get("userdata")
    let newuserobj=request.body
    let userobj=await userdata.findOne({username:newuserobj.username})
    if(userobj!=null){
        response.send({message:"user already existed.."})
    }
    else{
       let hashedpassword=await bcryptjs.hash(newuserobj.password,10)
       newuserobj.password=hashedpassword
       await userdata.insertOne(newuserobj)
       response.send({message:"new user created"})
    }
}))

module.exports=userapi;