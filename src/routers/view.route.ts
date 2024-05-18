import express from "express";
const viewRouter = express.Router();

viewRouter.get("/", (req, res) => {
  res.render("demo", { sessionName: "Express" });
});

export { viewRouter };
