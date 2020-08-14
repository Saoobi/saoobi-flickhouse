require("dotenv").config();

const express = require("express"),
  cors = require("cors"),
  app = express(),
  port = process.env.PORT || 3001;

const questionRoute = require("./routes/question");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded());

app.use("/api", questionRoute);
app.listen(port, () => console.log(`App running on port ${port}`));
