const mongoose = require("mongoose");

const messageScema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  body: {
    type: String,
    required: true,
  },
});

const message = mongoose.model("Message", messageScema);

module.exports = message;
