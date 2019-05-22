const admin = require("firebase-admin");
const client = admin.initializeApp()

var serviceAccount = {
    "type": process.env.TYPE,
    "project_id": process.env.PROJECT_ID,
    "private_key_id": process.env.PRIVATE_KEY_ID,
    "private_key": process.env.PRIVATE_KEY,
    "client_email": process.env.CLIENT_EMAIL,
    "client_id": process.env.CLIENT_ID,
    "auth_uri": process.env.AUTH_URI,
    "token_uri": process.env.TOKEN.URI,
    "auth_provider_x509_cert_url": process.env.AUTH_PROVIDER_X509_CERT_URL,
    "client_x509_cert_url": process.env.CLIENT_X509_CERT_URL
}


  module.exports = (req, res, next) =>{
      const authToken = req.headers.authorization
        console.log(authToken, 'auth token in auth.js')
      if(!authToken) {
          res.status(404).json({error: 'No token provided'})
      } else {
        client.auth().verifyIdToken(authToken)
        .then(function(decodedToken) {
          const uid = decodedToken.uid;
          req.body.firebase_id = uid
          next()
        }).catch(function(error) {
          req.status(403).json(error, 'error from auth.js')
        });
      }
  }

