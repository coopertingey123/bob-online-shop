export default function SingleItem({ details }) {
  return (
    <div className="item-wrapper">
      <div className="image">
        <img src={details.image} alt="item here" />
      </div>
      <div className="details-wrapper">
        <div className="details">
          <div className="name">Name: {details.name}</div>
          <div className="cost">Price: ${details.cost}</div>
          <div className="manufacturer">
            Manufacturer: {details.manufacturer}
          </div>
        </div>
        <div className="add-to-cart">
          <button> + Add to shopping cart</button>
        </div>
      </div>
    </div>
  );
}
