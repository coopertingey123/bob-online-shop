import { useState } from "react";

import ItemModal from "./itemModal";

export default function SingleItem({ details }) {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className="item-wrapper" onClick={() => setModalOpen((o) => !o)}>
      <div className="image">
        <img src={details.image} alt="item here" />
      </div>
      <div className="details-wrapper">
        <div className="details">
          <div className="detail">Name: {details.name}</div>
          <div className="detail">Price: ${details.cost}</div>
          <div className="detail">Manufacturer: {details.manufacturer}</div>
        </div>
        <div className="add-to-cart">
          <button> + Add to shopping cart</button>
        </div>
      </div>

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
