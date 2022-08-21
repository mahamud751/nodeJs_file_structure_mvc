const express = require("express");
const productRouter = require("./routes/product.route");
const studentRoute = require("./routes/students.route");

const app = express();

const PORT = 3000;
app.use(express.urlencoded({ extended: true }));
app.use(productRouter);
app.use(studentRoute);

app.listen(PORT, () => {
  console.log(`server run on http://localhost:${PORT}`);
});
