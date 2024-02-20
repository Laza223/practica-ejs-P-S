const express = require('express')
const router = express.Router()
const mainControllers = require('controllers')

router.get('/home', mainControllers.index)
router.get('menu/:id', mainControllers.detalleMenu)



module.exports = router