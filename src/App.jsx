import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap-icons/font/bootstrap-icons.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import RecipeSearch from "./components/RecipeSearchForm.jsx";
import RecipeDetails from "./components/RecipePage.jsx";
import Footer from "./components/Footer.jsx";



function App() {
  return (
    <div className="app-container">
      <div className="content">
        <Navbar />
        <Routes>
          <Route path="/" element={<RecipeSearch />} /> 
          <Route path="/recipe/:id" element={<RecipeDetails />} /> 
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
