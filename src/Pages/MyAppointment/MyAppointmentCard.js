import React from 'react';
import { Link } from 'react-router-dom';

const MyAppointmentCard = ({ booking, i }) => {
    const { _id, patient, email, treatment, price, appointmentDate } = booking
    return (
        <tr>
            <th>{i + 1}</th>
            <td>{patient}</td>
            <td>{email}</td>
            <td>{treatment}</td>
            <td>{appointmentDate}</td>
            <td>
                {price ?
                    <Link to={`/dashboard/payment/${_id}`}>
                        <button className='btn btn-outline'>Pay</button>
                    </Link>
                    :
                    <button className='btn btn-outline'>Paid</button>

                }
            </td>
        </tr>
    );
};

export default MyAppointmentCard;