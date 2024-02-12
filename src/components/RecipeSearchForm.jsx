import React, { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import RecipeComponent from "./RecipeComponent"; 
import Home from "./Home";

const RecipeSearch = () => {
  const [query, setQuery] = useState("");
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searched, setSearched] = useState(false);

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const searchRecipes = async () => {
    try {
      setLoading(true);
      const response = await axios.get(
        "https://api.spoonacular.com/recipes/complexSearch",
        {
          params: {
            query: query,
            diet: "vegetarian",
            number: 50,
            apiKey: "f4bc6eac20054f8c9106211fc38f4156",
          },
        }
      );
      setSearched(true); 
      setLoading(false);
      setRecipes(response.data.results);
      if (response.data.results.length === 0) {
        Swal.fire({
          title: "No Results",
          text: "No vegetarian recipes found for your search query.",
          icon: "info",
          confirmButtonText: "OK",
        });
        setSearched(false); 
      }
    } catch (error) {
      setLoading(false);
      console.error("Error fetching recipes:", error);
      Swal.fire({
        title: "Error",
        text: "An error occurred while fetching recipes. Please try again later.",
        icon: "error",
        confirmButtonText: "OK",
      });
    }
  };

  return (
    <div className="container">
      <div className="row justify-content-center form-container">
        <div className="col-md-6 d-flex justify-content-center">
          <div className="input-group">
            <input
              type="text"
              className="form-control"
              value={query}
              onChange={handleInputChange}
              placeholder="Search vegetarian recipes..."
            />
            <div className="input-group-append">
              <button className="btn" type="button" onClick={searchRecipes}>
                Search
              </button>
            </div>
          </div>
        </div>
      </div>
      {loading && <div className="loading">Loading...</div>}
      {!searched && <div className="div">
        <Home />
      </div>}
      <div className="row justify-content-center mt-3">
        {recipes.map((recipe) => (
          <div
            className="col-lg-3 col-md-6 col-sm-6 mb-4 d-flex justify-content-center"
            key={recipe.id}
          >
            <RecipeComponent recipe={recipe} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecipeSearch;
