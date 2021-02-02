var path = require('path');
var express = require('express');
var router = express.Router();


var adminRecipeRoute  = require("../controllers/adminRecipes"),
    adminCommentRoute = require("../controllers/adminComments"),
    userRecipeRoute   = require("../controllers/userRecipes"),
    userCommentRoute  = require("../controllers/userComments");

router.get('/api', function(req, res) {
    res.json({"message": "Welcome to your DIT341 backend project!"});
});

// Insert routes below
router.use("/admin/recipes", adminRecipeRoute);
router.use("/admin/recipes/:id/comments", adminCommentRoute);