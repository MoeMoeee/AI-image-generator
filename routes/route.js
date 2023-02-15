const express = require('express'); 
const router = express.Router();
const {generateImage} = require('../controllers/controller');

//get post request in /generateimage
router.post('/generateimage', generateImage);


module.exports = router;