
const connectToMongo = require("./db");

connectToMongo();

const express = require("express");
const app = express();
const port = 5000;
var cors = require('cors')

app.use(cors())
app.use(express.json()); 

app.use("/api/auth", require("./routes/demo"));
app.use("/api/auth", require("./routes/auth"));
app.use("/api/todo",require("./routes/todotask"));

app.get("/",(req,res)=>{
  res.send("Hello Man ")
})


app.listen(port, () => {
  console.log(`Server connected on port ${port}`);
});
