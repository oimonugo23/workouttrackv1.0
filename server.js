const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
//! require("./seeders/seed"); // Either npm run seed or keep this in here uncommented and it will run the seed

const PORT = process.env.PORT || 3005;

const app = express();

app.use(logger("short"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", {
  useUnifiedTopology: true,
  useNewUrlParser: true,
  useFindAndModify: false,
});

//require(apiRoute)(app);
app.use("", require("./routes/clientroutes"));
app.use("/api", require("./routes/workoutRoute"));

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
