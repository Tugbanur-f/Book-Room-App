const AddToCart = ({ book }) => {
  const addToCart = () => {
    const savedCart = localStorage.getItem("cart");
    const cart = savedCart ? JSON.parse(savedCart) : [];

    const isBookInCart = cart.some((item) => item.id === book.id);
    if (isBookInCart) {
      alert("This book is already in the cart!");
      return;
    }

    const updatedCart = [...cart, book];
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  return <button onClick={addToCart}>Add to Cart</button>;
};

export default AddToCart;
