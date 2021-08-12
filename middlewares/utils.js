const {db, storage} = require('../firebase/initFB')
const {v4} = require('uuid')
const posts = db.collection("posts")
const fs = require('fs')

async function upload(path) {
    let result = await storage.upload(path, {public: true})
  
    return result[0].metadata.mediaLink
}


async function create(data) {
    try {
        let result = await posts.doc(v4()).set(data)
        return true
    } catch {
        return false
    }
}

async function remove(filename) {
    try {
        
        let path =  __dirname + "/../uploads/" + filename
        
        fs.unlinkSync(path)
        return true
    } catch {
        return false
    }

}


async function retrieve() {
    let result = await posts.get()
    
    let data = []
    result.forEach(value => {
       
        data.push(value.data())
        
        
        
    })
    return data
    
}


module.exports = {
    upload,
    create,
    remove,
    retrieve
}