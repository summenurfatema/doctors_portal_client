
import { format } from 'date-fns';
import { DayPicker } from 'react-day-picker'

const AppointmentBanner = ({ selectDate, setSelectDate }) => {


    let footer = <p>Please pick a day.</p>;
    if (selectDate) {
        footer = <p>You picked {format(selectDate, 'PP')}.</p>;
    }

    return (

        <div className="hero">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src="https://placeimg.com/260/400/arch" className="rounded-lg shadow-2xl" alt='' />
                <div>
                    <DayPicker
                        mode='single'
                        selected={selectDate}
                        onSelect={setSelectDate}
                        footer={footer} />

                </div>
            </div>
        </div>

    );
};

export default AppointmentBanner;