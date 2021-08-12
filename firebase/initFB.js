const admin = require('firebase-admin')
const sdk = require('./authfirebase.json')
const fs = require('fs')


admin.initializeApp({
    credential: admin.credential.cert(sdk),
    
})


// const storage = firebase.

const db = admin.firestore()
const storage = admin.storage().bucket("gs://occasum-85395.appspot.com/")

// fazer o arquivo publico e pegar o mediaUrl para poder mostrar
// storage.makePublic({includeFiles: true}, (err, files) => {
//     for(let file of files) {
//         console.log(file.metadata)
//     }
// })

// const file = "./uploads/piano"

//fazer upload nele
// storage.upload(file, {metadata: "image/jpg"}).then(( result ) => {
//     console.log("foi", result)
// })

// storage.getFiles((err, files) => {
//     for(let file of files) {
//         console.log(file.metadata)
//     }
// })



module.exports = {
    db,
    storage
}