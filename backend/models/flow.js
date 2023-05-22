const mongoose = require('mongoose');

const flowSchema = new mongoose.Schema({
    name: String,
    user: String,
    asanas: [],
    },
    {timestamps: true}
);

const Flow = mongoose.model("Flow", flowSchema);

module.exports = Flow;