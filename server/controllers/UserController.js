const passport = require("passport");
const mongoose = require("mongoose");
const User = mongoose.model("User");

exports.signup = async (req, res) => {
  const newUser = new User(req.body);

  try {
    await newUser.save();
    res.redirect("http://localhost:3000/login");
  } catch (error) {
    console.log(error);
    res.redirect("http://localhost:3000/signup");
  }
};

exports.authenticateUser = function (req, res, next) {
  passport.authenticate('local', function(err, user, info) {
    if (err) {
      return next(err); // will generate a 500 error
    }
    // Generate a JSON response reflecting authentication status
    if (!user) {
      return res.send({ success : false, message : 'Email y/o contraseña incorrectos' });
    }

    req.login(user, loginErr => {
      if (loginErr) {
        return next(loginErr);
      }
      return res.send({ success : true, message : 'authentication succeeded', user });
    });      
  })(req, res, next);
};
