import React from 'react';
import { useState, useEffect } from 'react';
import CreateNewShoe from './CreateNewShoe';
import ShoeContainer from './ShoeContainer';

function Account({ currentUser, db, setDb }){
    const [shoes, setShoes] = useState([]);
    const [logs, setLogs] = useState([]);
    const [showAdd, setShowAdd] = useState(false);

    useEffect(() => {
        fetch("http://localhost:4000/shoes")
        .then((r) => r.json())
        .then((data) => setShoes(data))
    }, []);

    useEffect(() => {
        fetch("http://localhost:4000/logs")
        .then((r) => r.json())
        .then((data) => setLogs(data))
    }, []);

    function handleShowAddShoe(){
        setShowAdd(!showAdd)
    }

    function handleAddShoe(newShoe){ 
        const updatedShoeList = [...shoes, newShoe] 
        setShoes(updatedShoeList) 
    }

    function handleUpdateShoe(updatedShoe){
        const editedShoeList = shoes.map((shoe) => {
            if (shoe.id === updatedShoe.id) {
                return updatedShoe
            } else {
                return shoe
            }
        })
        setShoes(editedShoeList)
    }

    function handleAddLog(newLog){
        const updatedLogList = [...logs, newLog]
        setLogs(updatedLogList)
    }

    function handleDelete(deleteLog){
        const updateLogs = logs.filter((log) => log.id !== deleteLog.id)
        setLogs(updateLogs)
    }

    function handleDeleteShoe(deleteShoe){
        const updateShoes = shoes.filter((shoe) => shoe.id !== deleteShoe.id)
        setShoes(updateShoes)
    }

    return(
        <div className="main">
            <button className="add-shoe-button" onClick={handleShowAddShoe}>Add a Shoe</button>
            { showAdd ? <CreateNewShoe currentUser={currentUser} handleAddShoe={handleAddShoe} db={db} setDb={setDb} showAdd={showAdd} setShowAdd={setShowAdd}/> : null}
            

            {currentUser ? (
            <ShoeContainer currentUser={currentUser} shoes={shoes} setShoes={setShoes} handleAddShoe={handleAddShoe} logs={logs} setLogs={setLogs} handleAddLog={handleAddLog} handleDelete={handleDelete} db={db} setDb={setDb} handleDeleteShoe={handleDeleteShoe} handleUpdateShoe={handleUpdateShoe}/>
            ) : (null) }
        </div>
    )
}

export default Account;