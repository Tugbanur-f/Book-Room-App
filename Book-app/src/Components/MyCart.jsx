import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const MyCart = () => {
  const navigate = useNavigate();
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

  const calculateTotalPrice = () => {
    const total = cart.reduce((sum, book) => {
      const price = book.saleInfo?.retailPrice?.amount || 0;
      return sum + price;
    }, 0);

    return total.toFixed(2);
  };

  return (
    <div className="my-cart">
      <button onClick={() => navigate(-1)} className="go-back-btn">
        Go Back
      </button>
      <div className="total-price">
        <h4>Total: ${calculateTotalPrice()}</h4>
      </div>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className="cart-items">
          {cart.map((book) => {
            const price = book.saleInfo?.retailPrice?.amount
              ? `$${book.saleInfo.retailPrice.amount}`
              : `Not for sale.`;

            return (
              <div key={book.id} className="cart-item">
                <h3>{book.volumeInfo.title}</h3>
                <img
                  src={book.volumeInfo.imageLinks?.thumbnail}
                  alt={book.volumeInfo.title}
                  className="book-image"
                />
                <p>{book.volumeInfo.authors?.join(", ")}</p>
                <p>Price: {price}</p>
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
