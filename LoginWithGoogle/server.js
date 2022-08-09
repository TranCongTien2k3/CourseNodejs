const express = require("express");
const app = express();
const session = require("express-session");
//PASSPORT SETUP
const passport = require("passport");
var userProfile;
// Google AUTH
const GoogleStrategy = require("passport-google-oauth20").OAhth2Strategy;
const GOOGLE_CLIENT_ID = "our-google-client-id";
const GOOGLE_CLIENT_SECRET = "our-google-client-secret";

//
app.use(
  session({
    resave: true,
    saveUninitialized: true,
    secret: "SECRET",
  })
);

// PASSPORT SETUP
app.use(passport.initialize());
app.use(passport.session());
app.set("view engine", "ejs");
//
//
passport.use(
  new GoogleStrategy(
    {
      clientID: GOOGLE_CLIENT_ID,
      clientSecret: GOOGLE_CLIENT_SECRET,
      callbackURL: "http://localhost:3000/auth/google/callback",
    },
    function (accessToken, refreshToken, profile, done) {
      userProfile = profile;
      return done(null, userProfile);
    }
  )
);
//

app.get("/success", (req, res) => {
  res.send(userProfile);
});
app.get("/error", (req, res) => {
  res.send("error logging in");
});

//
app.get("/", (req, res) => {
  res.render("pages/auth");
});
//
app.get(
  "/auth/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);

app.get(
  "/auth/google/callback",
  passport.authenticate("google", { failureRedirect: "/error" }),
  function (req, res) {
    // Successful authentication, redirect success.
    res.redirect("/success");
  }
);
//PASSPORT SETUP
passport.serializeUser((user, cb) => {
  cb(null, user);
});
passport.deserializeUser((obj, cb) => {
  cb(null, obj);
});

//

const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log("app listening on port" + port);
});
