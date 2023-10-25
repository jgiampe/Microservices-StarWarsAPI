const { Router } = require("express");
const controllers = require("../controllers");
const middlewares = require("../middlewares")

const characterRouter = Router();

characterRouter.get("/characters",controllers.getCharacters);
characterRouter.post("/characters", middlewares.characterValidation, controllers.createCharacter)

module.exports = characterRouter;
