import React from 'react';

const AppointmentInfo = ({ appointment, setTreatment }) => {
    const { name, price, slots } = appointment
    return (
        <div className="card shadow-xl">

            <div className="card-body items-center text-center">
                <h2 className="card-title">{name}</h2>
                <p>{slots.length > 0 ? slots[0] : 'Try another date'}</p>
                <p>{slots.length} {slots.length > 1 ? "spaces" : "space"} available </p>
                <p>Price : {price} $</p>
                <div className="card-actions">

                    <label onClick={() => setTreatment(appointment)} htmlFor="my-modal-3" className="btn bg-cyan-600">Make an appointment</label>
                </div>
            </div>
        </div>
    );
};

export default AppointmentInfo;