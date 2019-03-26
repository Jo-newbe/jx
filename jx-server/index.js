const app = require("./app");
const mongoose = require("mongoose");
const { db, server } = require("./server.config.json");

mongoose.connect(db.devUrl, { useNewUrlParser: true }, err => {
  if (err) return console.error("网络异常，数据库连接失败。", err);
  app.listen(server.devPort, server.devDoman, () => {
    console.log("服务器启动成功");
  });
  console.log("数据库连接成功。");
});
