const mongoose = require('mongoose')

const TeacherSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  age: {
    type: Number,
    required: true
  },
  sex: {
    type: Number,
    default: 1
  },
  teachAge: {
    type: Number,
    default: 1
  },
  avatar: {
    type: String,
    default: 'http://localhost:4000/dist/images/default.png'
  }
})

let TeacherModel = (module.exports = mongoose.model('teachers', TeacherSchema))
