var mongoose = require('mongoose')

var Schema = mongoose.Schema;

var PostSchema = new Schema ({
  title: { type: String, required: true },
  content: { type: String, required: true },
  author: { type: Schema.Types.ObjectId, required: true, ref: "User" },
  comments: { type: Array, default: [] },
  published: { type: Boolean },
  timestamp: { type: Date },
  imgUrl: { type: String },
  likes: { type: Array, default: [] },
})