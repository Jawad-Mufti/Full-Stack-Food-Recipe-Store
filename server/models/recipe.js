var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var recipeModel = new Schema({
    title: { type: String },
    image: { type: String },
    description: { type: String },
    comments: [
        {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Comment"
    }]
});

module.exports = mongoose.model('recipes', recipeModel);
