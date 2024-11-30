import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const MyCart = () => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(storedCart);
  }, []);

  const removeFromCart = (bookId) => {
    const updatedCart = cart.filter((book) => book.id !== bookId);
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  return (
    <div className="my-cart">
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className="cart-items">
          {cart.map((book, index) => (
            <div key={index} className="cart-item">
              <h3>{book.volumeInfo.title}</h3>
              <img
                src={book.volumeInfo.imageLinks?.thumbnail}
                alt={book.volumeInfo.title}
                className="book-image"
              />
              <p>{book.volumeInfo.authors?.join(", ")}</p>
              <button onClick={() => removeFromCart(book.id)}>Remove</button>
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

export default MyCart;
