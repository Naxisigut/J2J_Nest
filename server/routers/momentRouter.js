const express = require('express')
const momentsHandler = require('../routerHandlers/momentsRouterHandlers')

const momentRouter = express.Router()

momentRouter.get('/', momentsHandler.getMoments)

module.exports = momentRouter