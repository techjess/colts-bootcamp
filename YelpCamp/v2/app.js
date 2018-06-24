var express = require('express'),
  app = express(),
  mongoose = require('mongoose'),
  bodyParser = require('body-parser');

  mongoose.connect("mongodb://localhost/yelp_camp");

app.use(bodyParser.urlencoded({extended:true}));
app.set('view engine', 'ejs');

//schema setup
var campgroundSchema = new mongoose.Schema({
  name: String,
  image: String
});

var Campground = mongoose.model("Campground", campgroundSchema);

// Campground.create({
//   name: 'Mountains Goats Rest',
//   image: "https://pixabay.com/get/e83db7082af3043ed1584d05fb1d4e97e07ee3d21cac104497f9c67eafe4b1be_340.jpg"
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
    res.render('campgrounds',{camp:allCampgrounds})
  }
})
  //res.render("campgrounds", {camp:campgrounds});
});

app.post('/campgrounds', function(req, res){

  //get data from form and add to campgrounds array
  var name = req.body.name;
  var image = req.body.image;
  var newCampground = {
    name:name, image:image
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

app.listen(3000, function(){
  console.log('YelpCamp Server has started');
})
