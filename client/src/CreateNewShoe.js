import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function CreateNewShoe({ currentUser, handleAddShoe, db, setDb, showAdd, setShowAdd }){
    const navigate = useNavigate();
    const [createState, setCreateState] = useState({
        shoe_name: "",
       
        user_id: 1,
        database_id: db[0].name
    })
    console.log(db)
    console.log(createState.database_id)
    

    function handleSubmit(e) {
        e.preventDefault();

        // debugger
        fetch('/shoes', {
            method: 'POST',
            headers: { 
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(createState),
        })
        .then((r) => r.json())
        .then((shoe) => {
       
            handleAddShoe(shoe)
            console.log(shoe)
            navigate('/account')
        })
        setShowAdd(!showAdd)
    }

    function handleChange(e){
        setCreateState({...createState, [e.target.name]: e.target.value})
    }


    return(
        <div className="new-shoe-form">
            <form onSubmit={handleSubmit} className="form-style">
                <label>Name: </label>
                    <input
                        type="text"
                        name="shoe_name"
                        value={createState.shoe}
                        onChange={handleChange}
                    />
            <br />
                <label>Shoe Type: </label>
                    <select
                    value={createState.database_id}
                    name="database_id"
                    onChange={handleChange}>
                        { db.map((shoe) => <option key={shoe.id} id={shoe.id}>{shoe.name}</option>) }
                    </select>
            <br />
                <input type="submit" value="Submit" className="yeah"/> 
            </form> 
            <br/>
        </div>
    )
}

export default CreateNewShoe;