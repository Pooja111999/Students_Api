const sub = require('../models/subject');
const jwt = require('jsonwebtoken');




module.exports.create = async function (req, res) {

  //console.log(req.body);
  try {
    let student = await sub.findOne({ email: req.body.email });

   
    if (student) {

      return res.status(200).json({
        message: 'Already Registered, Please Login to Continue !!',
        data: {
          student: student
        }
      })


    } else {
      
      student = await sub.create({
        name: req.body.name,
        class:req.body.class,
        email: req.body.email,
        Graded:req.body.Graded
        
      });


      return res.status(200).json({
        message: 'You are added Successfully!!',
        data: {
          student: student
        }
      });
    }
  } catch (err) {
    console.log(err);
    return res.status(401).json({

      message: 'Internal Server Error',
    })
  }
}
