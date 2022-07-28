const fs = require('fs');
const path = require('path');
const db = require('../database/index');

const articleHandler = {};

//获取文章列表函数
articleHandler.getArticleList = function (req, res) {
  const querySql = 'select * from articles';
  db.query(querySql, (err, result) => {
    if (err) return res.cc(err);
    if (result.length < 0) return res.cc('获取文章失败');
    console.log(result);
    res.send({ msg: '获取文章列表成功', status: 0, data: result });
  });
};

//获取文章静态路径函数
articleHandler.getArticle = function (req, res) {
  console.log(req.query);
  const querySql = 'select * from articles where id = ?';
  db.query(querySql, [req.query.articleId], (err, result) => {
    if (err) return res.cc(err);
    if (result.length <= 0) return res.cc('获取文章失败');
    console.log(result);
    res.send({
      msg: '获取文章成功',
      status: 0,
      data: result[0],
    });
  });
};

module.exports = articleHandler;
