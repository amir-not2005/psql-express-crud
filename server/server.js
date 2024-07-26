const express = require("express");
const cors = require("cors");
const app = express();

const peopleRouter = require("./routes/people.routes");

app.use(express.json());
app.use(cors());
app.use("/api", peopleRouter);

app.listen(3000, () => {
  console.log(">>> Server has been started <<<");
});
