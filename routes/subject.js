const express = require('express');
const router = express.Router();

const subjectController = require('../controllers/subject.js_controller');

router.post('/Subject', subjectController.create);



module.exports = router;