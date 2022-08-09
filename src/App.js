import { Link } from "react-router-dom";

export default function App() {
  return (
    <div className="home-wrapper">
      <div className="header">
        <h1>Welcome to Bob's Online Shop</h1>
      </div>
      <div className="body">
        <div className="description">
          Bob's online shop is the only online shop you'll ever need. We sell{" "}
          all sorts of items, from sports equipment to flowers and candies.
          <br />
          <br />
          Enjoy browsing Bob's Online Shop!
        </div>

        <Link className="link" to="/items">
          Click here to view items for sale
        </Link>
      </div>
    </div>
  );
}
