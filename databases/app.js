var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/cat_app');


//adding a cat to the database


//retrieve all cats from the DB and console.log each one


var catSchema = new mongoose.Schema({
  name: String,
  age: Number,
  temperament: String
});

var Cat = mongoose.model("Cat", catSchema);

// var george = new Cat({
//   name :"George",
//   age: 11,
//   temperament: "grouchy"
// })

// george.save(function(err,cat){
//   if(err){
//     console.log("Something went wrong");
//   }
//   else{
//     console.log("We just saved a cat to the database");
//     console.log(cat);
//   }
// })]

Cat.create({
  name: "Snow White",
  age: 13,
  temperament: "Nice"
}, function(err, cat){
  if(err){
    console.log(err)

  }else{
    console.log(cat);
  }
})

Cat.find({}, function(err, cats){
  if(err){
  console.log("Oh no");
  console.log(err);
  }
  else{
    console.log("All the cats");
    console.log(cats);
  }

})
