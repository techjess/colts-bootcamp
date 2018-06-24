var express = require('express');
var app = express();

var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended:true}));
app.set('view engine', 'ejs');

var campgrounds= [
  {name: 'Salmon Creek', image: "https://pixabay.com/get/ea36b70928f21c22d2524518b7444795ea76e5d004b014439cf7c671aee9b3_340.jpg"},
  {name: 'MOuntains Goats Rest', image: "https://pixabay.com/get/e83db7082af3043ed1584d05fb1d4e97e07ee3d21cac104497f9c67eafe4b1be_340.jpg"},
  {name: 'Granite Creek', image: "https://pixabay.com/get/e03db50f2af41c22d2524518b7444795ea76e5d004b014439cf7c671aee9b3_340.jpg"},
  {name: 'Salmon Creek', image: "https://pixabay.com/get/ea36b70928f21c22d2524518b7444795ea76e5d004b014439cf7c671aee9b3_340.jpg"},
  {name: 'MOuntains Goats Rest', image: "https://pixabay.com/get/e83db7082af3043ed1584d05fb1d4e97e07ee3d21cac104497f9c67eafe4b1be_340.jpg"},
  {name: 'Granite Creek', image: "https://pixabay.com/get/e03db50f2af41c22d2524518b7444795ea76e5d004b014439cf7c671aee9b3_340.jpg"},
  {name: 'Salmon Creek', image: "https://pixabay.com/get/ea36b70928f21c22d2524518b7444795ea76e5d004b014439cf7c671aee9b3_340.jpg"},
  {name: 'MOuntains Goats Rest', image: "https://pixabay.com/get/e83db7082af3043ed1584d05fb1d4e97e07ee3d21cac104497f9c67eafe4b1be_340.jpg"},
  {name: 'Granite Creek', image: "https://pixabay.com/get/e03db50f2af41c22d2524518b7444795ea76e5d004b014439cf7c671aee9b3_340.jpg"},
];

app.get('/', function(req,res){
  res.render("landing");
})

app.get("/campgrounds", function(req, res){


  res.render("campgrounds", {camp:campgrounds});
});

app.post('/campgrounds', function(req, res){

  var name = req.body.name;
  var image = req.body.image;
  var newCampground = {
    name:name, image:image
  }
  campgrounds.push(newCampground);
  //get data from form and add to campgrounds array

  //redirect back to campgrounds page
  res.redirect('/campgrounds');

});

app.get("/campgrounds/new", function(req, res){
  res.render("new.ejs");
})

app.listen(3000, function(){
  console.log('YelpCamp Server has started');
})
