import React, { useState, useEffect } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { useParams } from "react-router-dom";

const RecipeDetails = () => {
  const [recipe, setRecipe] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchRecipeDetails = async () => {
      try {
        const response = await axios.get(
          `https://api.spoonacular.com/recipes/${id}/information`,
          {
            params: {
              apiKey: "2e4cf353307d4664bf7f639901886891",
            },
          }
        );
        setRecipe(response.data);
      } catch (error) {
        console.error("Error fetching recipe details:", error);
        Swal.fire({
          title: "Error",
          text: "An error occurred while fetching recipe details. Please try again later.",
          icon: "error",
          confirmButtonText: "OK",
        });
      }
    };

    fetchRecipeDetails();
  }, [id]);

  useEffect(() => {
    // Redirect to the homepage when the component mounts or updates
    window.history.pushState({}, '', '/');
  }, []);

  if (!recipe) {
    return <div>Loading...</div>;
  }

  return (
    <div className="recipe-container">
      <div className="row">
        <div className="col-lg-8 offset-lg-2 recipe-style">
          <h1 className="recipe-title">{recipe.title}</h1>
          <img src={recipe.image} alt={recipe.title} className="recipe-image" />
          <h2>Ingredients:</h2>
          <div className="recipe-ingredients">
            <div className="row">
              {recipe.extendedIngredients.map((ingredient) => (
                <div key={ingredient.id} className="col-md-6 recipe-ingredient">
                  {ingredient.original}
                </div>
              ))}
            </div>
          </div>
          <h2>Instructions:</h2>
          <ul className="recipe-instructions">
            {recipe.analyzedInstructions[0].steps.map((step) => (
              <li key={step.number} className="recipe-instruction">
                {step.step}.
              </li>
            ))}
          </ul>
          <p className="recipe-info">
            Ready in {recipe.readyInMinutes} minutes
          </p>
          <p className="recipe-info">Servings: {recipe.servings}</p>
        </div>
      </div>
    </div>
  );
};

export default RecipeDetails;
