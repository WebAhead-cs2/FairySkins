const express =require('express')
 const app = express()
 const db = require("./database/connections");
 const bcrypt = require("bcrypt");
 const cookieParser = require("cookie-parser");
 const cors= require("cors");
 app.use(cookieParser());
 app.use(express.static("assest"));
 app.use(express.urlencoded());
 app.use(cors());
app.use(express.json())
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
   const productList=request.body.products;
   console.log(productList);
   productList.map(product=>db.query(`INSERT INTO products (product_id, image, name, price, category) VALUES ($1, $2, $3, $4, $5) RETURNING *`, [product.id, product.image, product.name, product.price, product.category]));
   console.log("done db");
   response.send(JSON.stringify({saved: 'saved succecfully'}));
   //response.status(200).json(productList)
  //response.send(JSON.stringify(productList));
})

app.get("/SignUp", (req, res) => {
   
   res.send("get signup");
 });
 
 app.post("/SignUp", (req, res) => {
   const {username, email, phonenumber, password} = req.body;
   bcrypt
   .hash(password, saltRounds)
     const salt = bcrypt.genSaltSync(saltRounds);
     const hash = bcrypt.hashSync(password, salt);
     db.query(`INSERT INTO users (username, email, phonenumber, password) VALUES ($1, $2, $3, $4) RETURNING *`, [username, email, phonenumber, password])
       .then(() => {
         res.redirect('/');
       })
       .catch(error => {
         res.status(500).send(`<h1>Something went wrong saving your data</h1>`);
       });
 });


