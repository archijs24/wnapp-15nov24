const express=require("express");
const cors=require("cors");
const {MongoClient}=require("mongodb");

const app=express();
app.use(cors());
app.use(express.json());

app.post("/save",(req,res)=>{
		const url="mongodb+srv://archanasalunke137:bfTZP5DMdVNwjDZP@cluster0.prfed.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
		const con=new MongoClient(url);
		const database=con.db("wn15nov24");
		const collection=database.collection("student");
		const document={"name":req.body.name,"choice":req.body.choice};
		collection.insertOne(document)
		.then(result=>res.send(result))
		.catch(error=>res.send(error));
	});
app.listen(9000,()=>{console.log("ready@9000");});