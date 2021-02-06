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
    });
});

// create a new comment for a speicfic Recipe 


router.post("/", function (req, res, next) {

	var newComment = {
		author: req.body.author,
		text: req.body.text
	}

	Recipe.findById(req.params.id, function (err, recipe) {
		if (err) {
			return next(err);

		} else if (recipe == null) {
			return res.status(404).json({ "message": "Recipe is not Found" });
		}

		else {
			Comment.create(newComment, function (err, comment) {
				if (err) {
					return next(err);
				} else {
					recipe.comments.push(comment);
					recipe.save();
					res.status(201).json(recipe);
				}
			});
		}
	});
});