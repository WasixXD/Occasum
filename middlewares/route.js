const express = require('express')
const router = express.Router()
const multer = require('multer')
const { upload, create, remove, retrieve } = require('./utils')
const add = multer({dest: "./uploads/"})


router.use(express.urlencoded({extended: true}))


router.post("/post", add.single("photo"), async (req, res, next) => {
    const data = {...req.body}
    const file = "./uploads/" + req.file.filename

    
    let link = await upload(file)
    
    data.link = link
    let result = await create(data)
    if(result) {
        remove(req.file.filename)
        next()
    } 
})


router.get("/img", async (req, res, next) => {
    let result = await retrieve()
    res.response = result
    next()
})

module.exports = router