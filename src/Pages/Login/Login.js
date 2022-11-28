import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Shared/AuthProvider';


const Login = () => {

    const { signIn, providerLogin, setLoading } = useContext(AuthContext);
    const googleProvider = new GoogleAuthProvider();
    const location = useLocation();
    const navigate = useNavigate();

    const from = location.state?.from?.pathname || '/';


    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        signIn(email, password)
            .then(result => {
                const user = (result.user);
                if (user?.email) {
                    navigate(from, { replace: true });
                }
            })

            .catch(error => console.log(error))
            .finally(() => {
                setLoading(false);
            })

    }
    const handleGoogleSignIn = () => {
        providerLogin(googleProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
                const role = 'Buyer';
                const email = user?.email;
                const name = user?.displayName;
                if (user?.email) {

                    saveUser(name, email, role)
                    navigate(from, { replace: true });
                }
                else {
                    console.error('Your email is not valid. Please enter a valid  email address.')
                }
            })
            .catch(error => console.error(error))
    }
    const saveUser = (name, email, role) => {
        const user = { name, email, role };
        fetch('http://localhost:5000/users', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
            })
    }

    return (
        <div>
            <div className="hero w-full my-20">


                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 py-20">
                    <h1 className="text-5xl text-center font-bold">Login</h1>
                    <form onSubmit={handleLogin} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" name='email' placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered" />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <input className="btn btn-primary" type="submit" value="Login" />
                        </div>
                    </form>
                    <p className='text-center'>Have No Account?Please <Link className='text-orange-600 font-bold' to="/signup">Sign Up</Link> </p>
                    <div className="divider">OR</div>
                    <button onClick={handleGoogleSignIn} className='btn btn-outline w-full text-center px-2'>CONTINUE WITH GOOGLE</button>
                </div>


            </div>


        </div>
    );
};

export default Login;