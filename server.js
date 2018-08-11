let bodyParser = require("body-parser");
let mongoose = require("mongoose");
const express = require("express");
const path = require("path");
const app = express();
var passport = require("passport");
var LocalStrategy = require("passport-local").Strategy;
app.use(express.static("./build"));
app.use(express.static("./build/static"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
//password hash to hash passwords and save inside database.
const passwordHash = require("password-hash");
// console.log(hashedPassword);

var passport = require("passport"); // at header
app.use(passport.initialize()); // after line no.20 (express.static)
// require("./config/passport") ;

mongoose.connect(
  "mongodb://userdata:userdata1@ds119640.mlab.com:19640/codigo-app",
  { useNewUrlParser: true }
);

//creating schemas!

const UserSchema = new mongoose.Schema({
  id: String,
  userName: String,
  emailId: String,
  password: String
});

let User = mongoose.model("user", UserSchema);

app.get("/", (req, res) => {
  // console.log(“inside here”);
  res.sendFile(path.resolve("index.html"));
});


app.post("/login",(req,res)=>{
    console.log("database");
   console.log(req.body.data.userName);
   User.find({emailId:req.body.data.userName},(err,data)=>{
       console.log("in server post request"+data);
       res.json(data)
   })
})

// Adding user to the database

app.post("/signup", (req, res) => {

  let data = req.body.data;
  var hashedPassword = passwordHash.generate(data.password);
  console.log(hashedPassword);
  data.password = hashedPassword;
  console.log(data);
  // console.log(req.body.data.password);
  console.log(hashedPassword);
  User(data).save(function(err, data) {
    if (err) throw err;
    console.log(data);
    res.send(data);
  });
});

// Invalid url handling

app.use((req, res) => {
  res.status(404).json({
    error: {
      global: "Oops!! Something went wrong"
    }
  });
});

app.listen(8081, () => console.log("server running at 8080"));
