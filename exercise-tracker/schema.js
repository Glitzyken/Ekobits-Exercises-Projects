const mongoose = require("mongoose");
let Schema = mongoose.Schema;

let userSchema = new Schema({
  username: String,
  count: Number,
  log: [
    {
      description: String,
      duration: Number,
      date: Date,
    },
  ],
});

let user = mongoose.model("user", userSchema);

exports.user = user;
