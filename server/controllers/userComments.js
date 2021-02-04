var    express = require('express'),
       router  = express.Router({mergeParams:true}),
       Recipe  = require('../models/recipe'),
       Comment = require('../models/comment');


// get all comments for a specific Recipe
router.get("/", function (req, res, next) {
    Recipe.findById(req.params.id).populate("comments").exec(function (err, recipe) {
        if (err) {
            return next(err);
        } else if (recipe == null) {
            return res.status(404).json({ "message": "Recipe is not Found" });
        } else {
            res.json(recipe);
        }
    })
       ;
});

