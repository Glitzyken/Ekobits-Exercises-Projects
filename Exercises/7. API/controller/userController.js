const { promisify } = require('util');
const jwt = require('jsonwebtoken');

const User = require('../model/userModel');

exports.signUp = async (req, res) => {
  try {
    const newUser = await User.create({
      username: req.body.username,
      password: req.body.password,
    });

    const token = jwt.sign({ id: newUser._id }, 'secret');

    res.status(201).json({
      status: 'success',
      token,
      data: {
        user: newUser,
      },
    });
  } catch (error) {
    res.status(400).json({
      status: 'fail',
      message: error,
    });
  }
};

exports.login = async (req, res) => {
  try {
    // Check if email and password exist
    const { username, password } = req.body;
    if (!username || !password) throw new Error();

    // Check if user exists and password is correct
    const user = await User.findOne({ username }).select('+password');
    const correct = await user.isCorrectPassword(password, user.password);
    if (!user || !correct) {
      throw new Error();
    }

    // If everything is ok, send token to client
    const token = jwt.sign({ id: user._id }, 'secret');
    res.status(200).json({
      status: 'success',
      token,
      data: {
        user,
      },
    });
  } catch (error) {
    res.status(401).json({
      status: 'fail',
      message: 'Please, provide a valid username or password',
    });
  }
};

exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.find();

    res.status(200).json({
      status: 'success',
      result: users.length,
      data: {
        users,
      },
    });
  } catch (error) {
    res.status(404).json({
      status: 'fail',
      message: error,
    });
  }
};

exports.getUser = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);

    res.status(200).json({
      status: 'success',
      data: {
        user,
      },
    });
  } catch (error) {
    res.status(404).json({
      status: 'fail',
      message: error,
    });
  }
};

exports.createUserByAdmin = async (req, res) => {
  try {
    const newUser = await User.create(req.body);

    res.status(201).json({
      status: 'success',
      data: {
        user: newUser,
      },
    });
  } catch (error) {
    res.status(400).json({
      status: 'fail',
      message: error,
    });
  }
};

exports.updateUser = async (req, res) => {
  try {
    const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    res.status(200).json({
      status: 'success',
      data: {
        user: updatedUser,
      },
    });
  } catch (error) {
    res.status(404).json({
      status: 'fail',
      message: error,
    });
  }
};

exports.deleteUser = async (req, res) => {
  try {
    await User.findByIdAndDelete(req.params.id);

    res.status(204).json({
      status: 'success',
      message: null,
    });
  } catch (error) {
    res.status(404).json({
      status: 'fail',
      message: error,
    });
  }
};

exports.protect = async (req, res, next) => {
  try {
    // Get token and check if it's there
    const token = req.headers.authorization.split(' ')[1];

    if (!token) {
      throw new Error();
    }

    // Verify token and store currentUser
    const decoded = await promisify(jwt.verify)(token, 'secret');

    req.user = await User.findById(decoded.id);

    next();
  } catch (error) {
    res.status(401).json({
      status: 'fail',
      message: 'Your are not allowed access.',
    });
  }
};

exports.isAdmin = async (req, res, next) => {
  try {
    if (!req.user.isAdmin) {
      throw new Error();
    }

    next();
  } catch (error) {
    res.status(401).json({
      status: 'fail',
      message: 'Your are not an admin.',
    });
  }
};
