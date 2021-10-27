//------------------------- Starting to help my people throught this amazing website-------------------------------
const express=require("express")
var app=express()
var path=require("path")
var crypto=require("crypto")
var nodemailer=require("nodemailer")

//-----------------Creating database and inserting------------

//connectimng to database-------------------------------
//mongoose.connect("mongodb://localhost:27017/factnotes",{useNewUrlParser:true}).then(()=>console.log("Successfully connected to database"))
 app.use(express.static(path.join(__dirname + "/static")));
   const port = process.env.PORT || 4500;
 
 

 app.get("/social",(req,res)=>{
  let main=false;
  if(main==false){
    res.redirect("/login")
  }
  else{
    res.sendfile("static/social.html")
  }
 })
///------------------------Creating endpoint for saving data******************ntion Region"
  


  ///////////////models///////
 


app.get("/",(req,res)=>[
	res.sendfile(__dirname +"/static/index.html")])
app.get("/class10",(req,res)=>{
  res.sendfile(__dirname+"/static/class10.html")
})
app.get("/class9",(req,res)=>{
  res.sendfile(__dirname+"/static/class9.html")
})
app.get("/blog",(req,res)=>{
  res.sendfile(__dirname+'/static/blog.html',{text: "hello world"})
})
app.listen(port,()=>{
	console.log("working")
})