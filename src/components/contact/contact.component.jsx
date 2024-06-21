import { Clock, Envelope, GeoAlt, Telephone } from "react-bootstrap-icons"
import "../contact/contact.component.css"
import { NavBar } from "../Navbar/navbar.component"
import { Footer } from "../footer/footer.component"
export function Contact() {
    return (
        <>
       
            <div className="contact-head">
                <h1>Contact</h1>
                <p>contact</p>
            </div>
            <div className="contact-main row">
                <div className="contact-div  col" >
                    <h2>Contact with us</h2>
                    <div className="contact-containt" >
                        <div className="contact-icon"><Telephone></Telephone></div>
                        <div className="contact-div-details">
                            <h4>Call us:</h4>
                            <p>+012 789654321</p>
                        </div>
                    </div>
                    <div >
                        <div className="contact-icon"><Envelope></Envelope></div>
                        <div className="contact-div-details">
                            <h4>Email us:</h4>
                            <p>company@mail.com</p>
                        </div>
                    </div>
                    <div >
                        <div className="contact-icon"><Clock></Clock></div>
                        <div className="contact-div-details">
                            <h4>Service Hour:</h4>
                            <p>10.00 am - 08.00 pm</p>
                        </div>
                    </div>
                    <div >
                        <div className="contact-icon"><GeoAlt></GeoAlt></div>
                        <div className="contact-div-details">
                            <h4>Address:</h4>
                            <p>2779 Rubaiyat Road,Traverse City, MI 49684</p>
                        </div>
                    </div>
                </div>
                <div className="contact-form col">
                    <h3>Get in Touch</h3>
                    <form action="">
                      
                       <div className="contact-form-div">
                        <label htmlFor="">Your Name :</label>
                        <br />
                        <input type="text"  placeholder="Your Nmae"/>
                        </div>
                        <br />
                       <div className="contact-form-div">
                       <label htmlFor="">Your email :</label>
                       <br />
                        <input type="text" placeholder="Your Email" />
                       </div>
                       <br />
                       <div className="contact-form-div">
                       <label htmlFor="">Your Subject :</label>
                       <br />
                        <input type="text"  placeholder="Your Subject" />
                        </div> 
                       <br />
                        <div className="contact-form-div">
                        <label htmlFor="">Your Message :</label>
                        <br />
                        <input type="text" placeholder="Your Message" maxLength={300}  />
                        </div>
                        <br />
                        <div className="contact-form-div">
                            <button>Submit</button>
                        </div>
                       
                        
                       
                    </form>
                </div>
            </div>
            <div className="maps">
            </div>
           <Footer></Footer>
        </>
    )
}