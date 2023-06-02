const ex = require('../models/exam');



module.exports.create = async function (req, res) {
  console.log(req.body);
  try {
    let Exam = await ex.findOne({ email: req.body.email});
    if (!Exam) {
      Exam = await ex.create({
        name: req.body.name,
        rollNo: req.body.roll,
      });
    }
    return res.status(200).json({
      message: "exam successfully added",
      Exam: Exam,
    });

  }

  catch (err) {
    console.log(err);
    return res.status(401).json({
      message: "Internal Server Error",
    });
  }
}
