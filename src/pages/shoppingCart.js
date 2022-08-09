import { useState, useEffect } from "react";

import SingleItem from "../components/item";

export default function ShoppingCart() {
  const [currentCart, setCurrentCart] = useState([]);

  const renderCartItems = () => {
    if (currentCart.length) {
      return currentCart.map((item, idx) => {
        return <SingleItem key={idx} details={item} shoppingCart={true} />;
      });
    } else {
      return <div>You have no items in your cart</div>;
    }
  };

  useEffect(() => {
    let prevLocalCart = localStorage.getItem("shopping-cart");
    let localCart = JSON.parse(prevLocalCart);

    if (typeof localCart === "string") {
      setCurrentCart(JSON.parse(localCart));
    } else {
      setCurrentCart(localCart);
    }
  }, []);

  return <div className="items-wrapper">{renderCartItems()}</div>;
}
