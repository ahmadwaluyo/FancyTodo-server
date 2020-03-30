const { User } = require("../models");
const { decrypt } = require("../helper/bcrypt");
const { generateToken } = require("../helper/jwt");

class ControllerUser{
    static register(req, res, next) {
        let { email, password } = req.body;
        let created = { email, password };
        User.findOne({
            where: { email }
        })
            .then(newUser => {
                if(!newUser) {
                    return User.create(created)
                } else {
                    next({
                        status: 400,
                        message: { error : 'Email has already registered !'}
                    })
                }
            })
            .then(result => {
                const payload = { id: result.id, email: result.email };
                const token = generateToken(payload);
                res.status(201).json(token)
            })
            .catch(err => {
                next(err)
            })
    }

    static login(req, res, next) {
        let { email, password } = req.body;
        User.findOne({
            where: { email }
        })
            .then(foundUser => {
                const payload = { id: foundUser.id, email: foundUser.email };
                let token = generateToken(payload);
                if(foundUser) {
                    let verify = decrypt(password, foundUser.password);
                    if(verify) {
                        res.status(200).json(token)
                    } else {
                        next({
                            status: 400,
                            message: { error: 'Username/password wrong'}
                        })
                    }
                } else {
                    next({
                        status: 400,
                        message: { error: 'Username/password wrong'}
                    })
                }
            })
            .catch(err => {
                next(err)
            })
    }

}

module.exports = ControllerUser;