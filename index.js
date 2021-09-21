//------------------------- Starting to help my people throught this amazing website-------------------------------
const express=require("express")
var app=express()
var path=require("path")
var crypto=require("crypto")
var nodemailer=require("nodemailer")
//-----------------Creating database and inserting------------
const mongoose=require("mongoose");
const mongodb=require("mongodb")
//connectimng to database-------------------------------
//mongoose.connect("mongodb://localhost:27017/factnotes",{useNewUrlParser:true}).then(()=>console.log("Successfully connected to database"))
 app.use(express.static(path.join(__dirname + "/static")));
   const port = process.env.PORT || 4500;
 app.get("/Login",(req,res)=>{
 	res.sendfile(__dirname+"/static/email.html")
 })

 

 app.get("/social",(req,res)=>{
  let main=false;
  if(main==false){
    res.redirect("/login")
  }
  else{
    res.sendfile("static/social.html")
  }
 })
///------------------------Creating endpoint for saving data******************
 const Registerschemea= new mongoose.Schema({
    username:{
      type:String,
      required:"username is required"
    },
    email:{
      type:String,
      required:"Email is required",
      unique:true
    },
    class:{
      type:Number,
      required:"number is required",

    },
    region:{
      type:String,
      required:"please Mention Region"
    },
    password:{
      type:String,
      required:"please enter password"
    },
    verified:{
      type:Boolean,
      default:false
    },
    emailtoken:String

  })


  ///////////////models///////
  var factmodel=new mongoose.model("notesfact",Registerschemea)
   const validate = (factmodel) => {
  const schema = Joi.object({
    name: Joi.string().min(3).max(255).required(),
    email: Joi.string().email().required(),
  });
  return schema.validate(user);
};
app.get("/login_verify",(req,res)=>{
  var login= req.query.email

  const read=new factmodel({
    username:`${req.query.username}`,
    email:`${req.query.email}`,
    class:`${req.query.class}`,
    region:`${req.query.region}`,
    password:`${req.query.password}`,
    emailtoken:crypto.randomBytes(64).toString('hex')
  })
try {
 read.save()
 var main=true
 res.redirect("/social")
}
catch (e) {
 console.log("error occured")
}

})


app.get("/",(req,res)=>[
	res.sendfile(__dirname +"/static/index.html")])
app.listen(port,()=>{
	console.log("working")
})