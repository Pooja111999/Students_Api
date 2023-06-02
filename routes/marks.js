const express = require('express');
const router = express.Router();
const marksController = require('../controllers/marks_controller');
const passport = require('passport');


//router.post('/exam', passport.authenticate('jwt', { session: false }), examController.create);
router.post('/Marks', marksController.create);


module.exports = router;