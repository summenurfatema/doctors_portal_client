import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/UserContext';

const Login = () => {
    const { signIn } = useContext(AuthContext)
    const handleLogin = event => {
        event.preventDefault()
        const form = event.target
        const email = form.email.value
        const password = form.password.value
        console.log(email, password)

        signIn(email, password)
            .then(result => {
                const user = result.user
            })
            .catch(error => console.error(error))
    }
    return (
        <div className='flex flex-col justify-center items-center'>
            <div className="text-center">
                <h1 className="text-5xl font-bold my-10">Login now!</h1>

            </div>
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100  ">
                <form onSubmit={handleLogin} className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input name='email' type="text" placeholder="email" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input name='password' type="text" placeholder="password" className="input input-bordered" />
                        <label className="label">
                            <a href="k" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn bg-cyan-600 btn-primary">Login</button>
                    </div>
                    <p>New to Doctors Portal ? <Link to='/signup'>Sign Up</Link></p>
                </form>
                <div className="divider">OR</div>
                <div className='pb-7'>
                    <button className='btn outline-none bg-cyan-600 w-4/5 ml-10'>Sign in with Google</button>
                </div>
            </div>
        </div>

    );
};

export default Login;