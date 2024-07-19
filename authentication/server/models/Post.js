const mongoose = require('mongoose');
const { Schema } = mongoose;

const postSchema = new Schema({
  post: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  },
});

const Post = mongoose.model('Post', postSchema);

module.exports = Post;
