const mongoose = require('mongoose');

const messageSchema = new mongoose.Schema({
  username: { type: String, required: true },
  content: { type: String, required: true },
  pinned: { type: Boolean, default: false },
  deletedForEveryone: { type: Boolean, default: false },
  deletedFor: { type: [String], default: [] },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Message', messageSchema);