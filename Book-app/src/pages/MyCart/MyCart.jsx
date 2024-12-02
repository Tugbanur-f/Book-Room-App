import { useNavigate } from "react-router-dom";
import { calculateTotalPrice, getBookDetails } from "../../Helpers/Helpers";
import useLocalStorage from "../../Hooks/useLocalStorage";

const MyCart = () => {
  const navigate = useNavigate();
  const [cart, setCart] = useLocalStorage("cart", []);

  const removeFromCart = (bookId) => {
    const updatedCart = cart.filter((book) => book.id !== bookId);
    setCart(updatedCart);

    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  return (
    <div className="my-cart">
      <button onClick={() => navigate(-1)} className="go-back-btn">
        Go Back
      </button>
      <div className="total-price">
        <h4>Total: ${calculateTotalPrice(cart)}</h4>
      </div>
      {cart.length === 0 ? (
        <h5>Your cart is empty.</h5>
      ) : (
        <div className="cart-items">
          {cart.map((book) => {
            const { title, price, authors, image } = getBookDetails(book);

            return (
              <div key={book.id} className="cart-item">
                <h3>{book.volumeInfo.title}</h3>
                <img src={image} alt={title} className="book-image" />
                <p>{authors}</p>
                <p>Price: ${price}</p>
                <button onClick={() => removeFromCart(book.id)}>Remove</button>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default MyCart;
