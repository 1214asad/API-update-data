const { Router } = require('express');
const authController = require('../controllers/authController');

const routers = Router();

routers.get('/updatePage', authController.getUpdatePage);

// update by id
routers.get('/update/:id', authController.updatePostbyId);

// update by type
routers.get('/update/:type', authController.updatePostbyType);

module.exports = routers;
