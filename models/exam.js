const mongooose = require('mongoose');

const examSchema = new mongooose.Schema({

  name: {
    type: String,
    required: true,
  },
  // email:{
  //   type:String,
  //   required:true
  // },
  rollNo: {
    type: Number,
    required: true,
    unique: true,
  }

},
  {
    timestamps: true,
  }

);

const Exam = mongooose.model('Exam', examSchema);
module.exports = Exam;