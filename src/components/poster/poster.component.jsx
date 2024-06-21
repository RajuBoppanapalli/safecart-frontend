import { Check, Check2 } from "react-bootstrap-icons";
import winter1 from "../../assets/images/winter1.webp"
import winter2 from "../../assets/images/winter2.webp"
import winter3 from "../../assets/images/winter3.webp"
import "../poster/poster.component.css"

export function Poster() {
    return (
        <>
            <div className="poster-main row">
                <div className="poster-main-one col">
                   
                        <div className="poster-inner-main">
                            <div className="poster-inner-sub">
                                <h1>Winter</h1>
                                <p>ON the Door</p>
                            </div>
                            <div className="poster-inner-sub2">
                                <ul>
                                    <li><span><Check2></Check2></span>sink care</li>
                                    <li> <span><Check2></Check2></span>Fashion wear</li>
                                    <li> <span><Check2></Check2></span>Electronic items</li>
                                    <li> <span><Check2></Check2></span>Furniture</li>

                                </ul>
                            </div>
                            <div className="poster-inner-sub3">
                                <button>Get Offers</button>
                            </div>
                        </div>

                        <div>
                            <img src={winter1} alt="" />
                        </div>

                </div>
                <div className="poster-main2 col">
                    <div className="poster-main-two">
                        <div className="">
                            <img src={winter2} alt="" />
                        </div>
                        <div className="poster-main2-sub1">
                            <div >
                                <h3>ENJOY YOUR <br /> TEXAS STYLE <br /> WINTER FASHION <br />2023</h3>
                            </div>
                            <div><button>View Products</button></div>
                        </div>
                    </div>
                    <div className="poster-main-three">
                        <div className="poster-main2-sub2">
                            <div>    <h3>NAILS CARE? GET  <br /> YOUR WINTER KIT <br /> NOW</h3></div>
                            <div><button>View Product</button></div>

                        </div>
                        <div>
                            <img src={winter3} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}