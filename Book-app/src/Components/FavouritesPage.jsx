import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { RemoveFromFavourites } from "./FavouriteContext";

const MyFavourites = () => {
  const navigate = useNavigate();
  const [favourites, setFavourites] = useState([]);

  useEffect(() => {
    const storedFavourites =
      JSON.parse(localStorage.getItem("favourites")) || [];
    setFavourites(storedFavourites);
  }, []);

  return (
    <div className="my-favourites">
      <button onClick={() => navigate(-1)} className="go-back-btn">
        Go Back
      </button>

      {favourites.length === 0 ? (
        <h5>Your favourite is empty.</h5>
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
    </div>
  );
};

export default MyFavourites;
