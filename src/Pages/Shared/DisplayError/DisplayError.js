import React, { useContext } from 'react';
import { useRouteError } from 'react-router-dom';
import { AuthContext } from '../../../context/UserContext';

const DisplayError = () => {
    const { logOut } = useContext(AuthContext)
    const error = useRouteError()
    return (
        <div>
            <p className='text-red-500 mb-3'>Something  went wrong !!!</p>
            <p className='text-red-500 mb-3'>{error.statusText || error.message}</p>
            <p>Please<button onClick={logOut}> Sign out</button> and try to Log in again</p>

        </div>
    );
};

export default DisplayError;