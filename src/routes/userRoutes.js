const express = require('express')
const { login, register, getProfile, updateUser } = require('../controllers/userController')
const userRoutes = express.Router()

userRoutes.post('/login',login)
userRoutes.post('/register',register)
userRoutes.get('/:id',getProfile)
userRoutes.put('/update',updateUser)



module.exports=userRoutes