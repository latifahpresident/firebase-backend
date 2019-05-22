const users = require('../models/users');

exports.getUser = async (req, res, next) => {
    try {
        const user = await users.getUser()
        if(!user) {
            res.staus(400).json({message: 'please check route'})
        } else {
            res.staus(200).json(user)
        }
    } catch (err) {
        res.status(500).json({message: 'no users found'})
        console.log(err, 'error from get users')
    }
}

exports.getById = async (req, res, next) => {
    try {
        const {firebas_id } = req.params
        const user = await users.getById(firebas_id)
        if(!data) {
            res.status(400).json({message: 'no user by that id'})
        } else {
            res.status(200).json(user)
        }
    } catch (err) {
        res.status(500).json({message: 'error getting user'})
        console.log(err, 'error from get user by is')
    } 
}

exports.postNewUser = async (req, res, next) => {
    try {
        const { username, password } = req.body
        if(!username || !password) {
            res.status(400).json({message: 'no username of password'})
        } else {
            const newUser = await users.postNewUser(req.body)
            res.status(201).json(newUser)
        }
    } catch (err) {
        res.status(500).json({message: 'error creating user'})
        console.log(err, 'error from register')
    }
}