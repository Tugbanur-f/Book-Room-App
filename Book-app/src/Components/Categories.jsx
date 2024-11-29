import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import useFetch from "../Hooks/useFetch";
import { API_KEY } from "../config";

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
  const { data, loading, error } = useFetch(url);

  useEffect(() => {
    if (selectedCategory) {
      setUrl(
        `https://www.googleapis.com/books/v1/volumes?q=subject:${selectedCategory}&key=${API_KEY}`,
      );
    }
  }, [selectedCategory]);

  const onCategorySelect = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div className="categories">
      {categories.map((category) => (
        <button
          key={category}
          className={selectedCategory === category ? "active" : ""}
          onClick={() => onCategorySelect(category)}
        >
          {category}
        </button>
      ))}

      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}

      <div className="book-list">
        {data &&
          data.items &&
          data.items.map((book) => (
            <div key={book.id} className="book-card">
              <h3>{book.volumeInfo.title}</h3>
              <img
                src={book.volumeInfo.imageLinks?.thumbnail}
                alt={book.volumeInfo.title}
              />
              <Link to={`/book/${book.id}`} className="view-details-btn">
                View Details
              </Link>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Categories;
