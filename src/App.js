
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import { AppRouter } from './app.router';
import { NavBar } from './components/Navbar/navbar.component';
import React, { useEffect, useState } from 'react';
import store from './services/reduxStore.service';
import { UserContextVariable } from './services/usercontext';


function App() {
  const[userDetails ,setuserDetails]=useState(null)
  useEffect(()=>{
    checkuserlogedin();

},[])

function checkuserlogedin() {
    store.subscribe(() => {
        let user = store.getState()?.user
        // alert(JSON.stringify(user))
        if (user!=null && user!=undefined ) {
          setuserDetails(true)
         
        }
        else {
          setuserDetails(null)
        }
    })
}
  return (
    <>
  <UserContextVariable.Provider value={userDetails}>
      <BrowserRouter>
      <NavBar></NavBar>
      <AppRouter></AppRouter>
      </BrowserRouter>
      </UserContextVariable.Provider>
    </>
  );
}

export default App;
