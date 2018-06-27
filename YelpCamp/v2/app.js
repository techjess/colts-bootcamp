var express     = require('express'),
    app         = express(),
    mongoose    = require('mongoose'),
    bodyParser  = require('body-parser');

  mongoose.connect("mongodb://localhost/yelp_camp");

app.use(bodyParser.urlencoded({extended:true}));
app.set('view engine', 'ejs');

//schema setup
var campgroundSchema = new mongoose.Schema({
  name: String,
  image: String,
  description: String
});

var Campground = mongoose.model("Campground", campgroundSchema);

// Campground.create({
//   name: 'Mountains Goats Rest',
//   image: "https://pixabay.com/get/ea36b70928f21c22d2524518b7444795ea76e5d004b0144295f0c578a6e4b1_340.jpg",
//   description: 'this is a huge waterfall granit hill'
// }, function(err, campground){
//   if(err){
//     console.log(err);
//   }else{
//     console.log("Newly created campground");
//     console.log(campground);
//   }
// })

app.get('/', function(req,res){
  res.render("landing");
})

app.get("/campgrounds", function(req, res){
 //get all campgrounds from db
Campground.find({}, function(err, allCampgrounds){
  if(err){
    console.log(err);
  }else{
    res.render('index',{camp:allCampgrounds})
  }
})
  //res.render("campgrounds", {camp:campgrounds});
});

app.post('/campgrounds', function(req, res){

  //get data from form and add to campgrounds array
  var name = req.body.name;
  var image = req.body.image;
  var desc = req.body.description
  var newCampground = {
    name:name, image:image, description:desc
  }

  //create a new campground and save to a new database
  Campground.create(newCampground, function(err,newlyCreated){
    if(err){
      console.log(err);
    }else{
      console.log("New campground has been created");
      console.log(newlyCreated);
      res.redirect('/campgrounds');
    }
  });
  //redirect back to campgrounds page


});

app.get("/campgrounds/new", function(req, res){
  res.render("new.ejs");
})
//SHOW
app.get('/campgrounds/:id',function(req, res){
  //find the campground with provided
  Campground.findById(req.params.id, function(err, foundCampground){
    if(err){
      console.log(err);
    }else{
      //render show template with that campground
      res.render('show', {campground:foundCampground});
    }
  })


})

app.listen(3000, function(){
  console.log('YelpCamp Server has started');
})
