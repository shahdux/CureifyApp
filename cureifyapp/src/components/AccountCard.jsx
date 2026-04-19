import "./AccountCard.css";
import arrow from '../assets/arrow.svg';
import { Link } from 'react-router-dom';

const AccountCard = (props) => {
    return (
        <Link to={props.to} style={{ textDecoration: 'none' }}>
            <div className="accountcard">
                <div className="accountcardleft">
                    <img src={props.image} alt={props.title} className="accountcardicon" />
                    <p className="accountcardtitle">{props.title}</p>
                </div>
                <img src={arrow} alt="arrow" className="accountcardarrow" />
            </div>
        </Link>
    );
}

export default AccountCard;