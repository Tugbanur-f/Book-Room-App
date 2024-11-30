import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { RemoveFromFavourites } from "./AddToFavourites"; // RemoveFromFavourites'ı buraya dahil ediyoruz

const MyFavourites = () => {
  const [favourites, setFavourites] = useState([]);

  // Favoriler localStorage'dan alınıyor
  useEffect(() => {
    const storedFavourites =
      JSON.parse(localStorage.getItem("favourites")) || [];
    setFavourites(storedFavourites);
  }, []);

  return (
    <div className="my-favourites">
      {favourites.length === 0 ? (
        <p>Your favourite is empty.</p>
      ) : (
        <div className="favourites-items">
          {favourites.map((book) => (
            <div key={book.id} className="favourites-item">
              <h3>{book.volumeInfo.title}</h3>
              <img
                src={book.volumeInfo.imageLinks?.thumbnail}
                alt={book.volumeInfo.title}
              />
              <p>{book.volumeInfo.authors?.join(", ")}</p>
              <RemoveFromFavourites
                bookId={book.id}
                setFavourites={setFavourites}
                favourites={favourites}
              />
            </div>
          ))}
        </div>
      )}
      <Link to="/" className="back-button">
        Back
      </Link>
    </div>
  );
};

export default MyFavourites;
