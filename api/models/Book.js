const mongoose = require("mongoose");

const bookSchmea = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Book", bookSchmea);
