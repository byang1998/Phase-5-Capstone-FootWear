import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function EditLogForm({ currentUser, log, shoeId, shoe, entry, setEdit, handleDelete, showEditForm, setShowEditForm }){
    const navigate = useNavigate();
    const [editLogForm, setEditLogForm] = useState({
        date: "",
        entry: "",
        shoe_id: shoe.id
    });

    function handleSubmit(e){
        e.preventDefault()

        setEditLogForm ({ 
            date: "", 
            entry: ""
        })

        fetch(`http://localhost:4000/logs/${log.id}`, {
            method: 'PATCH',
            headers: { 
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(editLogForm)
        })
        .then((r) => r.json())
        .then((editedLog) => {
            localStorage.setItem("logId", log.id)
            // console.log("LOCAL", localStorage.getItem("logId"));
            setEdit(editedLog.entry)
            // console.log(log)
            navigate('/account');
        })

        setShowEditForm(!showEditForm)

    }

    function handleChange(e){
        setEditLogForm({...editLogForm, [e.target.name]: e.target.value})
    }

    function handleDeleteFetch(id){
        fetch(`http://localhost:4000/logs/${log.id}`, {
            method: 'DELETE',
        })
        .then((r) => r.json())
        .then((log) => {
            handleDelete(log);
            navigate.push("/account");
        })
            
        }
    

    return (
        <div className="edit-log-form">
            <p>Edit Log</p>
                <form onSubmit={handleSubmit}>
                    <label>Edit Date: </label>
                        <input
                            type="text"
                            name="date"
                            value={editLogForm.date}
                            onChange={handleChange}
                        />
                <br />
                    <label>Edit Entry: </label>
                        <input
                            type="textarea"
                            name="entry"
                            value={editLogForm.entry}
                            onChange={handleChange}
                        />
                        <input type="submit" value="Submit" /> 
                </form> 
                <br />
                <button onClick={handleDeleteFetch} className="bottom">Delete</button>
        </div>
    )
}

export default EditLogForm;