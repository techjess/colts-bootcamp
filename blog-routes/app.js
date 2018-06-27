var express   = require('express');
app           = express();
bodyParser    = require('body-parser');
mongoose      = require('mongoose');

mongoose.connect("mongodb://localhost/restful_blog_app");
// title
// image
// body
// created

app.set('view engine', "ejs");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended:true}));


var blogSchema = new mongoose.Schema({
  title: String,
  image: String,
  body: String,
  created: {type: Date, default: Date.now}
});

var Blog = mongoose.model("Blog", blogSchema);

// Blog.create({
//   title: "Test Blog",
//   image: "https://images.unsplash.com/photo-1510127034890-ba27508e9f1c?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=99eb682c310cbb7c6833ec81c1eae8dd&auto=format&fit=crop&w=800&q=60",
//   body: "Hello this is a blog post"
// })

app.get('/', function(req, res) {
  res.redirect('/blogs');
});
// Restful routes
//index
app.get('/blogs', function(req, res){
  Blog.find({}, function(err, blogs){
    if(err){
      console.log("Error");
    }else{
      res.render("index", {blogs:blogs});
    }
  })
});

//new routes

app.get('/blogs/new', function( req, res){
  res.render('new');
});
//create routes
app.post('/blogs', function(req, res){
  Blog.create(req.body.blog, function(err, newBlog){
    if(err){
      res.render('new');
    }else{
      res.redirect('/blogs');
    }
  });
});








app.listen(3000, function(){
  console.log("server is running");
})
