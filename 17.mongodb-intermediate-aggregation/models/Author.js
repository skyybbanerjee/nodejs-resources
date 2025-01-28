const mongoose = require("mongoose");

const AuthorSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 50,
  },
  bio: {
    type: String,
    required: true,
    minlength: 10,
    maxlength: 500,
  },
});

module.exports = mongoose.model("Author", AuthorSchema);
