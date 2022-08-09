import { useState } from "react";

import ItemModal from "./itemModal";

export default function SingleItem({ details, addToCart, shoppingCart }) {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className="item-wrapper">
      <div className="image" onClick={() => setModalOpen((o) => !o)}>
        <img src={details.image} alt="item here" />
      </div>
      <div className="details-wrapper">
        <div className="details">
          <div className="detail">Name: {details.name}</div>
          <div className="detail">Price: ${details.cost}</div>
          <div className="detail">Manufacturer: {details.manufacturer}</div>
        </div>
      </div>
      {shoppingCart ? null : (
        <div className="add-to-cart">
          <button onClick={() => addToCart(details)}>
            {" "}
            + Add to shopping cart
          </button>
        </div>
      )}
      {modalOpen ? (
        <ItemModal
          details={details}
          modalOpen={modalOpen}
          setModalOpen={setModalOpen}
        />
      ) : null}
    </div>
  );
}
