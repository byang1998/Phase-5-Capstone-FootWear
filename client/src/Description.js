import React from 'react';
import DataCard from './DataCard';

function Description({ db, setDb }){
    const eachCard = db.map((card) => {
        return (
            <>
            <DataCard 
                key={card.id}
                id={card.id}
                image={card.image}
                name={card.name}
                description={card.description}
                />
            </>
        )
    })
    return (
        <div className="db-container">
        {eachCard}
        <br />
        <br />
    
        </div>
    )
}

export default Description;