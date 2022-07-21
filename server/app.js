const express = require('express');
const cors = require('cors');

// const userRouter = require('./router/user') //登录注册路由
// const userInfoRouter = require('./router/userInfo') //用户中心路由
// const artCateRouter = require('./router/artcate') //文章分类路由
// const articleRouter = require('./router/article') //文章分类路由

// const joi = require('joi');
// const { expressjwt } = require('express-j  wt');
// const { jwtSecretKey } = require('./config');

const app = express();

app.use(function (req, res, next) {
  res.cc = function (err, status = 1) {
    res.send({
      status,
      msg: err instanceof Error ? err.message : err,
    });
  };
  next();
});
app.use(cors());
// 托管静态资源文件
// app.use('/uploads', express.static('./uploads'))
app.use(express.urlencoded({ extended: false }));
app.use(express.json());



// app.use(expressjwt({ secret: jwtSecretKey, algorithms:['HS256'] }).unless({ path: [/^\/api\//] }));

// app.use('/api', userRouter);
// app.use('/my', userInfoRouter);
// app.use('/my/articate', artCateRouter);
// app.use('/my/article', articleRouter);


app.use((err, req, res, next) => {
  // if (err instanceof joi.ValidationError) res.cc(err);
  if (err.name === 'UnauthorizeError') res.cc('身份认证失败');
  res.cc(err.message)
});

app.listen(80, () => console.log('app is listening'));
