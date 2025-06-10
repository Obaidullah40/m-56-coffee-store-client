import React, { useContext, useState } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { Link } from 'react-router';
import { AuthContext } from '../auth/AuthContext';
import Swal from 'sweetalert2';

const SignUp = () => {
    const { createUser, googleSignIn } = useContext(AuthContext);
    const [nameError, setNameError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    //   const location = useLocation();
    //   const navigate = useNavigate();


    const handleRegister = (e) => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);

        const { email, password, ...restFormData } = Object.fromEntries(formData.entries());


        
        
        // // Password Validation
        // const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
        
        // if (!passwordRegex.test(password)) {
            //   setPasswordError(
                //     "Password must be at least 6 characters long, and include both uppercase and lowercase letters."
                //   );
                //   return;
                // } else {
                    //   setPasswordError("");
                    // }
                    
                    // Create User
                    createUser(email, password)
                    .then((result) => {
                        
                        const userProfile = {
                            email, 
                            ...restFormData,
                            creationTime: result.user?.metadata?.creationTime,
                            lastSignInTime: result.user?.metadata?.lastSignInTime
                        }
                        console.log(password, email, userProfile);

                // send coffee data to the db
                fetch('https://coffee-store-server-rosy-five.vercel.app/users', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(userProfile)
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.insertedId) {

                            Swal.fire({
                                title: "Your Account is created successfully!",
                                icon: "success",
                                showConfirmButton: false,
                                timer: 1500

                            });

                            //   form.reset()
                        }
                    })
                //     const user = result.user;
            })
            .catch((error) => {
                // toast.error(`${error.message} (${error.code})`);
            });
    };

    const handleGoogleLogin = () => {
        // googleSignIn()
        //   .then((result) => {
        //     console.log(result);
        //     navigate(`${location.state ? location.state : "/"}`);
        //   }).catch(error => {
        //     console.log(error);

        //   })
    }


    return (
        <div className="flex justify-center my-16">
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl py-5">
                <h2 className="font-semibold text-2xl text-center">
                    Register your account
                </h2>
                <form onSubmit={handleRegister} className="card-body">
                    <fieldset className="fieldset">
                        <label className="label mt-3">Name</label>
                        <input name="name" type="text" className="input" placeholder='Name' required />
                        <label className="label mt-3">Address</label>
                        <input name="address" type="text" className="input" placeholder='Address' required />
                        <label className="label mt-3">Phone</label>
                        <input name="phone" type="phone" className="input" placeholder='Phone' required />
                        {nameError && <p className="text-xs text-error">{nameError}</p>}

                        <label className="label mt-3">Photo URL</label>
                        <input name="photo" type="text" className="input" placeholder='Photo URL' required />

                        <label className="label mt-3">Email</label>
                        <input name="email" type="email" className="input" placeholder='Email' required />

                        <label className="label mt-3">Password</label>
                        <input name="password" type="password" className="input" placeholder='Password' required />
                        {passwordError && (
                            <p className="text-xs text-error mt-1">{passwordError}</p>
                        )}

                        <button type="submit" className="btn btn-neutral mt-10">
                            Sign up
                        </button>
                    </fieldset>

                    <p className="text-sm mt-4 text-center">
                        Already have an account?{" "}
                        <Link to="/login" className="text-blue-600 underline">
                            Login here
                        </Link>
                    </p>
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

export default SignUp;