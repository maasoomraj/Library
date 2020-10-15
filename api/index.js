const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("./routes/swagger.json");
// ROUTES
const books = require("./routes/book");

dotenv.config();
const app = express();

mongoose.connect(
  process.env.MONGO_DB,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => console.log("Connected to DB")
);

// MIDDLEWARES
app.use(express.json());
app.use("/swagger", swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use("/", books);

const PORT = 8000;
app.listen(PORT, function (error) {
  if (error) {
    console.log(error);
  } else {
    console.log(`Server listening at port ${PORT}`);
  }
});
