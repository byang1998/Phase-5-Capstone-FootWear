import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

function EditShoe({ currentUser, db, setDb, handleDeleteShoe, shoe, showEditShoe, setShowEditShoe, editShoe, setEditShoe, handleUpdateShoe }){
    const navigate = useNavigate();
    const [editShoeForm, setEditShoeForm] = useState({
        id: "",
        shoe_name: "",
        user_id: 1,
        database_id: db.id
    });

    function handleSubmit(e){
        e.preventDefault()


        fetch(`/shoes/${e}`, {
            method: 'PATCH',
            headers: { 
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(editShoeForm)
        })
        .then((r) => r.json())
        .then((editedShoe) => {
            localStorage.setItem("shoeId", shoe.id)
           
            handleUpdateShoe(editedShoe)
     
            navigate('./account');
        })

        setShowEditShoe(!showEditShoe)

    }

    function handleChange(e){
        setEditShoeForm({...editShoeForm, [e.target.name]: e.target.value})
    }

    function handleDeleteFetch(id){
        fetch(`http://localhost:4000/shoes/${shoe.id}`, {
            method: 'DELETE',
        })
        .then((r) => r.json())
        .then((shoe) => {
            handleDeleteShoe(shoe);
            navigate("/account");
        })
            
        }

    return (
        <div className="edit-shoe-form">
            <form onSubmit={handleSubmit}>
                <label>Edit Name: </label>
                    <input
                        type="text"
                        name="shoe_name"
                        value={editShoeForm.shoe_name}
                        onChange={handleChange}
                    />
            <br />
                <label>Edit Shoe Type: </label>
                    <select
                    value={editShoeForm.database_id}
                    onChange={handleChange}>
                        { db.map((shoe) => <option key={shoe.id}>{shoe.name}</option>) }
                    </select>
            <br />
                <input type="submit" value="Submit" className="buttom"/> 
            </form> 
            <br/>
            <button onClick={handleDeleteFetch} className="butt">Delete</button>
        </div>
    )   
}

export default EditShoe;