import "./PharmacyCard.css";
import clock from '../assets/clock.svg';

const PharmacyCard = (props) => {
    return (
        <div className="pharmacycard">
            <div className="pharmacycardtop">
                <p className="pharmacyname">{props.name}</p>
                <p className="pharmacyprice">{props.price} EGP</p>
            </div>

            <div className="pharmacycardmid">
                <div className="pharmacystars">
                    <span className="star">★</span>
                    <span className="star">★</span>
                    <span className="star">★</span>
                    <span className="star">★</span>
                    <span className="starempty">★</span>
                    <span className="pharmacyratingnum">{props.rating}</span>
                </div>
                <div className="pharmacyarrival">
                    <img src={clock} alt="clock" className="clockicon" />
                    <p className="pharmacyarrivaltext">Arrives in {props.arrival}</p>
                </div>
            </div>

            <div className="pharmacycardbottom">
                <button className="pharmacydirectionsbtn">Get Directions</button>
                <button className="pharmacyaddcardbtn">Add to cart</button>
            </div>
        </div>
    );
}

export default PharmacyCard;