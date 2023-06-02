const express = require('express');

const router = express.Router();

const homeCont = require('../controllers/home_cont');

// console.log("router loaded");

router.get('/', homeCont.home);

router.use('/Addsubject', require('./subject'));

router.use('/AddExam', require('./exam'));

router.use('/AddMarks',require('./marks'));



module.exports = router;
