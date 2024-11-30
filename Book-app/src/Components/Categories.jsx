import { useState, useEffect } from "react";

import { API_KEY } from "../config";

import { useNavigate } from "react-router-dom";

const Categories = () => {
  const [categories] = useState([
    "Fiction",
    "Science",
    "History",
    "Psychology",
    "Education",
    "Technology",
    "Art",
    "Romance",
  ]);

  const [selectedCategory, setSelectedCategory] = useState(null);
  const [url, setUrl] = useState("");
  const [dropdownOpen, setDropdownOpen] = useState(false);

  useEffect(() => {
    if (selectedCategory) {
      setUrl(
        `https://www.googleapis.com/books/v1/volumes?q=subject:${selectedCategory}&key=${API_KEY}`,
      );
    }
  }, [selectedCategory]);

  const navigate = useNavigate();

  const onCategorySelect = (category) => {
    setSelectedCategory(category);
    setDropdownOpen(false);
    navigate(`/categories/${category}`);
  };

  return (
    <div className="categories-button">
      <button
        onClick={() => setDropdownOpen(!dropdownOpen)}
        className="dropdown-button"
      >
        {selectedCategory
          ? `Category: ${selectedCategory}`
          : "Select a Category"}
      </button>

      {dropdownOpen && (
        <div className="dropdown-menu">
          {categories.map((category) => (
            <button
              key={category}
              className={`dropdown-item ${
                selectedCategory === category ? "active" : ""
              }`}
              onClick={() => onCategorySelect(category)}
            >
              {category}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default Categories;
