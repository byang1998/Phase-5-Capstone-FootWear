import React from 'react';
import ShoeInfo from './ShoeInfo'

function ShoeContainer({ currentUser, shoes, setShoes, handleAddShoe, handleAddLog, logs, setLogs, handleDelete, db, setDb, handleDeleteShoe, handleUpdateShoe }){



    const allShoes = shoes.map((shoe) =>{
        
        return(
        <>
        <ShoeInfo 
        key={shoe.id}
        setShoes={setShoes}
        handleAddShoes={handleAddShoe}
        handleAddLog={handleAddLog}
        {...shoe}
        shoe={shoe}
        currentUser={currentUser}
        logs={logs}
        setLogs={setLogs}
        handleDelete={handleDelete}
        db={db}
        setDb={setDb}
        handleDeleteShoe={handleDeleteShoe}
        handleUpdateShoe={handleUpdateShoe}
        />
        </>
    )
    })

    return (
        <div className="container">
        <h2>My Shoes:</h2>
            {allShoes}
        </div>
    )
    
}

export default ShoeContainer;