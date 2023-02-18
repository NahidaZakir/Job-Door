import React, { useContext } from 'react';

import { Link } from 'react-router-dom';
import { AuthContext } from '../Contexts/AuthProvider';

const SignIn = () => {
    const { loginUser, googleLogin, loading } = useContext(AuthContext);

    if (loading) {
        <button className="btn loading">loading</button>
    }
    const handleLogin = event => {
        event.preventDefault();

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        loginUser(email, password)
            .then(result => {
                const user = result.user;

                console.log(user);
            })
            .catch(error => console.error(error))
    }
    const handleGoogleLogIn = () => {
        googleLogin()
            .then((result) => {
                alert('Successfully Log in');
            })
            .catch((error) => {
                console.log(error);
            })
    }

    return (
        <div className="hero w-full mt-10 mb-10">
            <div className="card w-4/5 md:w-2/5 shadow-2xl bg-orange-400 py-10">
                <h1 className="text-5xl text-center font-bold">Sign In To Job Door</h1>
                <form onSubmit={handleLogin} className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input name="email" type="text" placeholder="email" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input name="password" type="password" placeholder="password" className="input input-bordered" />
                    </div>
                    <div className="form-control mt-6">
                        <input className="btn btn-base-200" type="submit" value="Login" />
                    </div>
                </form>
                <p className='text-center'>or</p>
                <div className="flex justify-center mr-8 ml-8 mt-2 mb-4">
                    <button onClick={handleGoogleLogIn} className="btn btn-base-200 w-full ">Log in with Google</button>
                </div>
                <p className='text-center'>New to Job Door? <Link className='font-bold' to="/signup">  Sign Up</Link></p>
            </div>

        </div >
    );
};

export default SignIn;