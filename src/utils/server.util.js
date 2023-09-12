// import express from 'express';
// import 'dotenv/config';
// import cors from 'cors';
// import formData from 'express-form-data';
// import logger from 'morgan';

const express = require("express")
require('dotenv').config()
const cors = require("cors")
const formData = require('express-form-data')
const logger = require('morgan')
const errorHandler = require('../middlewares/error.middleware')
const rootRoute = require("../routes/index.route")

function createServer () {
    const app = express()

    app.use(formData.parse());
    app.use(logger('dev'));
    app.use(
        cors({
            origin: '*',
            allowedHeaders: 'Content-Type, Authorization',
            methods: 'POST, GET, PUT, PATCH, DELETE', 
            credentials: true,
        })
    );

    app.use(express.urlencoded({extended: false}))
    app.use(express.json())

    // ROUTES   
    app.use('/api', rootRoute)

    // ERROR HANDLER
    app.use(errorHandler)

    return app
}

module.exports = createServer