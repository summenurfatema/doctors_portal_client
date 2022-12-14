import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../context/UserContext';
import MyAppointmentCard from './MyAppointmentCard';

const MyAppointment = () => {

    const { user } = useContext(AuthContext)
    const [bookings, setBookings] = useState([])
    console.log(user?.email, bookings)

    useEffect(() => {
        fetch(`http://localhost:8080/bookings?email=${user?.email}`, {
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => setBookings(data))

    }, [user?.email])

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
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>

                    {bookings &&

                        bookings.map((booking, i) => <MyAppointmentCard
                            booking={booking}
                            i={i}></MyAppointmentCard>)
                    }

                </tbody>
            </table>
        </div>
    );
};

export default MyAppointment;