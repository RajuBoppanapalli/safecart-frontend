import head from "../../assets/images/headphones.webp"
import wash from "../../assets/images/washing.webp"
import show from "../../assets/images/showimage.webp"
import "../main/main.component.css"
export function Main() {
    return (
        <>

            <div className="banner row">
                <div className="banner-1 col">
                    <div className="banner-text">
                        <h3>NOVEMBERS GADGET MADNESS</h3>
                        <h2>20% OFF</h2>
                        <button>GET Offer</button>
                    </div>

                    <img src={head} alt="" />
                </div>
                <div className="banner-2 col">
                    <div> <h3>HOME APPLIANCES</h3>
                        <h1>CYBER MONDAY SPECIAL</h1></div>
                    <img src={wash} alt="" />
                </div>
            </div>
                    <div class="carousel-item">
                        <div className="carousel-text">
                            <h4>WINTER 2024 Offer</h4>
                            <h2>Grab the best <br /> fashion deals <br /> in this winter</h2>
                            <button>Get Deals</button>
                        </div>
                        <img  src={show} alt="First slide" />
                    </div>

        </>

    )
}