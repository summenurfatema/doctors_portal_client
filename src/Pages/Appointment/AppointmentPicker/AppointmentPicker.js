import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import AppointmentInfo from '../AppointmentInfo/AppointmentInfo';
import BookingModal from '../BookingModal/BookingModal';

const AppointmentPicker = ({ selectDate }) => {
    const [appointments, setAppointments] = useState([])
    const [treatment, setTreatment] = useState({})

    const date = format(selectDate, 'PP')
    useEffect(() => {

        fetch(`http://localhost:8080/appointmentoption?date=${date}`)
            .then(res => res.json())
            .then(data => setAppointments(data))

    }, [date])



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
                treatment={treatment}
                selectDate={selectDate}
            ></BookingModal>
        </div>
    );
};

export default AppointmentPicker;