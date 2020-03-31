const { Todo } = require("../models");

function authorization(req, res, next) {
    Todo.findOne({
        where: {
            id: req.params.id
        }
    })
        .then(result => {
            if(result) {
                if(result.UserId == req.currentUserId) {
                    return next();
                } else {
                    return next({
                        name: 'Unauthorized',
                        errors: [{ message: 'User not authorized'}]
                    })
                }
            } else {
                return next({
                    name: 'NotFound',
                    errors: [{ message: 'User Not Found'}]
                })
            }
        })
        .catch(err => {
            return next(err)
        })
}


module.exports = authorization;