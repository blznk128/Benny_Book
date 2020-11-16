const db = require('../models');
var passport = require("../config/passport");

module.exports = (app) => {
    app.post("/api/newUser", (req, res) => {
        db.User.create({
            email: req.body.email,
            password: req.body.password
        }).then(dbUser => {
            res.json(dbUser)
            console.log("new user: ", dbUser)
        })
    })

    app.post("/api/login", passport.authenticate("local"), function(req, res) {
        res.json("/members");
      });

     app.get("/api/user_data", function(req, res) {
        if (!req.user) {

        res.json({});
        } else {
            res.json({
            email: req.user.email,
            id: req.user.id
            });
        }
    }); 
}