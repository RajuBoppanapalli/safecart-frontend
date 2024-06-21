import { Facebook, Instagram, Send, Twitter, Whatsapp } from "react-bootstrap-icons"
import logo from "../../assets/images/footerlogo.png"
import "../footer/footer.component.css"
export function Footer() {
    return (
        <>
            <div class="footer1 row">
                <div class="footertext col">
                    <img src={logo} alt="" />
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim quia maxime magni blanditiis ducimus, voluptates amet eligendi aspernatur iusto quisquam error minus, eos similique explicabo facere reiciendis id ipsam eum.</p>
                    <ul className="icons">
                        <li> <a href="/"><Twitter></Twitter></a> </li>
                        <li> <a href="/"><Facebook></Facebook></a></li>
                        <li><a href="/"><Whatsapp></Whatsapp></a></li>
                        <li><a href="/"><Instagram></Instagram></a></li>
                    </ul>
                </div>
                <div class="footertext col">
                    <h2>Helpful Links</h2>
                    <p>Home</p>
                    <p>Blog</p>
                    <p>contact</p>
                    <p>shop pahe</p>
                </div>
                <div class="footertext col">
                    <h2>Store Info</h2>
                    <p>Dhaka Bangladesh</p>
                    <p>1001011022</p>
                    <p>support@safecart.com</p>

                </div>
                <div class="footertext col">
                    <h2>GET IN TOUCH</h2>
                    <p>Sign up to our mailing list now!</p>
                    <div className="mail">
                        <input type="search" placeholder="Your Mail here" />
                        <button className="btn btn-primary"><Send></Send></button>
                    </div>
             

                </div>
                <hr className="line" />
                
                <center><div>
                    <p>© 2024 All right reserved by Bytesed MN</p> 
                </div></center>
            </div>
        </>
    )
}