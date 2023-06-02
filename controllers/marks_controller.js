const marks = require('../models/marks');
const jwt = require('jsonwebtoken');




module.exports.create = async function (req, res) {

  //console.log(req.body);
  try {
    let student = await marks.findOne({ email: req.body.email });

   
    if (student) {

      return res.status(200).json({
        message: 'Already Registered, Please Login to Continue !!',
        data: {
          student: student
        }
      })


    } else {
      
      student = await marks.create({
        email: req.body.email,
        Examname: req.body.Examname,
        Class:req.body.Class,
        Section:req.body.Section,
        Subject:req.body.Subject
        
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
