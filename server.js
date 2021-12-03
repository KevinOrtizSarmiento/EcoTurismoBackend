const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const morgan = require("morgan");
const dotenv = require("dotenv");
const rutasApi = require("./routes/api");

dotenv.config();
const app = express();

mongoose
  .connect(
    "mongodb+srv://" +
      process.env.DB_USERNAME +
      ":" +
      process.env.DB_PASSWORD +
      "@cluster0.erljt.mongodb.net/ecoturismo?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => {
    console.log("Conectado a MongoDb");
    app.listen(process.env.PORT, () => {
      console.log("Escuchando en puerto: " + process.env.PORT);
    });
  })
  .catch((error) => {
    console.log(error);
  });

app.use(morgan("dev"));
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(cors());
app.use("/api", rutasApi);
