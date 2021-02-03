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
router.use("/user/recipes", userRecipeRoute);
router.use("/user/recipes/:id/comments", userCommentRoute);


// All other routes redirect to the index.html
router.route('/admin').get(function (req, res) {
    res.sendfile(req.app.get('appPath') + '/owner.html');
});
router.route('/user').get(function (req, res) {
    res.sendfile(req.app.get('appPath') + '/user.html');
});

router.route('/*').get(function (req, res) {
    var relativeAppPath = req.app.get('appPath');
    var absoluteAppPath = path.resolve(relativeAppPath);
        res.sendFile(absoluteAppPath + '/index.html');
});

module.exports = router

