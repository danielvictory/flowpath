// Require express
const express = require('express');

// Set Router using express
const asanaRouter = express.Router();

// Import Schema
const Asana = require('../models/asana.js');

// Routes

// ===== Index
asanaRouter.get('/', async (req, res) => {
    try {
        res.json(await Asana.find({}));
    } catch (error) {
        res.status(400).json(error);
    }
});

// ===== Delete
asanaRouter.delete('/:id', async (req, res) => {
    try {
        res.json(await Asana.findByIdAndRemove(req.params.id));
    } catch (error) {
        res.status(400).json(error);
    }
});

// ===== Update
asanaRouter.put('/:id', async (req, res) => {
    try {
        res.json(await Asana.findByIdAndUpdate(req.params.id, req.body, {new: true}))
    } catch (error) {
        res.status(400).json(error);
    }
});

// ===== Create
asanaRouter.post('/', async (req, res) => {
    try {
        res.json(await Asana.create(req.body));
    } catch (error) {
        res.status(400).json(error);
    }
});

// Export controller
module.exports = asanaRouter;