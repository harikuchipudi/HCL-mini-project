 import express from "express";
 import path, { dirname } from "path";
 import { fileURLToPath } from "url";
 import bodyParser from "body-parser";
 import cors from "cors";
 import pkg from "pg";
 import { error } from "console";
 const {Pool} = pkg;

 

  const __dirname = dirname(fileURLToPath(import.meta.url));
  const app = express();

 const pool = new Pool({
  user: "postgres",
  password: "1971",
  host: "localhost",
  port: 5432,
  database: "postgres",
  });

  pool.on('error', (err, client)=>{
    console.error('Unexpected error on idle PostgreSQL client', err);
    process.exit(-1);
  });


 //middleware//
  app.use(cors());
  app.use(express.static(path.join(__dirname, 'static')));
  app.use(bodyParser.json());
  

 //Routes//
 app.listen(3000, ()=> {
    console.log("server is running");
 })

 app.get("/", (req,res)=>{
   res.sendFile(__dirname + "/open.html")
 });

 app.get("/login.html", (req, res)=>{
   res.sendFile(__dirname + "/login.html")
 })

 app.get("/sign-up.html", (req, res)=>{
   res.sendFile(__dirname + "/sign-up.html")
 })

 app.get("/index.html", (req, res)=>{
  res.sendFile(__dirname + "/index.html")
 })

 app.get("/reports.html", (req,res)=>{
  res.sendFile(__dirname + "/reports.html")
 })

 app.post('/insertData', (req, res)=>{
  try{
    const username = req.body.username;
    const password = req.body.password;
    res.status(200).json({ message: 'User registered successfully' });
    console.log(username);
    console.log(password);
    }
  catch(error){
    console.error('Error handling POST request:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }

  const sqlQuery = 'INSERT INTO public."user"("name", "password") VALUES($1,$2)';
  pool.query(sqlQuery, [username, password])
    .then(() => {
      res.status(201).json({ message: 'User Registered sucessfully' });
    })
    .catch((error)=>{
      console.error('Error inserting data:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    });
});