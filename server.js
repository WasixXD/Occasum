const express = require('express')
const app = express()
const router = require('./middlewares/route')
const cors = require('cors')


const PORT = process.env.PORT || 3000
const PATH = __dirname + "/occasum/public/"

app.use(function(req, res, next) {
    // res.header("Access-Control-Allow-Origin", "*");
    const allowedOrigins = ['http://localhost:3000', 'http://not-occasum.onrender.com', 'https://not-occasum.onrender.com'];
    const origin = req.headers.origin;
    if (allowedOrigins.includes(origin)) {
         res.setHeader('Access-Control-Allow-Origin', origin);
    }
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    res.header("Access-Control-Allow-credentials", true);
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, UPDATE");
    next();
  });
app.use(express.static(__dirname + "/occasum/public/"))
app.use(express.urlencoded({extended: true}))


app.get("/", (req, res) => {
    res.sendFile(PATH + "index.html")
})

app.get("/photos", (req, res) => {
    res.sendFile(PATH + "photos.html")
})

app.get("/share", (req, res) => {
    res.sendFile(PATH + "share.html")
})

app.post("/post", router, (req, res) => {
    res.redirect("/photos")
})

app.get("/img/", router, (req, res) => {
    res.json(res.response)
})

app.listen(PORT, () => {
    console.log("Server in on => http://localhost:"+PORT)
})
