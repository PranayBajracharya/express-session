import dotenv from "dotenv";
import express from "express";
import path from "path";
import { routers } from "./routers";

dotenv.config();

const app = express();
const port = process.env.PORT || 8000;

app.use(express.static("public"));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

Object.entries(routers).forEach(([route, router]) => {
  app.use(route, router);
});

app.get("*", (req, res) => {
  res.render("404");
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
