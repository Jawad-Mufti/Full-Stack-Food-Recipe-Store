var express        = require('express'),
    bodyParser     = require('body-parser'),
    mongoose       = require('mongoose'),
    morgan         = require('morgan'),
    path           = require('path'),
   //methodOverride = require("method-override"),
    app            = express();

// Connect to MongoDB
var mongoURI = process.env.MONGODB_URI || 'mongodb://localhost:27017/recipe_food';
var db = mongoose.connect(mongoURI, { useNewUrlParser: true });

// Variables
var port = process.env.PORT || 3000;
var env = app.get('env');
var root = path.normalize(__dirname + '/..');

//app.use(methodOverride("_method"));

// Parse requests of content-type 'application/json'
app.use(bodyParser.json());
// HTTP request logger
app.use(morgan('dev'));
// Serve static assets (for frontend client)
app.use(express.static(path.join(root, 'client')));
app.set('appPath', 'client');

// Import routes
// app.use("/admin/recipes",adminRecipeRoute);
// app.use("/admin/recipes/:id/comments",adminCommentRoute);
// app.use("/user/recipes",userRecipeRoute);
// app.use("/user/recipes/:id/comments",userCommentRoute);

app.use(require('./controllers/index'));


// Error handler (must be registered last)
app.use(function(err, req, res, next) {
    console.error(err.stack);
    var err_res = {
        "message": err.message,
        "error": {}
    };
    if (env === 'development') {
        err_res["error"] = err;
    }
    res.status(err.status || 500);
    res.json(err_res);
});

app.listen(port, function() {
    console.log(`Express server listening on port ${port}, in ${env} mode`);
});

exports = module.exports = app;
