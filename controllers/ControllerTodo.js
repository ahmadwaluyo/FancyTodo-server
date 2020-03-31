const { Todo } = require("../models");

class ControllerTodo {
    static findAll(req, res) {
        Todo.findAll()
            .then(todos => {
                if(todos) {
                    return res.status(200).json(todos)
                } else {
                    return next({
                        name: 'NotFound',
                        errors: 'Todos not found'
                    })
                }
            })
            .catch(err => {
                console.log(err)
                return next(err)
            })
    }

    static create(req, res) {
        let { title, description, status, due_date } = req.body;
        let payload = {
            title : title,
            description : description,
            status : status,
            due_date : due_date,
            UserId: req.currentUserId
        }
        Todo.create(payload)
            .then(todos => {
                if(todos) {
                    return res.status(201).json(todos);
                } else {
                    return next ({
                        name: 'BadRequest',
                        errors: [{ message: 'Invalid input'}]
                    })
                }
            })
            .catch(err => {
                console.log(err)
                return next(err)
            })
    }

    static findById(req, res) {
        let { id } = req.params;
        Todo.findByPk(id)
            .then(todos => {
                if(todos) {
                    return res.status(200).json(todos)
                } else {
                    return next({
                        name : 'NotFound',
                        errors: [{ message: 'Todos data not found'}]
                    })
                }
            })
            .catch(err => {
                console.log(err)
                return next(err)
            })
    }

    static update(req, res) {
        let { title, description, status, due_date } = req.body;
        let payload = {
            title : title,
            description : description,
            status : status,
            due_date : due_date
        }
        Todo.update(payload, {
            where : { id : req.params.id },
            returning : true,
            plain: true
        })
            .then(todos => {
                return res.status(200).json(todos[1])
            })
            .catch(err => {
                console.log(err)
                return next(err)
            })
    }

    static delete(req, res) {
        let { id } = req.params;
        let deleted;
        Todo.findByPk(id)
        .then(deletedTodo => {
            if(deletedTodo){
                deleted = deletedTodo
                return Todo.destroy({ where : { id }})
            } else {
                return next({
                    name: 'NotFound',
                    errors: [{ message: 'Todo data not found' }]
                })
            }
        })
            .then(todos => {
                return res.status(200).json({
                    msg: 'todos data successfully deleted',
                    deleted
                })
            })
            .catch(err => {
                console.log(err)
                return next(err)
            })
    }
}

module.exports = ControllerTodo;