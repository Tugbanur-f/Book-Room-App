import { useNavigate } from "react-router-dom";
import { RemoveFromFavourites } from "../../Components/FavouriteButtons";
import { getBookDetails } from "../../Helpers/Helpers";
import useLocalStorage from "../../Hooks/useLocalStorage";

const MyFavourites = () => {
  const navigate = useNavigate();
  const [favourites, setFavourites] = useLocalStorage("favourites", []);

  return (
    <div className="my-favourites">
      <button onClick={() => navigate(-1)} className="go-back-btn">
        Go Back
      </button>

      {favourites.length === 0 ? (
        <h5>Your favourite list is empty.</h5>
      ) : (
        <div className="favourites-items">
          {favourites.map((book) => {
            const { title, price, authors, image } = getBookDetails(book);

            return (
              <div key={book.id} className="favourites-item">
                <h3>{title}</h3>
                <img src={image} alt={title} />
                <p>{authors}</p>
                <p>Price: {price}</p>
                <RemoveFromFavourites
                  bookId={book.id}
                  setFavourites={setFavourites}
                  favourites={favourites}
                />
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default MyFavourites;
