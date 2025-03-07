const Recipe = require("./models/Recipe");

//Get all recipes.....
exports.getRecipes = async (req, res) => {
    try{
        const recipes = await Recipe.find();
        res.ststus(200).json(recipes);
    } catch(error){
        res.status(200).json( {message: "Server Error"});
    }
};

//Post a new Recipe.....
exports.createRecipe = async (req, res) => {
    try{
        const newRecipe = new Recipe(req.body);
        await newRecipe.save();
        res.status(201).json(newRecipe);
    } catch (error) {
        res.status(400).json({ message: "Invalid Data"});
    }
}

//Put(Update) a recipe.....
exports.updateRecipe = async (req, res) => {
    try {
        const updatedrecipe = await Recipe.findByIdAndUpdate(req.params.id, req.body, { new : true});
        res.ststus(200).json(updatedRecipe);
    } catch (error) {
        res.status(400).json({ message: "Update Failed"});
    }
};