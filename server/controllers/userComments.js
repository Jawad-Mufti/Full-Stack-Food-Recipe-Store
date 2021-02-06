var    express = require('express'),
       router  = express.Router({mergeParams:true}),
       Recipe  = require('../models/recipe'),
       Comment = require('../models/comment');

<<<<<<< HEAD
=======

>>>>>>> ba63c2c39c3c550e577ae462018112c6ebde8df6
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
<<<<<<< HEAD
    });
=======
    })
       ;
});

// create a new comment for a speicfic Recipe 


router.post("/",function(req,res, next){

	var newComment = {
		author  : req.body.author,
		text    : req.body.text
	}

	Recipe.findById(req.params.id,function(err,recipe){
		if(err){
			return next(err);

		} else if(recipe == null){
			return res.status(404).json({"message":"Recipe is not Found"});
		} 

		else{
			Comment.create(newComment,function(err,comment){
				if(err){
					return next(err);
				}else{
					recipe.comments.push(comment);
					recipe.save();
					res.status(201).json(recipe);
				}
			});
		}
	});
});

module.exports = router





>>>>>>> ba63c2c39c3c550e577ae462018112c6ebde8df6
