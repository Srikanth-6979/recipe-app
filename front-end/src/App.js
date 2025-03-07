import React from "react";
import RecipeList from "./Components/RecipeList";
import RecipeForm from "./Components/RecipeForm";

const App = () => {
  return (
    <div> 
      <h1> Recipe Mangement</h1>
      <RecipeForm />
      <RecipeList />
    </div>
  );
};

export default App;