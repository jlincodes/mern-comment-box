'use strict';

//import dependency
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// create new instance of the mongoose.schema
// the schema takes an object that shows the shape of db entries
const CommentsSchema = new Schema({
  author: String,
  text: String,
});

module.exports = mongoose.model('Comment', CommentsSchema);
