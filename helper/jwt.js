const jwt = require("jsonwebtoken");


function generateToken(payload) {
    console.log(process.env)
    return jwt.sign(payload, process.env.SECRET)
}

function verifyToken(token) {
    // console.log(process.env.SECRET)
    return jwt.verify(token, process.env.SECRET)
}

module.exports = {
    generateToken,
    verifyToken
}