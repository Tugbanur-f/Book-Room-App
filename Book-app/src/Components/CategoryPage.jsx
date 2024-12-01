import { useParams } from "react-router-dom";
import useFetch from "../Hooks/useFetch";
import { API_KEY } from "../config";
import AddToCart from "./AddToCart";
import { AddToFavourites } from "./FavouriteContext";
import { Link } from "react-router-dom";

const CategoryPage = () => {
  const { categoryName } = useParams();
  const url = `https://www.googleapis.com/books/v1/volumes?q=subject:${categoryName}&key=${API_KEY}`;
  const { data, loading, error } = useFetch(url);

  return (
    <div className="category-page">
      <h1>{categoryName}</h1>

      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}

      <div className="book-list">
        {data &&
          data.items &&
          data.items.map((book) => {
            const price = book.saleInfo?.retailPrice?.amount
              ? `$${book.saleInfo.retailPrice.amount}`
              : "Not for sale.";

            return (
              <div key={book.id} className="book-card">
                <Link to={`/book/${book.id}`} className="book-link">
                  <h3>{book.volumeInfo.title}</h3>
                  <img
                    src={book.volumeInfo.imageLinks?.thumbnail}
                    alt={book.volumeInfo.title}
                  />
                  <p>Price: {price}</p>
                </Link>
                <AddToCart book={book} />
                <AddToFavourites book={book} />
              </div>
            );
          })}
      </div>
    </div>
  );
};
export default CategoryPage;
