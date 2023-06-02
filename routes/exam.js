const express = require('express');
const router = express.Router();
const examController = require('../controllers/exam_controller');
const passport = require('passport');


//router.post('/exam', passport.authenticate('jwt', { session: false }), examController.create);
router.post('/exam', examController.create);


module.exports = router;