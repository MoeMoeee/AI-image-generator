// const path = require('path');
const express = require('express');
const dotenv = require('dotenv').config();
const port = process.env.PORT || 4000;

const app = express();
const userRoute = require('./routes/route');

app.use('/openai', userRoute);

app.get('/openai', function(req, res){
    res.send("Hello from the 'testkaakaka' URL");
});

app.get('/openai/generateimage', function(req, res){
    res.send("Hello from the 'moemoe' URL");
});

app.listen(port, () => console.log(`Server started on port ${port}`));