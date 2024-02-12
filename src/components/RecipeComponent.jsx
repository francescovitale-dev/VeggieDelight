import { Link } from "react-router-dom";

const RecipeComponent = ({ recipe }) => {
  return (
    <div className="card mb-3 card-style" style={{ width: "18rem" }}>
      <div className="card-body">
        <h5 className="card-title">
          <Link className="card-link" to={`/recipe/${recipe.id}`}>{recipe.title}</Link>
        </h5>
        <img src={recipe.image} className="card-img-top" alt={recipe.title} />
      </div>
    </div>
  );
};

export default RecipeComponent;
