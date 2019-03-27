const { Router } = require('express')
const UserModel = require('../models/user')
const crypto = require('crypto')

const router = Router()

// 注册
router.post('/signup', async (req, res) => {
  let { username, email, password, repasswd } = req.body
  // 验证用户
  let user = await UserModel.findOne({ username })
  if (user)
    return res.json({
      code: 100,
      msg: '用户名已存在'
    })
  // 验证邮箱
  user = await UserModel.findOne({ email })
  if (user)
    return res.json({
      code: 101,
      msg: '邮箱已注册过'
    })
  // 验证密码
  if (password !== repasswd)
    return res.json({
      code: 103,
      msg: '两次密码不一致'
    })

  // 密码加密
  password = crypto
    .createHash('md5')
    .update(password)
    .digest('hex')
  user = new UserModel({ username, email, password })
  user.save(() => {
    res.json({
      code: 200,
      msg: '注册成功'
    })
  })
})
// 登录
router.post('/signin', async (req, res) => {
  let { username, password } = req.body
  if (!username || !password) {
    return res.json({
      code: 104,
      msg: '请输入用户名及密码'
    })
  }

  password = crypto
    .createHash('md5')
    .update(password)
    .digest('hex')
  let user = await UserModel.findOne({ username, password })
  if (!user) {
    return res.json({
      code: 105,
      msg: '用户名或密码错误'
    })
  }

  // 登录成功
  res.json({
    code: 200,
    msg: '登录成功',
    data: {
      user: { name: user.username, avatar: user.avatar }
    }
  })
})
// 退出
router.put('/signout', (req, res) => {})

module.exports = router
