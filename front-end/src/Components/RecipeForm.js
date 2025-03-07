import React, {useState} from "raect";
import { createRecipe } from "../Services/recipeService";

const RecipeForm = () => {
    const [title, setTitle] = usestate("");
    const [ingredients, setIngredients] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        await createRecipe({ title, ingredients: ingredients.split(",")});
        alert("Recipe Added");
    };

    return (
        <form onSubmit = {handleSubmit}>
            <input type = "text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} required/>
            <input type="text" placeholder ="Ingredients (comma seperated)" value= {ingredients} onChange={(e) => setIngredients(e.target.value)} required />
            <button type="submit"> Add Recipe</button> 
        </form>
    );
};

export default RecipeForm;