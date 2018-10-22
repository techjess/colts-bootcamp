var express = require("express");
var app = express();

app.set("view engine", "ejs");

app.get("/", function(req, res){
  res.render("landing");
});

app.get("/campgrounds", function(req,res){
  var campgrounds = [
    {name: "Salmon Creek", image: "https://pixabay.com/get/ea36b70928f21c22d2524518b7444795ea76e5d004b0144595f2c579afeeb1_340.jpg"},
    {name: "Hesitation Way", image: "https://pixabay.com/get/e837b1072af4003ed1584d05fb1d4e97e07ee3d21cac104491f0c37da7e5b6bc_340.jpg"},
    {name: "Mountain Goats rest", image: "https://pixabay.com/get/e03db50f2af41c22d2524518b7444795ea76e5d004b0144595f2c579afeeb1_340.jpg"}
  ]
  res.render("campgrounds", {camps:campgrounds});
})

app.listen(3000, function(){
  console.log('The YelpCamp server has started!')
});
