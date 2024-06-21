import { BoxArrowRight, Cart, Facebook, Geo, GeoAlt, Heart, Instagram, Person, Repeat, Search, Twitter, Whatsapp } from "react-bootstrap-icons"
import "../Navbar/navbar.component.css"
import logo from "../../assets/images/logo.webp"
import { Link } from "react-router-dom"
import { useContext, useEffect, useRef, useState } from "react"
import store from "../../services/reduxStore.service"
import { useNavigate } from "react-router-dom"
import { UserContextVariable } from "../../services/usercontext"
import axios from "axios"

// import { Navigate } from "react-router-dom";


export function NavBar() {

    const [userlogedin, setuserlogedin] = useState(false);
    let nagivate = useNavigate();
    const user = useContext(UserContextVariable);

    useEffect(() => {
        if (user) {
            setuserlogedin(true)
        }
        else {
            setuserlogedin(false)
        }

    }, [user])

    function logout() {
        let action = { type: "loggin", data: null }
        store.dispatch(action);
        nagivate("/home")
    }
    
    let searchProductRef = useRef();

    async function searchForProduct() {
        const formData = new FormData();
        formData.append('productName', searchProductRef.current.value);
        const config = {
            headers: {
                'content-Type': 'multipart/form-data'
            }
        };
        const res = await axios.post('http://localhost:4001/searchproduct', formData, config);

        store.dispatch({ type: "product", data: res.data });
    }
    
    return (
        <>

            <div className="navbar-main row">
                <div className="icon col">
                    <ul className="icons">
                        <li> <a href="/"><Twitter></Twitter></a> </li>
                        <li> <a href="/"><Facebook></Facebook></a></li>
                        <li><a href="/"><Whatsapp></Whatsapp></a></li>
                        <li><a href="/"><Instagram></Instagram></a></li>
                    </ul>
                </div>
                <div className="col">
                    <ul className="nav-menu">
                        <li><a href=""> Seller login</a></li>
                        <li> <a href="">FAQ</a></li>
                        <li><a href="/contact"> Contact</a></li>
                        <li> <a href="/tracking"> Tracking order</a></li>
                    </ul>
                </div>
            </div>


            <div className="sub-nav row">
                <div className="logo-icon col-3">
                    <a href="http://localhost:3000/"><img src={logo} alt="" /></a>
                </div>
                <div className="search col-3">
                    <input type="search" placeholder="search For Product" ref={searchProductRef} />
                    <button className="btn"><Search onClick={() => { searchForProduct() }}></Search></button>
                </div>
                <div className="location col-3"><GeoAlt></GeoAlt>Order tracking</div>
            </div>


            <div className="nav-menus row">
                <div className="col"> <ul className="nav-menus-1">
                    <li className="nav-menus-list">Home pages
                        <ul className="sub-drop">
                            <li className="sub-drop-itm"> <a href="/adding-product">Home Stylle 01</a></li>
                            <li className="sub-drop-itm"> <a href="">Home Stylle 02</a></li>
                            <li className="sub-drop-itm">Home Stylle 04</li>
                        </ul>
                    </li>
                    <li className="nav-menus-list"> <a href="/about">About</a></li>
                    <li className="nav-menus-list">Shop Page
                        <ul className="sub-drop">
                            <li className="sub-drop-itm">

                                <a href="/productlist"> Product List</a></li>
                            <li className="sub-drop-itm">Grid Product</li>
                            <li className="sub-drop-itm">Full shop page</li>

                        </ul>
                    </li>
                    <li className="nav-menus-list">Pages
                        <ul className="sub-drop">
                            <li className="sub-drop-itm"><a href="/terms">Terms &Conditions</a></li>
                            <li className="sub-drop-itm"><a href="/privacy">privacy policy</a> </li>
                            <li className="sub-drop-itm">FQA</li>
                            <li className="sub-drop-itm">delete</li>
                        </ul>
                    </li>
                    <li className="nav-menus-list">Blog
                        <ul className="sub-drop">
                            <li className="sub-drop-itm"><a href="blog-grid">Blog Grid Style</a></li>
                            <li className="sub-drop-itm">Grid List</li>
                            <li className="sub-drop-itm">display</li>
                            <li className="sub-drop-itm">delete</li>
                        </ul>
                    </li>
                    <li className="nav-menus-list"><a href="/contact">Contact</a></li>

                </ul></div>
                <div className="col">
                    <ul className="nav-menus-2">
                        <li><a className="astyle" href="/wishlist"><Heart></Heart></a></li>
                        <li><a className="astyle" href="/cartpage"><Cart></Cart></a> </li>
                        <li><Repeat></Repeat></li>
                        <li><Person></Person></li>
                        {
                            userlogedin == false &&
                            <li>login/Register
                                <ul className="sub-drop">
                                    <li className="sub-drop-itm"><a href="/signin">Sign In</a></li>
                                    <li className="sub-drop-itm"><a href="/signup">Sign Up</a></li>

                                </ul>
                            </li>
                        }
                        {
                            userlogedin == true &&
                            <li>login/Register
                                <ul className="sub-drop">
                                    <li className="sub-drop-itm"><a href="/updateuser">Update Profile</a></li>
                                    <li className="sub-drop-itm"><button className="logbtn" onClick={() => { logout() }}>Logout &nbsp;  <BoxArrowRight></BoxArrowRight></button></li>

                                </ul>
                            </li>
                        }




                    </ul>
                </div>


            </div>
        </>
    )
}