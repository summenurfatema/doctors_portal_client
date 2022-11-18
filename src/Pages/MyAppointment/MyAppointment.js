import React, { useContext, useState } from 'react';
import { AuthContext } from '../../context/UserContext';

const MyAppointment = () => {

    const { user } = useContext(AuthContext)
    const [bookings, setBookings] = useState([])


    fetch(`http://localhost:8080/bookings?email=${user?.email}`)
        .then(res => res.json())
        .then(data => setBookings(data))
    return (
        <div className="overflow-x-auto">
            <table className="table w-full">

                <thead>
                    <tr>
                        <th></th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Treatement</th>
                        <th>Date</th>
                    </tr>
                </thead>
                <tbody>

                    {
                        bookings.map((booking, i) =>
                            <tr>
                                <th>{i + 1}</th>
                                <td>{booking.patient}</td>
                                <td>{booking.email}</td>
                                <td>{booking.treatment}</td>
                                <td>{booking.appointmentDate}</td>
                            </tr>
                        )
                    }

                </tbody>
            </table>
        </div>
    );
};

export default MyAppointment;