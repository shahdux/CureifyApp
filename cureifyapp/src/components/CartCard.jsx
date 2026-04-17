import { useState } from "react";
import "./CartCard.css";
import trash from '../assets/trash.svg';

const CartCard = (props) => {
  const [count2, setCount2] = useState(1);

  return (
    <div className="cartcard">
      <img src={props.image} alt={props.name} className="cartcardImage" />

      <div className="cartcardBody">
        <div className="cartcardTop">
          <p className="cartcardName">{props.name}</p>
            <img src={trash} alt="delete" className="trashIcon1" />
        </div>

        <p className="cartcardPharmacy">{props.pharmacy}</p>

        <div className="cartcardBottom">
          <div className="cartcardCounter">
            <button className="cartcardBtn" onClick={() => setCount2(c => Math.max(1, c - 1))}>−</button>
            <span className="cartcardCount">{count2}</span>
            <button className="cartcardBtn" onClick={() => setCount2(c => c + 1)}>+</button>
          </div>
          <p className="cartcardPrice">{props.price} EGP</p>
        </div>
      </div>
    </div>
  );
};

export default CartCard;