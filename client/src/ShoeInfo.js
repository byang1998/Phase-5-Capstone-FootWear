import React from 'react';
import AllLogs from './AllLogs';
import EditShoe from './EditShoe';
import { useState } from 'react';


function ShoeInfo({ id, shoe, currentUser, handleAddShoe, handleAddLog, logs, setLogs, handleDelete, db, setDb, handleDeleteShoe, handleUpdateShoe }){
    const [showLogs, setShowLogs] = useState(false);
    const [showEditShoe, setShowEditShoe] = useState(false);
    const [editShoe, setEditShoe] = useState("");

    function handleLogs(){
        setShowLogs(!showLogs);
    }

    function handleShowEditShoes(){
        setShowEditShoe(!showEditShoe);
    }

    return(
        <div className="one-shoe">        
            <button className="one-shoe-btn" onClick={handleShowEditShoes} style={{marginLeft: '850px'}}>Edit</button>
            { showEditShoe ?
            <EditShoe db={db} setDb={setDb} handleDeleteShoe={handleDeleteShoe} Shoe={shoe} showEditShoe={showEditShoe} setShowEditShoe={setShowEditShoe} id={id} currentUser={currentUser} editShoe={editShoe} setEditShoe={setEditShoe} handleUpdateShoe={handleUpdateShoe}/>
            : null }

            <p>{editShoe}</p>
         
            <img src="https://m.media-amazon.com/images/I/81HP3qJzYhL._AC_SL1500_.jpg" alt={shoe.shoe_name} className="my-shoe-img"/>

            <p>{shoe.shoe_name}</p>
            <button className="one-shoe-btn" onClick={handleLogs}>Logs</button>
            { showLogs ? 
            <div className="logs-div">
            <AllLogs shoe={shoe} currentUser={currentUser} handleAddLog={handleAddLog} logs={logs} setLogs={setLogs} handleDelete={handleDelete}/>
            </div>
            : null }

        </div>
    )
}

export default ShoeInfo;