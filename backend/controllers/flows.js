// Required
const express = require('express');

// Set Router
const flowRouter = express.Router();

// Import Schema
const Flow = require('../models/Flow.js');

console.log('in the controller file')

// Routes 

// ===== Index
flowRouter.get('/', async(req, res) => {
    try {
        res.json(await Flow.find({}));
    } catch (error) {
        res.status(400).json(error);
    }
})

// ===== Create
flowRouter.post('/', async (req, res) => {
    console.log('trying to post')
    try {
        res.json(await Flow.create(req.body));
    } catch (error) {
        res.status(400).json(error);
    }
})

// Export controller
module.exports = flowRouter;