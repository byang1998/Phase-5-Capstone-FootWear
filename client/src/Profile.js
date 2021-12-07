import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Profile({ currentUser, setCurrentUser, editAccount }){
    const [formData, setFormData] = useState({
        username: "",
        password: "",
        name: ""
    })
    const navigate = useNavigate();
  
    

    console.log(currentUser)

    function handleSubmit(e){
        fetch(`http://localhost:4000/users/${currentUser.id}`, {
            method: 'PATCH',
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
                },
            body: JSON.stringify(formData)
            })
            .then((r) => r.json())
            .then(user => {
                setCurrentUser(user);
                editAccount(user);
                console.log(user);
        })
    }

    function handleChange(e){
        setFormData({...formData, [e.target.name]: e.target.value})
    }

    function handleDelete(id){
        fetch(`http://localhost:4000/users/${currentUser.id}`, {
            method: 'DELETE',
        })
        .then((r) => r.json())
        .then(() => {
            setCurrentUser(null)
            navigate("/")
        })
        
    }

    return (
        <div className="profile-main">
            <div className="profile-content">
                {/* <p>Username: </p>
                <p>{userId.username}</p>
                <p>Name: </p>
                <p>{userId.name}</p> */}
                <img src = "https://wallpapercave.com/wp/GKARQ2i.jpg" alt="jordanwallpaper"/> 

            </div>
            <div className="vert"></div>
            <div className="edit-profile">
                <h3>Edit Profile</h3>
                <form onSubmit={handleSubmit}>
                    <label>Username: </label>
                        <input
                            type="text"
                            name="username"
                            autoComplete="off"
                            value={formData.username}
                            onChange={handleChange}
                        />
                        <br />
                    <label>Password: </label>
                        <input
                            type="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            autoComplete="current-password"
                        />
                        <br />
                    <label>Name: </label>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                        />
                        <br />
                        <input type="submit" value="Submit" />
                </form>
                <button onClick={handleDelete}>Delete</button>
            </div>
        </div>
    )
}

export default Profile;