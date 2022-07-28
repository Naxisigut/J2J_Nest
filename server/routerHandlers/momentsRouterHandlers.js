const fs = require('fs');
const path = require('path');
const db = require('../database/index');

const momentHandler = {};

//获取函数
momentHandler.getMoments = function (req, res) {
  const querySql = 'select * from moments';
  db.query(querySql, (err, result) => {
    if (err) return res.cc(err);
    if (result.length < 0) return res.cc('获取失败');
    // console.log(result);
    let resResult = result.slice(req.query.offset, req.query.offset + req.query.limit);
    res.send({ msg: '获取成功', status: 0, data: resResult });
  });
};

module.exports = momentHandler;
