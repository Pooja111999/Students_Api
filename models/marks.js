const mongooose = require('mongoose');

const marksSchema = new mongooose.Schema({

    email:{
      type:String
    },
  Examname: {
    type: String,
    required: true,
  },
  Class: {
    type: Number,
    required: true,
    unique: true,
  },
  Section:{
    type: String,
    required:true
  },
  Subject:{
    type:String,
    required:true
  }

},
  {
    timestamps: true,
  }

);

const Marks = mongooose.model('Marks', marksSchema);
module.exports = Marks;