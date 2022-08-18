const apiRoutes = require("./routes/apiRoutes");
const htmlRoutes = require("./routes/htmlRoutes");
const express = require("express");
const fs = require("fs");
const path = require("path");
const app = express();
const PORT = 3000;
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(express.json());
app.use("/api", apiRoutes);
app.use("/", htmlRoutes);
app.use(express.static(path.join(__dirname, "public")));
// require("./routes/routes")(app);
app.listen(PORT, function () {
  console.log("App listening on PORT " + PORT);
});
