//------------------------- Starting to help my people throught this amazing website-------------------------------
const express=require("express")
var app=express()
var path=require("path")
 app.use(express.static(path.join(__dirname + "/static")));
   const port = process.env.PORT || 4500;
app.get("/",(req,res)=>[
	res.sendfile(__dirname +"/static/index.html")])
app.listen(port,()=>{
	console.log("working")
})