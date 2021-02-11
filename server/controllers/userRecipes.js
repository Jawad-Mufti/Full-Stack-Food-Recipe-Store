var    express = require('express'),
       router  = express.Router({mergeParams:true}),
       Recipe  = require('../models/recipe'),
       Comment = require('../models/comment');


// get all recipes
