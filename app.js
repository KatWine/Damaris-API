const express = require('express');
const app = express();
const cors = require('cors');
const path = require('path');
const reviewRouter = require('./Router/ReviewRouter');
const cartRouter = require('./Router/CartRouter'); 

//middleware
app.use(cors());
app.use(express.json());
app.use('/review', reviewRouter);
app.use('/cart', cartRouter);
app.use('/reviews',reviewRouter)

// Serve React app for the root route
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, '../Damaris', 'index.html'));
});

// Serve React app for any other route
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../Damaris', 'index.html'));
});


module.exports = app;
