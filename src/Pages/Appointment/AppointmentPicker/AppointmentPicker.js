import { format } from 'date-fns';
import React, { useState } from 'react';
import AppointmentInfo from '../AppointmentInfo/AppointmentInfo';
import BookingModal from '../BookingModal/BookingModal';

const AppointmentPicker = ({ selectDate }) => {
    const [appointments, setAppointments] = useState([])
    const [treatment, setTreatment] = useState({})
    fetch('appointmentOption.json')
        .then(res => res.json())
        .then(data => setAppointments(data))
    return (
        <div className='my-10'>
            <p className='text-center font-bold text-cyan-600'>Appointment Available on {format(selectDate, 'PP')} </p>
            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-7'>
                {
                    appointments.map(appointment => <AppointmentInfo
                        key={appointment._id}
                        appointment={appointment}
                        setTreatment={setTreatment}></AppointmentInfo>)
                }
            </div>
            <BookingModal
                treatment={treatment}></BookingModal>
        </div>
    );
};

export default AppointmentPicker;