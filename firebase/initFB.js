const admin = require('firebase-admin')
const sdk = require('./authfirebase.json')
const fs = require('fs')


admin.initializeApp({
    credential: admin.credential.cert(sdk),
    
})


// const storage = firebase.

const db = admin.firestore()
const storage = admin.storage().bucket("gs://occasum-85395.appspot.com/")




module.exports = {
    db,
    storage
}
