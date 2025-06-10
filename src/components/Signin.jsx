import React, { useContext, useRef, useState } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { Link, useLocation, useNavigate } from 'react-router';
import { AuthContext } from '../auth/AuthContext';

const Signin = () => {
    const [error, setError] = useState("");
    const { signInUser, googleSignIn, forgetPassword } = useContext(AuthContext);
    const emailRef = useRef();
    const location = useLocation();
    const navigate = useNavigate();
    console.log(error);

    const handleLogin = (e) => {
        e.preventDefault();

        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        signInUser(email, password)
            .then((result) => {
                const singInInfo = {
                    email,
                    lastSignInTime: result.user?.metadata?.lastSignInTime
                }
                 // update last sign in to the database
                fetch('https://coffee-store-server-rosy-five.vercel.app/users', {
                    method: 'PATCH', 
                    headers: {
                        'content-type': 'application/json'
                    }, 
                    body: JSON.stringify(singInInfo)
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log('after update patch', data)
                        // toast.success("Login successful!");
                        navigate(`${location.state ? location.state : "/"}`);
                    })
            })
            .catch((error) => {
                const errorMessage = error.message;
        //         toast.error(errorMessage);
                setError(errorMessage);
            });
    };

    const handleGoogleLogin = () => {
    //     googleSignIn()
    //         .then((result) => {
    //             console.log(result);
    //             navigate(`${location.state ? location.state : "/"}`);
    //         }).catch(error => {
    //             console.log(error);

    //         })
    }

    const handleForgetPassword = () => {
        const email = emailRef.current.value;

        setError('')
        // // Password reset email sent!
        forgetPassword(email)
            .then(() => {
                // toast.warn("A password reset email is sent. Please check your email.")
            })
            .catch(error => {
                setError(error.message)
            })
    }

    return (
        <div className="flex justify-center mt-32">
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl py-5">
                <h2 className="font-semibold text-2xl text-center">Login to your account</h2>
                <form onSubmit={handleLogin} className="card-body">
                    <fieldset className="fieldset">
                        {/* Email */}
                        <label className="label">Email</label>
                        <input
                            // ref={emailRef}
                            name="email"
                            type="email"
                            className="input"
                            placeholder="Enter your email"
                            required
                        />

                        {/* Password */}
                        <label className="label">Password</label>
                        <input
                            name="password"
                            type="password"
                            className="input"
                            placeholder="Enter your password"
                            required
                        />

                        <div onClick={handleForgetPassword}>
                            <a className="link link-hover">Forgot password?</a>
                        </div>

                        {error && <p className="text-red-400 text-xs mt-2">{error}</p>}

                        <button type="submit" className="btn btn-neutral mt-4">
                            Login
                        </button>

                        <p className="text-sm mt-4 text-center">
                            Don't have an account?{" "}
                            <Link to="/register" className="text-blue-600 underline">
                                Register here
                            </Link>
                        </p>
                    </fieldset>
                </form>
                <p className='mx-auto'>or</p>
                {/* Google */}
                <button onClick={handleGoogleLogin} className="btn btn-info btn-outline hover:text-white w-full">
                    <FcGoogle size={24} /> Login with Google
                </button>
            </div>
        </div>
    );
};

export default Signin;