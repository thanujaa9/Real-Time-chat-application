const express = require('express');
const router = express.Router();
const Message = require('../models/message');

router.get('/', async (req, res) => {
  try {
    const { username } = req.query;
    const messages = await Message.find({ deletedForEveryone: false });
    const filtered = username
      ? messages.filter(m => !m.deletedFor.includes(username))
      : messages;
    res.json(filtered);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.post('/', async (req, res) => {
  try {
    const { username, content } = req.body;
    if (!username || !content)
      return res.status(400).json({ error: 'username and content required' });
    const message = await Message.create({ username, content });
    req.io.emit('message_update');
    res.status(201).json(message);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const { type, username } = req.query;
    const message = await Message.findById(req.params.id);
    if (!message) return res.status(404).json({ error: 'Message not found' });

    if (type === 'everyone') {
      message.deletedForEveryone = true;
    } else {
      if (!message.deletedFor.includes(username)) {
        message.deletedFor.push(username);
      }
    }
    await message.save();
    req.io.emit('message_update');
    res.json({ success: true });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.patch('/:id/pin', async (req, res) => {
  try {
    const message = await Message.findById(req.params.id);
    if (!message) return res.status(404).json({ error: 'Message not found' });
    message.pinned = !message.pinned;
    await message.save();
    req.io.emit('message_update');
    res.json(message);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;