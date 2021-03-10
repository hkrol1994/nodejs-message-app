const express = require("express");
const Message = require("../models/messageModel");

const router = new express.Router();

router.post("/add-message", async (req, res) => {
  const message = new Message(req.body);
  try {
    await message.save();
    res.send(message);
  } catch (err) {
    res.status(400).send(err);
  }
});

router.get("/get-messages", async (req, res) => {
  const messages = await Message.find({});
  try {
    res.send(messages);
  } catch (err) {
    res.status(400).send(err);
  }
});

module.exports = router;
