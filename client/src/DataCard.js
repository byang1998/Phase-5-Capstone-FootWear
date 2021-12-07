import React from 'react'

const DataCard = ({ id, image, name, description }) => {
    return (
        <div className="each-db-card">
            <img src={image} alt={name} className="db-card-image"/>
            <h3>{name}</h3>
            <p className="card-name">{name}</p>
                {/* <div className="info"> */}
                    <p style={ {description: 'bold'} }>Description:</p>
                        <p>{description}</p>
                    
            <hr />
        </div>
    )
}

export default DataCard;