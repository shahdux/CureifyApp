import "./CartCard.css";
import trash from '../assets/trash.svg';

const CartCard = (props) => {
  return (
    <div className="cartcard">
      <img src={props.image} alt={props.name} className="cartcardImage" />

      <div className="cartcardBody">
        <div className="cartcardTop">
          <p className="cartcardName">{props.name}</p>
          <img 
            src={trash} 
            alt="delete" 
            className="trashIcon1" 
            onClick={props.onDelete} 
            style={{ cursor: 'pointer' }}
          />
        </div>

        <p className="cartcardPharmacy">{props.pharmacy}</p>

        <div className="cartcardBottom">
          <div className="cartcardCounter">
            <button className="cartcardBtn" onClick={props.onDecrease}>−</button>
            <span className="cartcardCount">{props.quantity}</span>
            <button className="cartcardBtn" onClick={props.onIncrease}>+</button>
          </div>
          <p className="cartcardPrice">{props.price * props.quantity} EGP</p>
        </div>
      </div>
    </div>
  );
};

export default CartCard;