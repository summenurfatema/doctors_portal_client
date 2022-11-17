import { format } from 'date-fns';
import React from 'react';

const BookingModal = ({ treatment, selectDate }) => {
    const { name, slots } = treatment
    const date = format(selectDate, 'PP')

    const handleModal = event => {
        event.preventDefault()
        const form = event.target
        const slot = form.slot.value
        const naame = form.naame.value
        const email = form.email.value
        const phone = form.phone.value

        const booking = {
            appointmentDate: date,
            treatment: name,
            patient: naame,
            email,
            phone,
            slot

        }
        console.log(booking)
    }
    return (
        <div>
            <input type="checkbox" id="my-modal-3" className="modal-toggle" />
            <div className="modal space-y-4">
                <div className="modal-box relative">
                    <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <form onSubmit={handleModal}>
                        <h3 name='name' className="text-lg font-bold">{name}</h3>



                        <input name='slot' type="text" value={date} className="input w-full" />
                        <select className="select select-info w-full">

                            {
                                slots?.map(slot => <option>{slot}</option>)
                            }

                        </select>
                        <input name='naame' type="text" placeholder="Your name" className="input w-full" />
                        <input name='email' type="text" placeholder="Email" className="input w-full" />
                        <input name='phone' type="text" placeholder="Phone" className="input w-full" />
                        <button type='submit' className='btn '>Submit</button>
                    </form>
                </div>

            </div>
        </div>
    );
};

export default BookingModal;