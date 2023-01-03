const express =require('express')
 const app = express()
 const db = require("./database/connections");
 const bcrypt = require("bcrypt");
 const cookieParser = require("cookie-parser");
 app.use(cookieParser());
 app.use(express.static("assest"));
 app.use(express.urlencoded());
 const saltRounds=10;


//  app.get("/", (req , res) => { 
//     res.json({"users": ["userOne","userTwo","userThree","5555","saima"]})
//  }) 

app.listen(5000, ()=> {console.log("server started on port 5000")})

app.get("/productList", (req, res) => {
   res.send("hi");
 });

app.post("/productList", express.urlencoded(),(request,response) => { 
   //const html=App.App;
   console.log("i'm in post");
   let productdList=request.body;
   //productdList.map(product=>db.query(`INSERT INTO products (product_id, image, name, price, category) VALUES ($1, $2, $3, $4, $5) RETURNING *`, [product.id, product.image, product.name, product.price, product.category]));
   response.send(JSON.stringify({saved: 'saved succecfully'}));
   //response.status(200).json(productdList)
})


