

import React from 'react';
import GiftCard from './GiftCard';
import Fashion from '../assets/fashion.jpeg';
import Electronics from '../assets/electrons.png';
import Books from '../assets/books.jpeg'

const GiftCardDashboard = (props) => {

    const giftCards = [{
        title: 'Fashion',
        image: Fashion,
        description: 'The latest fashion trends',
        name: 'Fashion'
    },
        {
            title: 'Electronics',
            image: Electronics,
            description: 'The latest electronics',
            name: 'Electronics'
        
    },
    {
        title: 'Books',
        image: Books,
        description: 'A libary of books for you to choose from',
        name: 'Books'
    }]

    return (
        <div style={{display: 'flex', justifyContent: 'center'}}>
            {giftCards.map((gift) => {
                return (
                    <div style={{marginRight: '30px'}}>
                        <GiftCard title={gift.title} description={gift.description} name={gift.name} imageUrl={gift.image}/>
                    </div>
                )
            })}
        </div>
    )
}

export default GiftCardDashboard
