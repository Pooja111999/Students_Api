const mongooose = require('mongoose');

const subjectSchema = new mongooose.Schema({
  name: {
    type: String,
    // required: true,
  },
  class: {
    type: Number,
    required: true,
    unique: true,
  },
  email:{
    type: String,
    required: true,
    unique: true,
  },
  Graded:{
    type: Boolean
  }
 

},
  {
    timestamps: true,
  }

);

const Subject = mongooose.model('Subject', subjectSchema);
module.exports = Subject;