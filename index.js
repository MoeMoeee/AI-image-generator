// const path = require('path');
const express = require('express');
const dotenv = require('dotenv').config();
const port = process.env.PORT || 4000;

const app = express();
const userRoute = require('./routes/route');

//req body data
//need this to send data
app.use(express.json()); //parse incoming JSON req into req.body
app.use(express.urlencoded({extended: false}));

app.use('/openai', userRoute);

app.listen(port, () => console.log(`Server started on port ${port}`));