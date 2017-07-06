var fireCls = require("./component/firebaseClass");
var functions = require('firebase-functions');

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
fireCls.init();

exports.helloWorld = functions.https.onRequest(function (request, response) {
    response.send("Hello from Firebase!");
});

// register uid into database.
exports.registeredAccount = functions.https.onRequest(function (request, response) {
    // fireCls.validateFirebaseToken(request, response, function () {
        response.send("Hello");
    // })
});