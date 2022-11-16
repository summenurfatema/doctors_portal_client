import React from 'react';
import fluoride from '../../../assets/images/fluoride.png'
import cavity from '../../../assets/images/cavity.png'
import Service from '../Service/Service';



const Services = () => {
    const serviceData = [
        {
            id: 1,
            name: 'Fluoride Treatment',
            des: 'We are providing best solution to get rid from fluoride problems',
            img: fluoride
        },
        {
            id: 2,
            name: 'Cavity Treatment',
            des: 'We are providing best solution to get rid from cavity problems',
            img: cavity
        },
        {
            id: 3,
            name: 'Whittening Treatment',
            des: 'We are providing best solution to get rid from whittening problems',
            img: fluoride
        },
    ]
    return (
        <div>
            <div className='text-center'>
                <h3 className='font-bold text-cyan-500 text-xl'>Our Services</h3>
                <h2 className='font-thin text-gray-800 text-3xl'>We Provide</h2>
            </div>
            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    serviceData.map(service => <Service
                        key={service.id}
                        service={service}>
                    </Service>)
                }

            </div>

        </div>
    );
};

export default Services;