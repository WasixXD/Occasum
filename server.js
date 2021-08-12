const express = require('express')
const app = express()
const router = require('./middlewares/route')
const cors = require('cors')


const PORT = process.env.PORT || 3000
const PATH = __dirname + "/occasum/public/"

app.use(cors())
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