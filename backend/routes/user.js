const express = require('express'); // Fix require statement
const bcrypt = require('bcrypt');
const { userModal } = require("../db.js");
const userRouter = express.Router(); // No need for `new` with `express.Router()`
const jwt = require('jsonwebtoken');
const userMiddleware = require('../middleware/userMiddleware.js');

JWT_SECRET = "secretpassword";
const saltRounds = 10;

userRouter.post("/signup", async function (req, res) {
    try {
        const { username, password } = req.body;
        const hashedPassword = await bcrypt.hash(password, 5);
        
        if (!username || !password) {
            return res.status(400).json({ message: "All fields (username, password) are required." });
        }

        const existingUser = await userModal.findOne({ username });
        if (existingUser) {
            return res.status(400).json({ message: "username already exists. Please use a different username." });
        }
        
        

        const newUser = new userModal({
            username: username,
            password: hashedPassword
        });
        await newUser.save();
        res.json({
            message: "user registered successfully!"
        })
    } catch (err) {
        res.status(500)({ message: "internal server error" })
    }


});

userRouter.post("/signin", async function (req, res) {
    const username = req.body.username;
    const password = req.body.password;
    // function to find user is already signup or not
    const foundUser = await userModal.findOne({ username });

    // foundUser then generateToken and assigned it to the particular username and password
    if (foundUser) {
        const token = jwt.sign({
            username: username,
        }, process.env.JWT_SECRET);
        // foundUser.token = token;
        res.json({
            message: "you are signed in",
            token: token

        })
    }
    else {
        res.status(403).send({
            message: "invalid username or password"
        })
    }



})

userRouter.get("/me", userMiddleware, async function(req , res){
    
    try {

        const user = await userModal.findById(req.user.id).select(" username ");

        if (!user) {
            return res.status(404).json({ error: "User not found" });
        }

        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ error: "Internal server error" });
    }
})


userRouter.post("/updateprofile", async function (req, res) {
    const { firs̥tName, lastName, username, address } = req.body;
    const updatedProfile = new userModal({
        firstName: firstName,
        lastName: lastName,
        username: username,
        address: address
    });
    await updatedProfile.update();
})

module.exports = {
    userRouter: userRouter
};