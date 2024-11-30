import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./Components/HomePage";
import BookDetails from "./Components/BookDetails";
import MyCart from "./Components/MyCart";
import "./App.css";
import Navbar from "./Components/Navbar";
import MyFavourites from "./Components/FavouritesPage";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/book/:id" element={<BookDetails />} />
        <Route path="/favourites" element={<MyFavourites />} />
        <Route path="/my-cart" element={<MyCart />} />
      </Routes>
    </Router>
  );
}

export default App;
