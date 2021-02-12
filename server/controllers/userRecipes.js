var    express = require('express'),
       router  = express.Router({mergeParams:true}),
       Recipe  = require('../models/recipe'),
       Comment = require('../models/comment');


// get all recipes
router.get("/", function (req, res, next) {
    Recipe.find({}, function (err, recipes) {
        if (err) {
            return next(err);
        } else {
            res.json({ "data": recipes });
        }

    });
});

// create a new recipe
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
