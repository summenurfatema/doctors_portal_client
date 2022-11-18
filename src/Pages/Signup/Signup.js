import { data } from 'autoprefixer';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/UserContext';

const Signup = () => {
    const { createUser, updateUser } = useContext(AuthContext)
    const handleSignUp = event => {

        event.preventDefault()
        const form = event.target
        const name = form.name.value
        const email = form.email.value

        const password = form.password.value
        const confirm = form.confirm.value
        console.log(name, email, password)
        createUser(email, password)
            .then(result => {
                const user = result.user
                const userInfo = {
                    displayName: data.name
                }
                updateUser(userInfo)
                    .then(() => {
                        console.log(user.name, user.email)
                        console.log(data.name, data.email)
                        saveUser(data.name, data.email)
                    })
                    .catch(error => console.error(error))
            })
            .catch(error => console.error(error))
    }

    const saveUser = (name, email) => {
        const user = { name, email }
        fetch('http://localhost:8080/users', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(() => { })
    }
    return (
        <div className='flex flex-col justify-center items-center'>
            <div className="text-center">
                <h1 className="text-5xl font-bold my-10">Sign up here !</h1>

            </div>
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100  ">
                <form onSubmit={handleSignUp} className="card-body">


                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input name='name' type="text" placeholder="Name" className="input input-bordered" />
                    </div>

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
                        <input name='password' type="text" placeholder="Password" className="input input-bordered" />
                    </div>


                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Confirm Password</span>
                        </label>
                        <input name='confirm' type="text" placeholder="password" className="input input-bordered" />
                        <label className="label">
                            <a href="k" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn bg-cyan-600 btn-primary">Sign Up</button>
                    </div>
                    <p>Already have an account ? <Link to='/login'>Log in here</Link></p>
                </form>

            </div>
        </div>

    );
};

export default Signup;