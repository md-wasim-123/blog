// Import necessary modules
const express = require("express");
const { join } = require("path")
const bodyParser = require("body-parser")
const flush = require('connect-flash')
const session = require('express-session')
const multer  = require('multer')
const dotenv = require("dotenv")
dotenv.config()// Load environment variables from .env file
const app = express();// Create an instance of Express
const router = require("./router/web.js")// Import the router module from "./router/web.js"
const Database = require("./db/connectDb.js")
const upload = multer({ dest: 'uploads/' })

//port define in .env file
const port = process.env.port;

//set data user
app.use(bodyParser.urlencoded({ extended: true }))

//set template engine 
app.set("view engine", "ejs");
app.set("views", "./views")

//flush message
app.use(flush());

// Serve static files from the "public" directory
app.use(express.static(join(process.cwd(), "public")))
app.use("/dashbord",express.static(join(process.cwd(), "public")))
app.use("/dashbord",express.static(join(process.cwd(), "public/images")))
app.use("/dashbord",express.static(join(process.cwd(), "public/js")))
// app.use(express.static(join(process.cwd(), "public")))
// app.use(express.static(join(process.cwd(), "public")))


//enviorment variable seat 
const db = process.env.DATABASE_URL
Database(db)


app.use(session({
  secret: 'your-secret-key',
  resave: false,
  saveUninitialized: true
}));


// Use the imported router for handling routes
app.use("/", router)


// Start the server and listen on the defined port
app.listen(port, () => {
  console.log(`server http://localhost:${port}`)
})