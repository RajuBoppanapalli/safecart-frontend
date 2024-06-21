import React, { useEffect, useState } from "react"
import "../Popular Products/popproduct.component.css"
import product1 from "../../assets/images/product1.png"
import product2 from "../../assets/images/product2.webp"
import product3 from "../../assets/images/product3.webp"
import product4 from "../../assets/images/product4.png"
import laptop from "../../assets/images/laptop.webp"
import cc from "../../assets/images/cccam.webp"
import desktop from "../../assets/images/desktop.webp"
import beauty1 from "../../assets/images/beauty1.webp"

import mouse from "../../assets/images/mouse.webp"

import { ArrowRightCircle, Heart, HeartFill, Repeat } from "react-bootstrap-icons"
import { getproduct } from "../../services/product.service"
import store from "../../services/reduxStore.service"

export class Product extends React.Component {
    //creating state variable for product
    // const [ProductDetails, setProductDetails] = useState([]);

    // const [addwishlistmsg, setaddwishlistmsg] = useState(false);
    //creating useEffect for product
    // useEffect(() => {
    //     getproduct().then((res) => {
    //         setProductDetails(res.data)

    //     })

    //     store.subscribe(() => {
    //         const product = store.getState().products;
    //         setProductDetails(product);
    //     });


    // }, []);

    constructor(props) {
        super();
        this.state = {
            ProductDetails: [],
            addwishlistmsg: false
        }
    }
    componentDidMount() {
        this.getproductData();
        store.subscribe(() => {
            this.setState({ ProductDetails: store.getState()?.products })
        })
    }
    getproductData() {
        getproduct().then((res) => {
            this.setState({ ProductDetails: res.data })
        })
    }
    render() {
        return (
            <>
                <div className="product-head row">
                    <div className="product-head1 col"><h1>Popular Products</h1></div>
                    <div className="col"> <a href=""> View All</a><ArrowRightCircle></ArrowRightCircle></div>

                </div>


                <div className="pop-product row">

                    {
                        this.state.ProductDetails && this.state.ProductDetails.map((iteam) =>
                            <div className="products col">
                                <div className="product-div">
                                    {
                                        iteam.productImage && <img src={iteam.productImage} alt="" />
                                    }
                                    {
                                        !iteam.productImage && <img src={laptop} alt="" />
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
                                    <button className="bttn" onClick={() => { document.getElementById("addcart" + iteam.id).submit(); this.setState({ addwishlistmsg: true }) }}>Add to cart</button>

                                    <button className="butn " ><Repeat></Repeat></button>

                                    <form id={"wishlist" + iteam.id} method="post" action="http://localhost:4001/addtowishlist">
                                        <input type="hidden" value={iteam.id} name="productid" ></input>
                                    </form>
                                    <button className="butn" onClick={() => { document.getElementById("wishlist" + iteam.id).submit(); this.setState({ addwishlistmsg: true }) }}><Heart></Heart></button>

                                </div>



                            </div>

                        )
                    }
                </div>
                {

                    this.state.addwishlistmsg && <label className="wishlis-pop"><HeartFill className="heart"></HeartFill> your product add to wishlist</label>
                }

                {/* <div className="pop-product row">
                {
                    ProductDetails && ProductDetails.map((iteam) =>
                        <div className="products col">
                            <div className="product-div">
                            {
                                    iteam.productImage && <img src={iteam.productImage} alt="" />
                                }
                                {
                                    !iteam.productImage && <img src={laptop} alt="" />
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
                                <button className="butn"><Repeat></Repeat></button>

                                <form id={"wishlist" + iteam.id} method="post" action="http://localhost:4001/addtowishlist">
                                    <input type="hidden" value={iteam.id} name="productid" ></input>
                                </form>
                                <button className="butn" onClick={() => { document.getElementById("wishlist" + iteam.id).submit() }}><Heart></Heart></button>

                            </div>
                        </div>

                    )
                }
            </div> */}





            </>
        )
    }
}