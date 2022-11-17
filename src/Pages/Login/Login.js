import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className='flex flex-col justify-center items-center'>
            <div className="text-center">
                <h1 className="text-5xl font-bold my-10">Login now!</h1>

            </div>
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100  ">
                <div className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="text" placeholder="email" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="text" placeholder="password" className="input input-bordered" />
                        <label className="label">
                            <a href="k" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn bg-cyan-600 btn-primary">Login</button>
                    </div>
                    <p>New to Doctors Portal ? <Link to='/signup'>Sign Up</Link></p>
                </div>
                <div className="divider">OR</div>
                <div className='pb-7'>
                    <button className='btn outline-none bg-cyan-600 w-4/5 ml-10'>Sign in with Google</button>
                </div>
            </div>
        </div>

    );
};

export default Login;