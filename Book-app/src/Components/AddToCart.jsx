import { useState } from "react";

const AddToCart = ({ book }) => {
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem("cart");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  const addToCart = () => {
    const updatedCart = [...cart, book];
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));

    const isBookInCart = cart.some((item) => item.id === book.id);
    if (isBookInCart) {
      alert("This book is already in the cart!");
      return;
    }
  };

  return <button onClick={addToCart}>Add to Cart</button>;
};

export default AddToCart;
