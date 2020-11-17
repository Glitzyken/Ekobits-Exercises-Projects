const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, 'A username is mandatory.'],
    unique: [true, 'A username must be unique.'],
    trim: true,
    validator: [
      validator.isAlpha,
      'A username cannot contain number or symbols or empty space.',
    ],
    lowercase: true,
    maxlength: [10, 'A username should be less than 10 characters.'],
    minlength: [3, 'A username should be more than 3 characters'],
  },
  password: {
    type: String,
    required: [true, 'Please provide a password.'],
    maxlength: [8, 'Password should be less than 8 characters.'],
    minlength: [4, 'Password should be more than 4 characters.'],
    select: false, // will not show password in res output
  },
  isAdmin: {
    type: Boolean,
    default: false,
  },
});

// hash password when password has been provided or modified before parsisting it to DB
userSchema.pre('save', async function (next) {
  if (!this.isModified('password')) return next(); // This will ensure password does not get hashed again when other properties are modified or updated without the password

  this.password = await bcrypt.hash(this.password, 12);
  next();
});

// compare if password provided on login coresponds with hashed password and return boolean value (I'm using this in userController.js)
userSchema.methods.isCorrectPassword = async function (
  loginPassword,
  hashedPassword
) {
  return await bcrypt.compare(loginPassword, hashedPassword);
};

const User = mongoose.model('User', userSchema);

module.exports = User;
