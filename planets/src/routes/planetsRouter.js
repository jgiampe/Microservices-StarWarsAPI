const { Router } = require("express");
const planets = require("../data/planets.json");

const planetsRouter = Router();

planetsRouter.get("/planets", (req, res) => {
  res.status(200).json(planets);
});

module.exports = planetsRouter;
