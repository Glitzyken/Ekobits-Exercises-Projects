const express = require('express');

const userController = require('../controller/userController');

const router = express.Router();

router.post('/signup', userController.signUp);
router.post('/login', userController.login);

router
  .route('/')
  .get(
    userController.protect,
    userController.isAdmin,
    userController.getAllUsers
  )
  .post(userController.protect, userController.createUserByAdmin);

router
  .route('/:id')
  .get(userController.protect, userController.getUser)
  .patch(userController.protect, userController.updateUser)
  .delete(userController.protect, userController.deleteUser);

module.exports = router;
