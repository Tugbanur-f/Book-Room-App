import { useState, useEffect } from "react";
import heartSolid from "../assets/heart-solid.svg";
import heartRegular from "../assets/heart-regular.svg";

export const AddToFavourites = ({ book }) => {
  const [favourites, setFavourites] = useState(() => {
    const savedFavourites = localStorage.getItem("favourites");
    return savedFavourites ? JSON.parse(savedFavourites) : [];
  });

  useEffect(() => {
    localStorage.setItem("favourites", JSON.stringify(favourites));
  }, [favourites]);

  const handleFavourite = () => {
    const isBookInFavourites = favourites.some((fav) => fav.id === book.id);

    if (isBookInFavourites) {
      const updatedFavourites = favourites.filter((fav) => fav.id !== book.id);
      setFavourites(updatedFavourites);
    } else {
      setFavourites((prevFavourites) => [...prevFavourites, book]);
    }
  };

  return (
    <div onClick={handleFavourite} className="favourite-button">
      <img
        src={
          favourites.some((fav) => fav.id === book.id)
            ? heartSolid
            : heartRegular
        }
        alt="favourite icon"
        id="favourite-icon"
      />
    </div>
  );
};

export const RemoveFromFavourites = ({ bookId, setFavourites, favourites }) => {
  const handleRemoveFavourite = () => {
    const updatedFavourites = favourites.filter((book) => book.id !== bookId);
    setFavourites(updatedFavourites);
    localStorage.setItem("favourites", JSON.stringify(updatedFavourites));
  };

  return (
    <button onClick={handleRemoveFavourite} className="remove-favourite-button">
      Remove
    </button>
  );
};
