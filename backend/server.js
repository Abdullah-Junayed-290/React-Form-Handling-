import express from "express";
import cors from "cors";
import BodyParser from "body-parser";
const app = express();
const port = 5000;

app.use(cors());
app.use(BodyParser.json());

let logins = [];

app.post("/", (req, res) => {
  console.log("new login ", req.body);
  logins.push(req.body);
  res.send("hello post");
});

app.get("/", (req, res) => {
  res.json(logins);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
