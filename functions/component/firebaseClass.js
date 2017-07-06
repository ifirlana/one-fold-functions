/**
 * Created by ikhlasfirlana on 7/6/17.
 */
const cert = require("/Users/ikhlasfirlana/Documents/ssh/onefold-dev-dde4b800955d.json");
const admin = require("firebase-admin");
const cors = require("cors");
var env = require('../env.json');

module.exports = {
    // init function firebase
    init: function () {
        // admin.initializeApp({
        //     credential: admin.credential.applicationDefault(),
        //     databaseURL: key.Database
        // });
        admin.initializeApp({
            credential: admin.credential.cert(cert),
            databaseURL: env.databaseURL
        });
    },
    validateFirebaseToken: function(req, res, next) {
        cors(req, res, function () {
            console.log("PASS CORS");
            try {
                const idToken = req.headers.authorization.split("Bearer ")[1];
                if (idToken) {
                    admin.auth()
                        .verifyIdToken(idToken)
                        .then(function (decodedToken) {
                            console.log("Token Passed");
                            next(decodedToken);
                        }).catch(function (error) {
                            console.log("Error", error);
                            res.status(403).send("Your token is suck up.");
                        });
                } else {
                    res.status(500).send("What do you want.");
                }
            } catch (e) {
                console.log("e", e);
            }
        });
    }
};