import { format } from 'date-fns';
import React, { useContext } from 'react';
import { AuthContext } from '../../../context/UserContext';


const BookingModal = ({ treatment, selectDate }) => {
    const { user } = useContext(AuthContext)
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

        fetch(`http://localhost:8080/bookings?date=${date}`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    alert('SuccessFull')
                }
                else {
                    alert(data.message)
                }
            })
            .catch(err => console.error(err))
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



                        <input name='date' type="text" value={date} className="input w-full" />
                        <select name='slot' className="select select-info w-full">

                            {
                                slots?.map(slot => <option>{slot}</option>)
                            }

                        </select>
                        <input name='naame' type="text" placeholder='Enter Name' className="input w-full" />
                        <input name='email' type="text" value={user?.email} readOnly className="input w-full" />
                        <input name='phone' type="text" placeholder="Phone" className="input w-full" />
                        <button type='submit' className='btn '>Submit</button>
                    </form>
                </div>

            </div>
        </div>
    );
};

export default BookingModal;