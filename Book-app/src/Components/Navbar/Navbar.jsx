import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/favourites">My Favourites</Link>
        </li>
        <li>
          <Link to="/my-cart">Shopping Cart</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
