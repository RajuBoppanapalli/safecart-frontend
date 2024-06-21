import React from "react"
import icon1 from"../../assets/images/icon1.svg"
import icon2 from"../../assets/images/icon2.svg"
import icon3 from"../../assets/images/icon3.svg"
import"../overview/overview.component.css"

export function OverView(){
    return(
        <>
        <div className="overview row">

            <div className="overview-content col">
                <div><img src={icon1} alt="" /></div>
                <div>
                    <h4>1,900+ Vendors</h4>
                    <p>1,900 Vendors are working with us around the US</p>
                </div>
            </div>
            <div className="overview-content col">
            <div><img src={icon2} alt="" /></div>
                <div>
                    <h4>9,102+ Customers</h4>
                    <p>9,102+ Customers are making retained purchases every now & then</p>
                </div>
            </div>
            <div className="overview-content col">
            <div><img src={icon3} alt="" /></div>
                <div>
                    <h4>12 Awards</h4>
                    <p>We won 12 awards for excellency in customer service</p>
                </div>
            </div>
        </div>
        </>
    )
}