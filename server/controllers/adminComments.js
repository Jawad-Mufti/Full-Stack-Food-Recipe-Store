var   express = require('express'),
      router  = express.Router({mergeParams:true}),
	  Recipe  = require('../models/recipe'),
	  Comment = require('../models/comment'),
	 ObjectID = require('mongodb').ObjectID;



// get all comments about specific recipe

router.get("/",function(req,res,next){
	Recipe.findById(req.params.id).populate("comments").exec(function(err,recipe){
		if(err){
		return next(err);
	}else if(recipe == null){
		return res.status(404).json({"message":"Recipe is not Found"});
	} else {
		res.json(recipe);
	}

	});
});

// create a comment to recipe
router.post("/",function(req,res,next){

	var newComment = {
		author  : req.body.author,
		text    : req.body.text
	}

	Recipe.findById(req.params.id,function(err,recipe){
		if(err){
			return next(err);
		} 
		 else{
			Comment.create(newComment,function(err,comment){
				if(err){
					return next(err);
				}else{
					recipe.comments.push(comment);
					recipe.save();
					res.status(200).json(comment);
				}
			});
		}
	});
});


// delete a specific comment for a specific recipe
router.delete("/:comment_id", function(req,res,next){
	console.log(req.params.comment_id);
	const _id = new ObjectID(req.params.comment_id);
	Comment.collection.deleteOne({_id:_id},function(err,deletedComment){
		if(err){
			return next(err);
		}else {
			console.log('the document is deleted');
			res.status(202).json(deletedComment);
		}
	});
});


// update a specific comment 
router.put("/:comment_id", function(req,res){

	var newComment = {
		author  : req.body.author,
		text    : req.body.text
	}

	Comment.findByIdAndUpdate(req.params.comment_id, newComment, function(err,updatedComment){
		if(err){
			return next(err);
		}else if (updatedComment==null){
			return res.status(404).json({"message":"Comment is not Found"});
		}else {
			res.status(202).json(updatedComment);
		}
	});
});

router.patch('/:comment_id', function (req, res, next) {
	var id = req.params.comment_id;
	Comment.findById(id, function (err, comment) {
		if (err) { return next(err); }
		if ( comment == null) {
			return res.status(404).json(
				{ "message": "Recipe not found" });
		}
		comment.author = (req.body.author || comment.author);
		comment.text = (req.body.text || comment.text);
		comment.save();
		res.status(201).json(comment);
	});
});



 module.exports = router  