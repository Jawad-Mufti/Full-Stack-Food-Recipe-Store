var express = require('express'),
	router = express.Router({ mergeParams: true }),
	Recipe = require('../models/recipe'),
	Comment = require('../models/comment'),
	path = require('path'),
	ObjectID = require('mongodb').ObjectID;



// Get all recipes by Admin


router.get("/", function (req, res, next) {
	if(req.query.search){
		const regex = new RegExp(escapeRegex(req.query.search), 'gi');
		Recipe.find({title:regex}, function (err, recipes) {
			if (err) {
				return next(err);
			} else {
				res.json({ "data": recipes });
			}
	
		});
	} else{
		Recipe.find({}, function (err, recipes) {
			if (err) {
				return next(err);
			} else {
				res.json({ "data": recipes });
			}
	
		});
	}
});

// Create a new Recipe 

router.post("/", function (req, res, next) {
	Recipe.create({

		title: req.body.title,
		image: req.body.image,
		description: req.body.description

	}, function (err, recipe) {
		if (err) {
			return next(err);
		} else {
			res.status(201).json(recipe);
		}
	});
});

// delete a specific recipe choosen by ID

router.delete("/:id", function (req, res, next) {
	const _id = new ObjectID(req.params.id);
	Recipe.collection.deleteOne({ _id: _id }, function (err, recipe) {
		if (err) {
			return next(err);

		}
		else {
			res.status(202).json(recipe);
		}
	});
});

// delete all recipes!

router.delete("/", function (req, res, next) {
	Recipe.remove({}, function (err) {
		if (err) {
			return next(err);
		} else {
			res.status(202).json({ "message": "All recipes are deleted" });
		}
	});
});

// update a specific recipe! 

router.put("/:id", function (req, res, next) {
	var data = {
		title: req.body.title,
		image: req.body.image,
		description: req.body.description
	}
	Recipe.findByIdAndUpdate(req.params.id, data, function (err, UpdatedRecipe) {
		if (err) {
			return next(err);
		} else {
			res.status(201).json(UpdatedRecipe);
		}
	})
});

router.patch('/:id', function (req, res, next) {
	var id = req.params.id;
	Recipe.findById(id, function (err, recipe) {
		if (err) { return next(err); }
		if ( recipe == null) {
			return res.status(404).json(
				{ "message": "Recipe not found" });
		}
		recipe.title = (req.body.title || recipe.title);
		recipe.image = (req.body.image || recipe.image);
		recipe.description = (req.body.description || recipe.description);
		recipe.save();
		res.status(201).json(recipe);
	});
});


function escapeRegex(text) {
    return text.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
};


module.exports = router
