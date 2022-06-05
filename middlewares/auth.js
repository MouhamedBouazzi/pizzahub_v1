const users = require("../models/users");
const jwt = require("jsonwebtoken");
exports.isAuth = async(req, res, next) => {
    const jwt = require("jsonwebtoken");
    const tooken = req.header("authentification");
    try {
        if (!tooken) {
            return res.status(400).send("you are not authorized");
        }
        const decoded = jwt.verify(tooken, process.env.secretOrKey);

        const user = await users.findById(decoded.id);
        req.user = user;
        next();
    } catch (error) {
        console.log("server error");
    }
};