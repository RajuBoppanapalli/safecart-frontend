import React, { useRef } from "react"
import "../signin/signin.component.css"
import { Facebook, Google } from "react-bootstrap-icons"
import { NavBar } from "../Navbar/navbar.component"
import { Footer } from "../footer/footer.component"
import { getusers } from "../../services/users.service"
import { setLocalStorageItem } from "../../services/storage/local.storage"
import { useNavigate } from "react-router-dom"

import store from "../../services/reduxStore.service"



export function SignIn() {


    const usernameRef = useRef();
    const passwoedRef = useRef()

    let nagivate = useNavigate();
    function getRegisterData() {

        // let username = document.getElementById("user").value;
        // let password = document.getElementById("pass").value;
        let username = usernameRef.current.value;
        let password = passwoedRef.current.value;
        getusers().then((res) => {
            let Filterdata = res.data.filter((item) =>
                item.user_name === username || item.email === username && item.password === password
            );

            if (Filterdata.length > 0) {
               setLocalStorageItem("userdata",Filterdata);
                let action = { type: "loggin", data: Filterdata };
                store.dispatch(action);
                alert("user exist")
                nagivate("/userdashboard")
                
            } else {
                alert("User does not exist");
            }
        }).catch((ex) => {
            alert(ex.message);
        });

    }




    return (
        <>
           
            <div className="signin-head">
                <h1>SignIn</h1>
            </div>

            <div className="signpage ">
                <div className="signpage-head"><h3>SignIn</h3></div>

                <div>

                    <div className="form-inp">
                        <label >Email Or User Name
                            :</label>
                        <br />
                        <input type="text" ref={usernameRef} placeholder="Test_user" />
                    </div  >

                    <br />

                    <div className="form-inp">
                        <label>Password : </label>
                        <br />
                        <input type="password" ref={passwoedRef} placeholder="password" />
                    </div>

                    <br />
                    <div className="form-inp">
                        <button className="btn" onClick={() => { getRegisterData() }}>SignIn</button>
                    </div>
                    <br />
                    <div className="row">
                        <div className="col-6">
                            <input type="checkbox" />
                            <label htmlFor="">Remember Me</label>
                        </div>
                        <div className="col-6">
                            <a href="">Forgot Password</a>
                        </div>
                    </div>

                    <div className="form-inp">
                        <h4>or</h4>
                    </div>

                    <div className="form-log row">
                        <div className="form-ll col-6">
                            <div className="form-logs"  >
                                <Google></Google>
                                <a href="">Login With Google</a>
                            </div>
                        </div>

                        <div className="form-ll col-6">
                            <div className="form-logs">
                                <Facebook></Facebook>
                                <a href="">Login With Facebook</a>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <Footer></Footer>
        </>
    )
}