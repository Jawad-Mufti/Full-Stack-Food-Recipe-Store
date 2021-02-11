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
