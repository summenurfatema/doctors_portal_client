import React, { useState } from 'react';
import AppointmentBanner from '../AppointmentBanner/AppointmentBanner';
import AppointmentPicker from '../AppointmentPicker/AppointmentPicker';


const Appointment = () => {
    const [selectDate, setSelectDate] = useState(new Date())
    return (
        <div>
            <AppointmentBanner
                selectDate={selectDate}
                setSelectDate={setSelectDate}>
            </AppointmentBanner>


            <AppointmentPicker
                selectDate={selectDate}
            ></AppointmentPicker>

        </div>
    );
};

export default Appointment;