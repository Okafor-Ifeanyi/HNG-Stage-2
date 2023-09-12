// import { Router } from 'express';
// import { getTask } from '../../src.env/controllers/task.controller.js'

const Router = require("express")
const validate = require("../middlewares/validate.middleware")
const RegisterSchema = require('../schema/user.schema')
const { createUser, 
        updateUser, 
        deleteUser, 
        getUser,
        getAllUser } = require("../controllers/user.controller")
        
const router = Router();

router.get('/healthcheck', (req, res) => {
    res.status(200).json({ message: 'Server ok' });
 });

router.post('/create', validate(RegisterSchema), createUser)
router.patch('/:user_id', validate(RegisterSchema), updateUser)
router.delete('/:user_id', deleteUser)
router.get('/:user_id', getUser) // This route can check for user with both ID or Name
router.get('/', getAllUser)


module.exports = router;
