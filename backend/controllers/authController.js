const User = require("../models/User");
const jwt = require("jsonwebtoken");

// generate token 
const generateToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: "60d" });
};

// desc register new user 
exports.register = async (req, res) => {
    try {

    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// desc login user 
exports.login = async (req, res) => {

}

// desc get logged-in user 
exports.getMe = async (req, res) => {
    res.json(req.user);
};

