import { CartDash, Dash, Heart, Plus, Trash3 } from "react-bootstrap-icons";
import product2 from "../../assets/images/product2.webp"
import "../wishlist/wishlistpage.component.css"
import { NavBar } from "../Navbar/navbar.component";
import { Footer } from "../footer/footer.component";
import { useEffect, useState } from "react";
import { getcartdata } from "../../services/cart.service";
import PopUpModel from "../sharedcomponents/popupmodel";
import { DeleteCartPopUp } from "./deletecartpopup.component";
import axios from "axios";


export function AddToCartPage() {
    const [cartdata, setcartdata] = useState([]);
    const [pageSize, setpageSize] = useState(4);
    const [pageNumber, setpageNumber] = useState([]);
    const [totalitems, settotalitems] = useState([]);
    const [showdeletepoup, setshowdeletepoup] = useState(false);
    const [deletecartid, setdeletecartid] = useState(null);

    useEffect(() => {
        getcartdata().then((res) => {
            settotalitems(res.data);
            let pnumbers = (res.data.length + pageSize - 1) / pageSize;
            let pnumberarry = [];
            for (let i = 1; i <= pnumbers; i++) {
                pnumberarry.push(i);
            }
            setpageNumber(pnumberarry);
            let data = res.data.slice(0, pageSize);
            setcartdata(data);
        })
    }, []);

    function gotopage(num) {
        let startindex = pageSize * (num - 1);
        let lastindex = pageSize * num;
        let res = totalitems.slice(startindex, lastindex);
        setcartdata(res);
    }

    function increasequantity(index) {
        let data = JSON.parse(JSON.stringify(cartdata));
        data[index].quantity = (data[index].quantity || 1) + 1;
        setcartdata(data);
    }

    function decrementquantity(index) {

        if (cartdata[index].quantity > 1) {

            let data = JSON.parse(JSON.stringify(cartdata));
            data[index].quantity -= 1;
            setcartdata(data);
        }
    }

    function showDeletePopup(id) {
        setdeletecartid(id);
        setshowdeletepoup(true);
    }
    const deletecartiteam = (id) => {
        axios.delete(`http://localhost:4001/cart/del/${id}`).then((res) => {
         
            setshowdeletepoup(false);
            window.location.reload();
        });
    }



    return (
        <>

            <div className="wislist-head">
                <h1>Cart</h1>

            </div>
            <table className="tablebr">
                <thead>
                    <tr className="tablehe">
                        <th>Product Name</th>
                        <th>Unite price</th>
                        <th>Quantity</th>
                        <th>Total Price</th>
                        <th>Action</th>
                    </tr>
                </thead>

                <tbody>
                    {
                        cartdata && cartdata.map((iteam, index) =>
                            <tr>
                                <td>
                                    <div className="wish-img">
                                        <div>
                                        {
                                    iteam.productImage && <img src={iteam.productImage} alt="" />
                                }
                                {
                                    !iteam.productImage && <img src={product2} alt="" />
                                }
                                        </div>
                                        <div className="wish-product-name">
                                            <h3>{iteam.productName}</h3>
                                            <p>size:Large</p>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <div className="wish-ut-price"><h4>${iteam.Newprice}</h4></div>
                                </td>
                                <td>
                                    <div className="wish-qan">

                                        <span><Dash onClick={() => { decrementquantity(index) }}></Dash></span>
                                        <span>{iteam.quantity || 1}</span>
                                        <span><Plus onClick={() => { increasequantity(index) }}></Plus></span>
                                    </div>
                                </td>
                                <td>
                                    <div className="wish-total">
                                        <h4>${iteam.Newprice * (iteam.quantity || 1)}</h4>
                                    </div>
                                </td>
                                <td>
                                    <div className="wish-action">
                                        <button className="cart m-1">
                                            <Heart>

                                            </Heart>
                                        </button>
                                        <button className="trash">
                                            <Trash3 onClick={() => showDeletePopup(iteam.id)}></Trash3>
                                        </button>

                                    </div>
                                </td>
                            </tr>

                        )}
                </tbody>
            </table>
            <div className="pagination">

                {
                    pageNumber && pageNumber.map((iteam) =>
                        <button type="button" class="btn btn-primary" onClick={() => { gotopage(iteam) }}>{iteam}</button>
                    )
                }

            </div>
            <div>
            <PopUpModel open={showdeletepoup} title={"Delete Item"} show={showdeletepoup} closemodal={() => setshowdeletepoup(false)}>
             <DeleteCartPopUp deletecartiteam={() => deletecartiteam(deletecartid)} show={showdeletepoup} closemodal={() => setshowdeletepoup(false)}></DeleteCartPopUp>
                </PopUpModel>
            </div>
            <Footer></Footer>
        </>
    )
}