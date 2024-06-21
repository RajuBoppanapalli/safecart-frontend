
import "../promo/promo.component.css"
import secu from "../../assets/images/secu.svg"
import customer from "../../assets/images/customer.svg"
import support from "../../assets/images/support.svg"
import retur from "../../assets/images/return.svg"

export function Promo() {
    return (
        <>
    
                <div class=" container row">
                    <div class="containers col">
                        <div className="img-div">
                            <img src={secu} alt="" />
                        </div>
                        <div className="content">
                            <h4>Secure Payment Gateways</h4>
                            <p>Partnered with 48+ gateways for your safety</p>
                        </div>
                    </div>
                    <div class="containers col"><div className="img-div">
                        <img src={customer} alt="" />
                    </div>
                        <div className="content">
                            <h4>Customer Reviews</h4>
                            <p>Verified reviews are featured in our platforms</p>
                        </div></div>
                    <div class="w-100"></div>
                    <div class="containers col"><div className="img-div">
                        <img src={retur} alt="" />
                    </div>
                        <div className="content">
                            <h4>30 Day No-Hassle Return</h4>
                            <p>We guarantee happiness, If you’re not return it</p>
                        </div></div>
                    <div class="containers col"><div className="img-div">
                        <img src={support} alt="" />
                    </div>
                        <div className="content">
                            <h4>24/7 Customer Support</h4>
                            <p>Questions? Our support team is available 24/7</p>
                        </div></div>
                </div>


        </>
    )

}