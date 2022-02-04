//------------------------- Starting to help my people throught this amazing website-------------------------------
const express=require("express")
var app=express()
var path=require("path")
var crypto=require("crypto")
app.set("view engine","ejs")
var mongoose=require("mongoose")
var schema=require("./article.js")
app.use(express.urlencoded({extended:false}))

//-----------------Creating database and inserting------------

//connectimng to database-------------------------------
mongoose.connect(process.env.MONGODB_URL || "mongodb://localhost:27017/factnotes",{useNewUrlParser:true}).then(()=>console.log("Successfully connected to database"))
 app.use(express.static(path.join(__dirname + "/static")));
   const port = process.env.PORT || 4500;
 
 

 app.get("/social",(req,res)=>{
  let main=false;
  if(main==false){
    res.redirect("/login")
  }
  else{
    res.sendfile("static/social")
  }
 })
///------------------------Creating endpoint for saving data******************ntion Region"
  


  ///////////////models///////
 

app.post("/input",async(req,res)=>{
let article=new schema({
  Title:req.body.n1,
  desc:req.body.n2,
  date:req.body.d1,
   img1link:req.body.n3,
  youtubelink:req.body.n4,
   n1:req.body.n5,
   n2:req.body.n6,
                n3:req.body.n7,
                  n4:req.body.n8,
                    n5:req.body.n9,
                      l1:req.body.n10,
                        l2:req.body.n11,
                          l3:req.body.n12,
                            l4:req.body.n13,
                              l5:req.body.n14,
                                img2link1:req.body.n15,
                                  img2link2:req.body.n16,
                                    extratit1:req.body.n17,
                                      extra1:req.body.n18,
                                        extratit2:req.body.n19,
                                          extra2:req.body.n20,
                                            extratit3:req.body.n21,
                                            extra3:req.body.external3,
                                            extratit4:req.body.n22,
                                            extra4:req.body.external4,
                                            biomain:req.body.desc
})
try{
article=await article.save()
res.redirect(`/blogs`)
}
catch(e){
  console.log(e)
res.redirect('/blogs')
}
})
app.get('/blogs/:id', async(req,res)=>{

const book= await schema.findById(req.params.id)
if(book==null)res.redirect('/')
res.render(__dirname+"/static/article",{books:book})
})
app.get("/",(req,res)=>{
	res.render(__dirname +"/static/index")}
)
app.get("/class10",(req,res)=>{
  res.render(__dirname+"/static/class10")
})
app.get("/class9",(req,res)=>{
  res.render(__dirname+"/static/class9")
})
app.get("/blogs",async(req,res)=>{
  const articles=await schema.find().sort({Title:"desc"})
  res.render(__dirname+"/static/blog",{article:articles})
})
app.get("/login",(req,res)=>{
  res.render(__dirname+"/static/secreat")
})
app.get("/article",(req,res)=>{
  res.render(__dirname+"/static/article")
})
app.listen(port,()=>{
	console.log("working")
})
