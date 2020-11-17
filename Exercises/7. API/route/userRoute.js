const express = require('express');

const userController = require('../controller/userController');

const router = express.Router();

router.post('/signup', userController.signUp);
router.post('/login', userController.login);

router
  .route('/')
  .get(userController.getAllUsers)
  .post(userController.createAnyUserIncludingAdminRole);

router
  .route('/:id')
  .get(userController.getUser)
  .patch(userController.updateUser)
  .delete(userController.deleteUser);

module.exports = router;
