import { useEffect, useState } from "react";
import SingleItem from "../components/item";

export default function AllItems() {
  const [items, setItems] = useState([]);
  const [search, setSearch] = useState("");
  const [currentCart, setCurrentCart] = useState({});

  const getAllItems = async () => {
    await fetch(`http://127.0.0.1:5000/get/items`, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        setItems(data);
      })
      .catch((err) => {
        console.error("Get items error: ", err);
      });
  };

  const handleSearch = async () => {
    await fetch(`http://127.0.0.1:5000/items/search`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        search: search,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        setItems(data);
      })
      .catch((err) => {
        console.error("Get items error: ", err);
      });
  };

  useEffect(() => {
    getAllItems();
  }, []);

  const renderItems = () => {
    return items.map((item) => {
      return (
        <SingleItem key={item.item_id} details={item} addToCart={addToCart} />
      );
    });
  };

  const addToCart = (item) => {
    let addedItemsCart = [];
    addedItemsCart.push(item);

    if (currentCart.length) {
      for (let item of currentCart) {
        addedItemsCart.push(item);
      }
    }
    setCurrentCart(addedItemsCart);
  };

  useEffect(() => {
    localStorage.setItem("shopping-cart", JSON.stringify(currentCart));
  }, [currentCart]);

  return (
    <div className="all-items-wrapper">
      <div className="header">
        <h1>All items for sale are listed here</h1>
        <div className="search">
          Search Specific Items:{" "}
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />{" "}
          <button onClick={handleSearch}>Search</button>
        </div>
      </div>
      <div className="items-wrapper">{renderItems()}</div>
    </div>
  );
}
