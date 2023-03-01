//required modules

const express = require("express");
const app = express();
const cors = require("cors");
const dotenv = require("dotenv");
const { response, request } = require("express");
dotenv.config();

//let our server know that the dbservice is required, and where to find it
const dbservice = require("./dbservice");

app.use(cors());
app.use(express.json());

//Create
app.post("/insert", (request, response) => {});

//Read
app.get("/getNames", (request, response) => {
  const dbSQL = dbservice.getDBService();

  const results = dbSQL.getAllData();

  console.log(results);
});

//Update
// app.put("/updateNames", (request, response) => {});

//Delete
// app.delete("/deleteNames", (request, response) => {});

app.listen(process.env.PORT, () => console.log("We working"));
