const express = require("express");
require("./services/passport.js");

const app = express();
const port = process.env.PORT || 3000;

require("./routes/authRoutes")(app);

app.listen(port, () => {
  console.log(`App is listening on port ${port}`);
});
