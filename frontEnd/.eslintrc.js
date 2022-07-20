module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: ['plugin:vue/essential', 'eslint:recommended'],
  parserOptions: {
    parser: '@babel/eslint-parser',
  },
  rules: {
/*     第一个参数：
    -- 0：关闭规则
    -- 1：警告
    -- 2：报错
    第二个参数：
    -- always：需要使用
    -- never：不需要使用 */
    semi:[0,'always'],
    "no-unused-vars":[0,'never'],
  },
};
