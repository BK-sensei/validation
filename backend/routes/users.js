const express = require("express")
const app = express()
const { body, validationResult } = require('express-validator')

let users = require("../user.json")

//--- route qui renvoie tous les utilisateurs
app.get('/', (req, res) => {
    res.json(users)
})

//--- une route qui renvoie un seul utilisateur (grace au slug)
app.get('/:slug', (req, res) => {
    const { slug } = req.params
    const user = users.find(user => user.slug === slug)
    res.json(user)
})

//--- une route qui permet de créer un utilisateur
app.post('/', 
    body('username')
    .exists().withMessage("username is required")
    .isLength({ min: 4 }).withMessage("username is too short"),
    body('password')
    .exists().withMessage("username is required")
    .isLength({ min: 8 }).withMessage("password is too short"),
    body('city')
    .exists().withMessage("city is required")
    .isIn(["Paris", "Tokyo", "Los Angeles"]).withMessage("city value is not accepted"),
    
    (req, res) => {
        const { errors } = validationResult(req)

        if(errors.lenght > 0) {
            res.status(400).json({errors})
        } else {
            const user = req.body
            users = [...users, user]
            res.json(user)
        }
    }
)

module.exports = app