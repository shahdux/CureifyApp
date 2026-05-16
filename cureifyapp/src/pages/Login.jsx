// import React, { useState } from 'react';
// import "./Login.css";
// import Button from '../components/Button';
// import icon from '../assets/logoicon.svg';
// import apple from '../assets/apple.svg';
// import google from '../assets/google.svg';
// import AppButton from '../components/AppButton';
// import TextButton from '../components/TextButton';
// import { Link, useNavigate } from 'react-router-dom';

// const validEmail = "shahdmohammad@gmail.com";
// const validPassword = "password123";

// const Login = () => {
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//     const [error, setError] = useState('');
//     const navigate = useNavigate();

//     const handleLogin = () => {
//         if (email === validEmail && password === validPassword) {
//             setError('');
//             navigate('/home');
//         } else {
//             setError('Invalid email or password');
//         }
//     };

//     return (
//         <>
//         <div className='loginbg'>
//             <div className='forloginpg'>
//                 <img src={icon} alt="logo icon" className='iconc'/>
//                 <p className='logintext'>Login to your account</p>
//                 <p className='logindes'>Log in with one of the following</p>
//             </div>

//             <div className='logincont'>
//                 <div className='for2buttons'>
//                     <AppButton image={apple} imgalt="apple icon" apptext="Login with Apple" />
//                     <AppButton image={google} imgalt="google icon" apptext="Login with Google" />
//                 </div>

//                 <div className='forinputswtexts'>
//                     <div className='for2inputs'>
//                         <div className='titlewinput'>
//                             <p className='inputtile'>Email</p>
//                             <input
//                                 type="email"
//                                 className='inputc'
//                                 value={email}
//                                 onChange={(e) => setEmail(e.target.value)}
//                             />
//                         </div>
//                         <div className='titlewinput'>
//                             <p className='inputtile'>Password</p>
//                             <input
//                                 type="password"
//                                 className='inputc'
//                                 value={password}
//                                 onChange={(e) => setPassword(e.target.value)}
//                             />
//                         </div>
//                     </div>

//                     {error && <p className='errormsg'>{error}</p>}

//                     <div className='textbuttons2'>
//                         <div className='forcheckbox'>
//                             <div className='chachbox'></div>
//                             <p className='checktext'>Remember me</p>
//                         </div>
//                         <TextButton text="Forget Password?" color="#00A4AA"/>
//                     </div>

//                     <div onClick={handleLogin}>
//                         <Button text="Login" width="335px"/>
//                     </div>
//                 </div>

//                 <Link to="/signup" style={{ textDecoration: 'none' }}>
//                     <p className='logindes greytext'>Don't have an account? <span className='greentext'>Sign Up</span></p>
//                 </Link>
//             </div>
//         </div>
//         </>
//     );
// }

// export default Login;


import React, { useState } from 'react';
import "./Login.css";
import Button from '../components/Button';
import icon from '../assets/logoicon.svg';
import apple from '../assets/apple.svg';
import google from '../assets/google.svg';
import AppButton from '../components/AppButton';
import TextButton from '../components/TextButton';
import { Link, useNavigate } from 'react-router-dom';
// 1. Import your Supabase client
import { supabase } from '../supabase'; 

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false); // Track loading state
    const [error, setError] = useState('');
    const navigate = useNavigate();

    // 2. Make this function async to handle the database call
    const handleLogin = async () => {
        setError('');
        
        if (!email || !password) {
            setError('Please enter both email and password.');
            return;
        }

        setLoading(true);

        // 3. Talk to Supabase Auth to verify the credentials
        const { error: signInError } = await supabase.auth.signInWithPassword({
            email: email,
            password: password,
        });

        setLoading(false);

        if (signInError) {
            // This will catch wrong passwords, unconfirmed emails, or non-existent users
            setError(signInError.message); 
            return;
        }

        // 4. If successful, redirect to home!
        navigate('/home');
    };

    return (
        <>
        <div className='loginbg'>
            <div className='forloginpg'>
                <img src={icon} alt="logo icon" className='iconc'/>
                <p className='logintext'>Login to your account</p>
                <p className='logindes'>Log in with one of the following</p>
            </div>

            <div className='logincont'>
                <div className='for2buttons'>
                    <AppButton image={apple} imgalt="apple icon" apptext="Login with Apple" />
                    <AppButton image={google} imgalt="google icon" apptext="Login with Google" />
                </div>

                <div className='forinputswtexts'>
                    <div className='for2inputs'>
                        <div className='titlewinput'>
                            <p className='inputtile'>Email</p>
                            <input
                                type="email"
                                className='inputc'
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div className='titlewinput'>
                            <p className='inputtile'>Password</p>
                            <input
                                type="password"
                                className='inputc'
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                    </div>

                    {error && <p className='errormsg'>{error}</p>}

                    <div className='textbuttons2'>
                        <div className='forcheckbox'>
                            <div className='chachbox'></div>
                            <p className='checktext'>Remember me</p>
                        </div>
                        <TextButton text="Forget Password?" color="#00A4AA"/>
                    </div>

                    {/* Disable button and change opacity while loading */}
                    <div 
                        onClick={handleLogin} 
                        style={{ opacity: loading ? 0.6 : 1, pointerEvents: loading ? 'none' : 'auto' }}
                    >
                        <Button text={loading ? "Logging in..." : "Login"} width="335px"/>
                    </div>
                </div>

                <Link to="/signup" style={{ textDecoration: 'none' }}>
                    <p className='logindes greytext'>Don't have an account? <span className='greentext'>Sign Up</span></p>
                </Link>
            </div>
        </div>
        </>
    );
}

export default Login;