import tracking from "../../assets/images/treaking.webp"

import { Footer } from "../footer/footer.component"
import "../tracking/ordertracking.component.css"
export function TrackingOrder() {
    return (
        <>
     
            <div className="order-head">
                <h1>Track Order</h1>
            </div>
            <div className="order-main row">
                <div className=" order-tracking col">
                    <h3>Order Tracking</h3>
                    <form action="">
                        <div className="order-input-div">
                            <label htmlFor="">Order Id :</label>
                            <br />
                            <input type="text" placeholder="order id" />
                        </div>
                        <div className="order-input-div">
                            <label htmlFor="">Email :</label>
                            <br />
                            <input type="email" placeholder="Billing Email" />
                        </div>
                        <br />
                        <div>
                            <button className="tr-btn">Track Your Order</button>
                        </div>
                    </form>
                </div>
                <div className="order-img col">
                    <img src={tracking} alt="" />
                </div>
            </div>
<Footer></Footer>
        </>
    )
}