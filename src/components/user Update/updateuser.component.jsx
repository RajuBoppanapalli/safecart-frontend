

import React, { useEffect, useState } from "react"

import { NavBar } from "../Navbar/navbar.component"
import { Footer } from "../footer/footer.component"
import { useForm } from "react-hook-form";
import"../user Update/updateuser.component.css"


export function UpdateUser() {

    const[user ,setuser]=useState({});

    useEffect(()=>{
      let data=  localStorage.getItem("userdata");
      setuser(JSON.parse(data)[0]);

    },[])
   


    return (
        <>
        
            <div className="signupdate-head">
                <h1>Update profile</h1>
            </div>

            <div className="signupdate-page">
                <h3>Update profile</h3>
                <form method="post" action="http://localhost:4001/update-profile" >
                    <input type="hidden" name="id" defaultValue={user.id} />

                    <div className="forms-group">
                       <input type="text" placeholder="user name" name="user_name" defaultValue={user.user_name} />
                       
                    </div>
                    <br />
                    <div className="forms-group">
                        <input type="tel" placeholder="Phone Number" name="phoneNumber" defaultValue={user.phoneNumber} />
                       

                    </div><br />
                    <div className="forms-group">
                        <input type="email" placeholder="Email" name="email" defaultValue={user.email} />

                       
                    </div><br />
                    <div className="forms-group">
                        <input type="text" placeholder="country" name="country" defaultValue={user.country}  />
                     
                    </div>
                    <button type="submit"  class="updatebutn btn btn-primary mt-3" >Update profile</button>
                </form>
            </div>
            <Footer></Footer>
        </>
    )
}