var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var commentModel = new Schema({
    author: { type: String },
    text: { type: String }
});

module.exports = mongoose.model('Comment', commentModel);