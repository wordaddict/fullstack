const express = require("express");
const config = require('./config/config');
const cookieSession = require("cookie-session");
const passport = require("passport");
const keys = require('./config/keys');

require('./models/User');
require("./services/passport.js");

const app = express();

app.get('/', (req, res) => {
  res.send('We are live!')
});

app.use(cookieSession({
  maxAge: 30 * 24 * 60 * 60 * 1000,
  keys: [keys.cookieKey]
}))

app.use(passport.initialize());
app.use(passport.session());

const port = process.env.PORT || 3000;

require("./routes/authRoutes")(app);

app.listen(port, () => {
  console.log(`App is listening on port ${port}`);
});
