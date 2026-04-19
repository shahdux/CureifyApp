import React, { useEffect, useState } from 'react';
import "./Cart.css"
import Navbar from '../components/Navbar';
import back from '../assets/back.svg';
import SectionTitle from '../components/SectionTitle';
import Button from '../components/Button';
import { Link } from 'react-router-dom';
import flector from '../assets/flector.svg';
import trash from '../assets/trash.svg';

const ExtractedPrescription = () => {
    const [count2, setCount2] = useState(1);
    const [name, setName] = useState('Flector 50mg');
    const [desc, setDesc] = useState('nonsteroidal anti-inflammatory drug');
    const [editingName, setEditingName] = useState(false);
    const [editingDesc, setEditingDesc] = useState(false);

    return (
        <>
            <Navbar />
            <div className='maindiv opadding gap26 pr height800px'>
                <div className='arrowwtitle gap0'>
                    <Link to="/search" style={{ textDecoration: 'none' }}>
                        <img src={back} alt="back icon" />
                    </Link>
                    <SectionTitle title="Extracted Medications(1)" margin="0 auto" align="center"/>
                </div>

                <div className='forbloodtests'>
                    <div className="cartcard cg2">
                        <img src={flector} alt="" />

                        <div className="cartcardBody">
                            <div className="cartcardTop">
                                {editingName ? (
                                    <input
                                        className='editableinput'
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                        onBlur={() => setEditingName(false)}
                                        autoFocus
                                    />
                                ) : (
                                    <p className="cartcardName" onClick={() => setEditingName(true)}>{name}</p>
                                )}
                                <img src={trash} alt="delete" className="trashIcon1" />
                            </div>

                            {editingDesc ? (
                                <input
                                    className='editableinput editableinputdes'
                                    value={desc}
                                    onChange={(e) => setDesc(e.target.value)}
                                    onBlur={() => setEditingDesc(false)}
                                    autoFocus
                                />
                            ) : (
                                <p className="cartcardPharmacy" onClick={() => setEditingDesc(true)}>{desc}</p>
                            )}

                            <div className="cartcardBottom">
                                <div className="cartcardCounter">
                                    <button className="cartcardBtn" onClick={() => setCount2(c => Math.max(1, c - 1))}>−</button>
                                    <span className="cartcardCount">{count2}</span>
                                    <button className="cartcardBtn" onClick={() => setCount2(c => c + 1)}>+</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <Link to="/alternative" style={{ textDecoration: 'none' }}>
                    <Button text="Select Pharmacy" />
                </Link>
            </div>
        </>
    );
}

export default ExtractedPrescription;