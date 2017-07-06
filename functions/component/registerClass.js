/**
 * Created by ikhlasfirlana on 7/6/17.
 */
const fireCls = require("./firebaseClass");
module.exports = {
    init: function (uid, email, next) {
        var db = fireCls.database("registered", {uid: uid});
        db.once("value", function(snapshot) {
            console.log(snapshot.val());
            var me = snapshot.val();
            if (me === null) {
                db.set(email);
                next();
            }
        }, function (errorObject) {
            console.log("The read failed: " + errorObject.code);
        });
        // next();
    }
};