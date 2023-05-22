// Required
const express = require('express');

// Set Router
const flowRouter = express.Router();

// Import Schema
const Flow = require('../models/flow.js');

// Routes 

// ===== Index
flowRouter.get('/', async(req, res) => {
    try {
        res.json(await Flow.find({}));
    } catch (error) {
        res.status(400).json(error);
    }
})

// ===== Delete
flowRouter.delete('/:id', async (req, res) => {
    try {
        res.json(await Flow.findByIdAndRemove(req.params.id));
    } catch (error) {
        res.status(400).json(error);
    }
});

// ===== Update
flowRouter.put('/:id', async (req, res) => {
    try {
        res.json( await Flow.findByIdAndUpdate(req.params.id, req.body, {new: true}));
    } catch (error) {
        res.status(400).json(error);
    }
});

// ===== Create
flowRouter.post('/', async (req, res) => {
    try {
        res.json(await Flow.create(req.body));
    } catch (error) {
        res.status(400).json(error);
    }
});

// Export controller
module.exports = flowRouter;