// import { Router } from 'express';
// import { getTask } from '../../src.env/controllers/task.controller.js'

const Router = require("express")
const router = Router();

const { createUser, 
        updateUser, 
        deleteUser, 
        getUser,
        getAllUser } = require("../controllers/user.controller")

router.get('/healthcheck', (req, res) => {
    res.status(200).json({ message: 'Server ok' });
 });

router.post('/create', createUser)
router.patch('/:user_id', updateUser)
router.delete('/:user_id', deleteUser)
router.get('/:user_id', getUser)
router.get('/', getAllUser)


module.exports = router;
