import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./Components/HomePage";
import BookSearch from "./Components/BookSearch";
import BookDetails from "./Components/BookDetails";
import MagazinePage from "./Components/MagazinePage";
import MagazineDetails from "./Components/MagazineDetails";
import "./App.css";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/search" element={<BookSearch />} />
        <Route path="/book/:id" element={<BookDetails />} />
        <Route path="/magazine" element={<MagazinePage />} />
        <Route path="/magazine/:id" element={<MagazineDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
