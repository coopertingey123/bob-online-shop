import Modal from "react-modal";

Modal.setAppElement("#root");

export default function ItemModal({ modalOpen, details, setModalOpen }) {
  return (
    <Modal
      isOpen={modalOpen}
      onRequestClose={() => setModalOpen(false)}
      style={{
        overlay: {},
        content: {
          position: "relative",
          width: "70%",
          height: "90%",
          top: "3%",
          left: "15%",
          borderRadius: "10px",
          backgroundColor: "white",
          padding: "10px",
          overflow: "visible",
          border: "3px solid #ffa69e",
        },
      }}
    >
      <div className="single-item-wrapper">
        <div className="image">
          <img src={details.image} alt="item here" />
        </div>
        <div className="details-wrapper">
          <div className="detail">Name: {details.name}</div>
          <div className="detail">Price: ${details.cost}</div>
          <div className="detail">Manufacturer: {details.manufacturer}</div>
          {details.rating ? (
            <div className="detail">Rating: {details.rating}</div>
          ) : null}
          {details.description ? (
            <div className="detail">Description: {details.description}</div>
          ) : null}
          {details.size ? (
            <div className="detail">Size: {details.size}</div>
          ) : null}
          {details.other ? (
            <div className="detail">Other: {details.other}</div>
          ) : null}
        </div>
      </div>
    </Modal>
  );
}
