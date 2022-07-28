const express = require('express')
const articleHandler = require('../routerHandlers/articlesRouterHandlers')

const articleRouter = express.Router()

articleRouter.get('/list', articleHandler.getArticleList)
articleRouter.get('/', articleHandler.getArticle)

module.exports = articleRouter