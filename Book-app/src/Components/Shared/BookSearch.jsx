import { useState } from "react";
import { Link } from "react-router-dom";
import useFetch from "../../Hooks/useFetch";
import { API_KEY } from "../../config";
import AddToCart from "../AddToCart";
import { AddToFavourites } from "../FavouriteButtons";
import { getBookDetails } from "../../Helpers/Helpers";

const BookSearch = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [url, setUrl] = useState("");
  const [favourites, setFavourites] = useState(() => {
    const savedFavourites = localStorage.getItem("favourites");
    return savedFavourites ? JSON.parse(savedFavourites) : [];
  });

  const { data, loading, error } = useFetch(url);

  const handleSearch = () => {
    if (searchTerm.trim()) {
      setUrl(
        `https://www.googleapis.com/books/v1/volumes?q=${searchTerm}&langRestrict=en&key=${API_KEY}`,
      );
    } else {
      alert("Please enter a book title to search.");
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div className="book-search">
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        onKeyDown={handleKeyPress}
        placeholder="Enter book title"
      />
      <button onClick={handleSearch}>Search</button>

      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}

      <div className="book-list">
        {data &&
          data.items &&
          data.items.map((book) => {
            const { title, price, image } = getBookDetails(book);

            return (
              <div key={book.id} className="book-card">
                <Link to={`/book/${book.id}`} className="book-link">
                  <h3>{title}</h3>
                  <img src={image} alt={title} />
                  <p>Price: ${price}</p>
                </Link>
                <AddToCart book={book} />
                <AddToFavourites
                  book={book}
                  favourites={favourites}
                  setFavourites={setFavourites}
                />
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default BookSearch;
