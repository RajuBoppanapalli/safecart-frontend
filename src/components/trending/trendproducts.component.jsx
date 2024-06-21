
import { Heart, HeartFill, Repeat } from "react-bootstrap-icons"
import "../trending/trendproduct.component.css"
import product1 from "../../assets/images/product1.png"
import product2 from "../../assets/images/product2.webp"

import product4 from "../../assets/images/product4.png"

import cc from "../../assets/images/cccam.webp"

import mouse from "../../assets/images/mouse.webp"
import { getproduct } from "../../services/product.service"
import { useEffect, useState } from "react"

export function TrendProduct() {

    //creating state variable for product
    const [ProductDetails, setProductDetails] = useState([]);
    const [addwishlistmsg, setaddwishlistmsg] = useState(false);
    //creating useEffect for product
    useEffect(() => {
        getproduct().then((res) => {
            setProductDetails(res.data)

        })

    }, []);
    return (
        <>
            <div className="Trendpro-head row">
                <div className="Trendpro-head1 col"><h1>Trending products</h1></div>
                <div className="Trendpro-b col">
                    <button className="ms-5">Featured</button>
                    <button className="ms-5">Top Selling</button>
                    <button className="ms-5 mb-2">Weekly Top</button>
                </div>

            </div>


            <div className="pop-product row">

                {
                    ProductDetails && ProductDetails.map((iteam) =>
                        <div className="products col">
                            <div className="product-div">
                            {
                                    iteam.productImage && <img src={iteam.productImage} alt="" />
                                }
                                {
                                    !iteam.productImage && <img src={cc} alt="" />
                                }
                            </div>
                            <div className="product-percent">{iteam.OfferPercent}%off</div>
                            <div className="data-price">
                                <p>{iteam.productName}</p>
                                <h5>${iteam.Newprice}  &nbsp;<del>${iteam.OldPrice}</del>
                                </h5>
                            </div>
                            <div className="product-icons">
                            <form id={"addcart" + iteam.id} method="post" action="http://localhost:4001/addtocart">
                                    <input type="hidden" value={iteam.id} name="productsid" />
                                </form>
                                <button className="bttn" onClick={() => { document.getElementById("addcart" + iteam.id).submit() }}>Add to cart</button>

                                <button className="butn " ><Repeat></Repeat></button>

                                <form id={"wishlist" + iteam.id} method="post" action="http://localhost:4001/addtowishlist">
                                    <input type="hidden" value={iteam.id} name="productid" ></input>
                                </form>
                                <button className="butn" onClick={() => { document.getElementById("wishlist" + iteam.id).submit(); setaddwishlistmsg(true) }}><Heart></Heart></button>
                            </div>
                        </div>
                    )
                }





            </div>
            
            {

addwishlistmsg && <label className="wishlis-pop"><HeartFill className="heart"></HeartFill> your product add to wishlist</label>
}
           

        </>
    )
}