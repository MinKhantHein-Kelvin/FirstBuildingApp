const express = require("express");
const app = express();
const PORT =  4000;
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

//connect to Database
mongoose.connect(
  process.env.db,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => {
    console.log("DB is connected");
  }
);

// import route
const listingRouters = require("./routes/listing");


//Route Middleware
app.use(express.json());
app.use("/api/crud", listingRouters);


app.listen(PORT, () => {
  console.log("Server is running on Port at 4000");
});

