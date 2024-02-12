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
    (
      <div className="App">
        <Navbar />
        <Routes>
        <Route path="/" element={<RecipeSearch />} /> 
        <Route path="/recipe/:id" element={<RecipeDetails />} /> 
        </Routes>
        <Footer />
      </div>
    )
  );
}

export default App;
