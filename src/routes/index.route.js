// import { Router } from 'express';
// import { getTask } from '../../src.env/controllers/task.controller.js'

const Router = require("express")
const router = Router();

router.get('/healthcheck', (req, res) => {
    res.status(200).json({ message: 'Server ok' });
 });

 router.get('/user', )

module.exports = router;
