import dotenv from "dotenv";
import path from "path";
import { routers } from "./routers";
import { db } from "./datasource";
import { Users } from "./entity/User.entity";
import express, { Request, Response, NextFunction } from "express";

dotenv.config();

const app = express();
const port = process.env.PORT || 8000;

app.use(express.static("public"));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Catch-all error handler
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});

Object.entries(routers).forEach(([route, router]) => {
  app.use(`/api/${route}`, router);
});

app.get("/demo", (_req, res) => {
  res.render("demo", {
    sessionName: "Node",
  });
});

// 404 Not Found handler
app.use((_req, res) => {
  res.status(404).render("404");
});

app.get("*", (_req, res) => {
  res.render("404");
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
