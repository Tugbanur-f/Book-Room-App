import { useParams } from "react-router-dom";
import useFetch from "../Hooks/useFetch";
import { API_KEY } from "../config";
import AddToCart from "./AddToCart";
import { AddToFavourites } from "./FavouriteContext";
import { Link } from "react-router-dom";
import { useState } from "react";
import { getInitialFavourites, getBookDetails } from "../Helpers";

const CategoryPage = () => {
  const { categoryName } = useParams();
  const url = `https://www.googleapis.com/books/v1/volumes?q=subject:${categoryName}&key=${API_KEY}`;
  const { data, loading, error } = useFetch(url);

  const [favourites, setFavourites] = useState(getInitialFavourites);

  return (
    <div className="category-page">
      <h1>{categoryName}</h1>

      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}

      <div className="book-list">
        {data &&
          data.items &&
          data.items.map((book) => {
            const { title, price, image } = getBookDetails(book); // Helper'dan değerleri al

            return (
              <div key={book.id} className="book-card">
                <Link to={`/book/${book.id}`} className="book-link">
                  <h3>{title}</h3>
                  <img src={image} alt={title} />
                  <p>Price: {price}</p>
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
export default CategoryPage;
