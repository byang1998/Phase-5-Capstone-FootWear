import './App.css';
import React from 'react'
import {  Routes, Route } from 'react-router-dom';
import Header from './Header';
import Home from './Home';
import Login from './Login';
import CreateAccount from './CreateAccount';
import Account from './Account';
import Profile from './Profile';
import Description from './Description';
import { useState, useEffect } from 'react';

function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const [db, setDb] = useState([]);

  
    const userId = localStorage.getItem('userId');

  useEffect(() => {
    console.log("localStorage UserId", userId);

    if (userId) {
    fetch(`/account/${parseInt(userId)}`)
    .then((r) => r.json())
    .then((user) => {
      setCurrentUser(user);
    })
    }
  }, [userId]);

  useEffect(() => {
    fetch("/databases")
    .then((r) => r.json())
    .then((data) => setDb(data))
}, []);

  function newAccount(newAccountForm){
    console.log(newAccountForm)
    setCurrentUser(newAccountForm)
  }

  function editAccount(updatedAccount){
    setCurrentUser(updatedAccount)
  }


  return (
    
     
      
      <div className="App">
      <Header currentUser={currentUser} setCurrentUser={setCurrentUser}/>
      <Routes>
      <Route path="/login" element={<Login currentUser={currentUser} setCurrentUser={setCurrentUser} />} />
      <Route path="/create-account" element={<CreateAccount currentUser={currentUser} newAccount={newAccount} />} />
      <Route path="/account" element={<Account currentUser={currentUser} db={db} setDb={setDb} />} />
      <Route path="/descriptions" element={<Description db={db} setDb={setDb}/>} />
      <Route path="/profile" element={<Profile currentUser={currentUser} setCurrentUser={setCurrentUser} editAccount={editAccount} />} />
      <Route path="/" element={<Home/>} />

      </Routes>


      </div>
     
     
      )
    }


//       {/* <BrowserRouter>
//       <Routes>
//         <Route path="/login">
//           <Login currentUser={currentUser} setCurrentUser={setCurrentUser}/>
//         </Route>
//         <Route path="/create-account">
//           <CreateAccount currentUser={currentUser} newAccount={newAccount}/>
//         </Route>
//         <Route path="/account">
//           <Account currentUser={currentUser} db={db} setDb={setDb}/>
//         </Route>
//         <Route path="/descriptions">
//           <Description db={db} setDb={setDb}/>
//         </Route>
//         <Route path="/profile">
//           <Profile currentUser={currentUser} setCurrentUser={setCurrentUser} editAccount={editAccount} />
//         </Route>
//         <Route path="/">
//           <Home />
//         </Route>
//       </Routes>
//       </BrowserRouter>
//     </div>
//   )
// } */}

export default App;