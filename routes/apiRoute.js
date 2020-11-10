const db = require('../models');

module.exports = (app) => {
    app.post("/api/newUser", (req, res) => {
        db.User.create({
            userName: req.body.userName,
            password: req.body.password
        }).then(dbUser => {
            res.json(dbUser)
            console.log("new user: ", dbUser)
        })
    })
}