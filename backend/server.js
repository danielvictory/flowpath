// Dependencies
    // require dotenv to pass in environment secrets
require("dotenv").config();
    // require express to use express to handle node
const express = require("express");
    // require MongoDB database handler, cross-origin middleware, and logger
const mongoose = require("mongoose");
const cors = require("cors");
const morgan = require("morgan");

// Import from .env
const { PORT=4000, MONGODB_URL } = process.env

// Set app with express
const app = express();

// Set up database connection through mongoose
    // Establish Connection
mongoose.connect(MONGODB_URL, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
});
    // Connection Events
mongoose.connection
    .on("open", () => console.log("You are connected to mongoose"))
    .on("close", () => console.log("You are disconnected from mongoose"))
    .on("error", (error) => console.log(error));

// Set up Models for the database - separate file?
const Flow = require('./models/Flow.js');
const Asana = require('./models/asana.js')

// Middleware for routes
app.use(cors()); // cross origin routes allowances
app.use(morgan("dev")); // logging on dev
app.use(express.json()); // parse json bodies
app.use(express.urlencoded({extended: true})); // allow url encoding

// Controllers
// ===== Flows
const flowsController = require('./controllers/flows');
app.use('/flows', flowsController);
// ===== Asanas
const asanasController = require('./controllers/asanas');
app.use('/asanas', asanasController);

// Routes
app.get('/', (req, res) => {
    res.send("we in here");
});

// app.get('/flows', async (req, res) => {
//     try {
//         res.json(await Flow.find({}));
//     } catch (error) {
//         res.status(400).json(error);
//     }
// });

// Listen
app.listen(PORT, () => {
    console.log(`Listening on PORT ${PORT}`);
});