import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="navbar-wrapper">
      <div className="title">
        <div>Bob's Online Shop</div>
      </div>
      <div className="links">
        <Link className="link" to="/">
          Home
        </Link>
        <Link className="link" to="/items">
          All Items
        </Link>
        <Link className="link" to="/shopping-cart">
          Shopping Cart
        </Link>
      </div>
    </div>
  );
}
