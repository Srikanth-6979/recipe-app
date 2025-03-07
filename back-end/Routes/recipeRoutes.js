const express = require("express");
const { getRecipes, createRecipe, updateRecipe } = require("../Contollers/recipeController");

const router = express.Router();

router.get("/", getRecipes);
router.post("/", createRecipe);
router.put("/:id", updateRecipe);

module.expoerts = router;