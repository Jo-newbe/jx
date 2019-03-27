const { Router } = require('express')
const TeacherModel = require('../models/teacher')
const multer = require('multer')
const path = require('path')
const ObjectId = require('mongoose').Types.ObjectId

var storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, './public/uploads')
  },
  filename: function(req, file, cb) {
    cb(
      null,
      file.fieldname + '-' + Date.now() + path.extname(file.originalname)
    )
  }
})

const upload = multer({ storage: storage })

const router = Router()
// 列表接口
router.get('/teacher/list', async (req, res) => {
  var teachers = await TeacherModel.find({})
  res.json({
    code: 200,
    message: 'success',
    data: teachers
  })
})
// 添加接口
router.post('/teacher/add', upload.single('avatar'), (req, res) => {
  var teacherObj = { ...req.body }

  if (req.file) {
    var avatar = 'http://localhost:4000/uploads/' + req.file.filename
    teacherObj.avatar = avatar
  }

  teacher = new TeacherModel(teacherObj)
  teacher.save(err => {
    if (err) {
      return res.json({
        code: 0,
        message: '网络异常'
      })
    }

    res.json({
      code: 200,
      message: '添加成功！'
    })
  })
})

// 删除接口
router.delete('/teacher/delete', (req, res) => {
  let { _id } = req.query
  _id = new ObjectId(_id)
  TeacherModel.deleteOne({ _id }, err => {
    if (err)
      return res.json({
        code: 0,
        message: '网络异常'
      })

    res.json({
      code: 200,
      message: '删除成功'
    })
  })
})

// 编辑接口
router.post('/teacher/edit', upload.single('avatar'), (req, res) => {
  var teacherObj = { ...req.body }
  var { _id } = teacherObj
  _id = new ObjectId(_id)
  delete teacherObj._id

  if (req.file) {
    var avatar = 'http://localhost:4000/uploads/' + req.file.filename
    teacherObj.avatar = avatar
  }

  TeacherModel.updateOne({ _id }, teacherObj, err => {
    if (err) {
      return res.json({
        code: 0,
        message: '网络异常'
      })
    }

    res.json({
      code: 200,
      message: '添加成功！'
    })
  })
})

module.exports = router
