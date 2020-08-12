const express = require("express"),
  cors = require("cors"),
  app = express(),
  port = process.env.PORT || 3001;

const questionsRoute = require("./routes/questions");

app.use(cors());

app.use("/api", questionsRoute);

app.listen(port, () => console.log(`App running on port ${port}`));
