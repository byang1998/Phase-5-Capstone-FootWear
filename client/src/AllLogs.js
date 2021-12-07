import React from 'react';
import OneLog from './OneLog';
import AddLogForm from './AddLogForm';
import { useState } from 'react';


function AllLogs({ shoe, currentUser, handleAddLog, logs, setLogs, handleDelete }){
    const [showAddLogForm, setShowAddLogForm] = useState(null);

    const logList = Array.from(logs)
    // console.log(logs)

    function handleAddLogForm(){
        setShowAddLogForm(!showAddLogForm);
    }


    const allLogs = logList.map((log) => {

        if (shoe.id && log.shoe.id === shoe.id ) {

        return (
        <OneLog 
        key={log.id}
        setLogs={setLogs}
        handleAddLog={handleAddLog}
        {...log}
        log={log}
        currentUser={currentUser}
        shoe={shoe}
        shoeId={shoe.id}
        handleDelete={handleDelete}
        entry={log.entry}
        />
        )
    }})

    return (
        <ul className="logs">
            <button onClick={handleAddLogForm} className="bottom">New Log</button>
            { showAddLogForm ?
            <AddLogForm shoe={shoe} currentUser={currentUser} handleAddLog={handleAddLog} showAddLogForm={showAddLogForm} setShowAddLogForm={setShowAddLogForm}/>
            : null  }
            {allLogs}
        </ul>
    )
}


export default AllLogs;