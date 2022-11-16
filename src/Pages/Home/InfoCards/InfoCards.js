import React from 'react';
import marker from '../../../assets/icons/marker.svg'
import clock from '../../../assets/icons/clock.svg'
import phone from '../../../assets/icons/phone.svg'
import InfoCard from '../InfoCard/InfoCard';

const InfoCards = () => {
    const cardData = [
        {
            id: 1,
            name: 'Opening Hours',
            description: 'Open 9am to 5pm everyday',
            icon: clock,
            bgClass: 'bg-cyan-400'
        },
        {
            id: 2,
            name: 'Opening Hours',
            description: 'Open 9am to 5pm everyday',
            icon: marker,
            bgClass: 'bg-gray-800'
        },
        {
            id: 3,
            name: 'Opening Hours',
            description: 'Open 9am to 5pm everyday',
            icon: phone,
            bgClass: 'bg-cyan-400'
        },
    ]
    return (
        <div className='grid gap-6 my-10 mx-7 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
            {
                cardData.map(card => <InfoCard
                    key={card.id}
                    card={card}></InfoCard>)
            }
        </div>
    );
};

export default InfoCards;