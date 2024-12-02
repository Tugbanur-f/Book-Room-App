import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import BookDetails from "./Components/Shared/BookDetails";
import MyCart from "./pages/MyCart/MyCart";
import Navbar from "./Components/Navbar/Navbar";
import MyFavourites from "./pages/FavouritesPage/FavouritesPage";
import CategoryPage from "./Components/Categories/CategoryPage";
import "./App.css";
import "./pages/FavouritesPage/Fav.css";
import "./pages/MyCart/Cart.css";
import "./pages/HomePage/HomePage.css";
import "./Components/Navbar/Navbar.css";
import "./Components/Shared/Book.css";
import "./Components/Categories/Categories.css";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/book/:id" element={<BookDetails />} />
        <Route path="/categories/:categoryName" element={<CategoryPage />} />
        <Route path="/favourites" element={<MyFavourites />} />
        <Route path="/my-cart" element={<MyCart />} />
      </Routes>
    </Router>
  );
}

export default App;
