import React, { useState } from 'react';
import "./Login.css";
import Button from '../components/Button';
import icon from '../assets/logoicon.svg';
import apple from '../assets/apple.svg';
import google from '../assets/google.svg';
import AppButton from '../components/AppButton';
import { Link, useNavigate } from 'react-router-dom';
import { supabase } from '../supabase';

const SignUp = () => {
    const navigate = useNavigate();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState(false);

    const handleSignUp = async () => {
        setError('');

        if (!name || !email || !password) {
            setError('Please fill in all fields.');
            return;
        }
        if (password.length < 6) {
            setError('Password must be at least 6 characters.');
            return;
        }

        setLoading(true);

        const { error: signUpError } = await supabase.auth.signUp({
            email,
            password,
            options: {
                data: { full_name: name },
            },
        });

        setLoading(false);

        if (signUpError) {
            setError(signUpError.message);
            return;
        }

        setSuccess(true);
        setTimeout(() => navigate('/login'), 2000);
    };

    return (
        <>
            <div className='loginbg'>
                <div className='forloginpg'>
                    <img src={icon} alt="logo icon" className='iconc' />
                    <p className='logintext'>Sign Up</p>
                    <p className='logindes'>Sign Up with one of the following</p>
                </div>

                <div className='logincont longerw'>
                    <div className='for2buttons'>
                        <AppButton image={apple} imgalt="apple icon" apptext="Login with Apple" />
                        <AppButton image={google} imgalt="google icon" apptext="Login with Google" />
                    </div>

                    <div className='forinputswtexts'>
                        <div className='for2inputs'>
                            <div className='titlewinput'>
                                <p className='inputtile'>Name</p>
                                <input
                                    type="text"
                                    className='inputc'
                                    value={name}
                                    onChange={e => setName(e.target.value)}
                                />
                            </div>
                            <div className='titlewinput'>
                                <p className='inputtile'>Email</p>
                                <input
                                    type="email"
                                    className='inputc'
                                    value={email}
                                    onChange={e => setEmail(e.target.value)}
                                />
                            </div>
                            <div className='titlewinput'>
                                <p className='inputtile'>Password</p>
                                <input
                                    type="password"
                                    className='inputc'
                                    value={password}
                                    onChange={e => setPassword(e.target.value)}
                                />
                            </div>
                        </div>

                        {error && (
                            <p style={{ color: 'red', fontSize: '13px', marginTop: '8px', fontFamily: 'poppins' }}>
                                {error}
                            </p>
                        )}

                        {success && (
                            <p style={{ color: 'green', fontSize: '13px', marginTop: '8px', textAlign: 'center', fontFamily: 'poppins' }}>
                                Account created! Redirecting to login...
                            </p>
                        )}

                        <div className='mrtop'></div>

                        <div onClick={handleSignUp} style={{ opacity: loading ? 0.6 : 1, pointerEvents: loading ? 'none' : 'auto' }}>
                            <Button text={loading ? "Signing Up..." : "Sign Up"} width="335px" />
                        </div>
                    </div>

                    <Link to="/login" style={{ textDecoration: 'none' }}>
                        <p className='logindes greytext'>
                            Already have an account? <span className='greentext'>Log in</span>
                        </p>
                    </Link>
                </div>
            </div>
        </>
    );
}

export default SignUp;