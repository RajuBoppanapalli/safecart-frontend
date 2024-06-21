import { CartDash, Dash, Plus, Trash3 } from "react-bootstrap-icons";
import product2 from "../../assets/images/product2.webp"
import laptop from "../../assets/images/laptop.webp"
import cc from "../../assets/images/cccam.webp"
import desktop from "../../assets/images/desktop.webp"
import beauty1 from "../../assets/images/beauty1.webp"
import "../wishlist/wishlistpage.component.css"
import { NavBar } from "../Navbar/navbar.component";
import { Footer } from "../footer/footer.component";
import { useEffect, useState } from "react";
import { deletwishlist, getwishlist } from "../../services/wishlist.service";
import PopUpModel from "../sharedcomponents/popupmodel";
import { DeletePopUp } from "./deletepopup";
import axios from "axios";



export function WishlistPage() {
    const [wishlistdata, setwishlistdata] = useState([]);
    const [pageSize, setpageSize] = useState(4);
    const [pageNumber, setpageNumber] = useState([]);
    const [totalitems, settotalitems] = useState([]);
    const [showdeletepoup, setshowdeletepoup] = useState(false);
    const [deletewishlistid, setdeletewishlistid] = useState(null);




    // useEffect(() => {
    //     getwishlist().then((res) => {
    //         settotalitems(res.data);
    //         // console.log(res.data);
    //         let pnumbers = res.data.length / pageSize;
    //         let pnumberarry = [];
    //         for (let i = 1; i <= pnumbers; i++) {
    //             pnumberarry.push(i);
    //         }

    //         setpageNumber(pnumberarry);
    //         let data = res.data.slice(0, pageSize);
    //         setwishlistdata(data);
    //     })

    // }, []);

    useEffect(() => {
        getwishlist().then((res) => {
            settotalitems(res.data);
            let pnumbers = (res.data.length + pageSize - 1) / pageSize;
            let pnumberarry = [];
            for (let i = 1; i <= pnumbers; i++) {
                pnumberarry.push(i);
            }
            setpageNumber(pnumberarry);
            let data = res.data.slice(0, pageSize);
            setwishlistdata(data);
        });
    }, []);

    function gotopage(num) {
        let startindex = pageSize * (num - 1);
        let lastindex = pageSize * num;
        let res = totalitems.slice(startindex, lastindex);
        setwishlistdata(res);
    }
    //increment for quantity
    function incrementQuantity(index) {
        let data = JSON.parse(JSON.stringify(wishlistdata));
        data[index].quantity += 1;
        setwishlistdata(data);

    }
    // deccrement for quantity

    function decrementQuantity(index) {
        if (wishlistdata[index].quantity > 1) {
            let data = JSON.parse(JSON.stringify(wishlistdata));
            data[index].quantity -= 1;
            setwishlistdata(data);
        }

    }

    // async function deletewishlistitm(id) {
    //     if (deletewishlistid > 0) {

    //         const config = {
    //             headers: { "content-type": "multipart/form-data" }
    //         };
    //         const newform = new FormData();
    //         newform.append("id", deletewishlistid);

    //         const res = await axios.delete(`http://localhost:4001//wishlist/del/${id}`, newform, config);
    //     }
    // }


    function showDeletePopup(id) {
        setdeletewishlistid(id);
        setshowdeletepoup(true);
    }
    const deletewishlistitm = (id) => {
        axios.delete(`http://localhost:4001/wishlist/del/${id}`).then((res) => {
         
            setshowdeletepoup(false);
            window.location.reload();
        });
    }

    return (
        <>
          
            <div className="wislist-head">
                <h1>Wislist Page</h1>

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
                        wishlistdata && wishlistdata.map((iteam, index) =>
                            <tr>
                                <td>
                                    <div className="wish-img">
                                        <div>
                                        {
                                    iteam.productImage && <img src={iteam.productImage} alt="" />
                                }
                                {
                                    !iteam.productImage && <img src={laptop} alt="" />
                                }
                                        </div>
                                        <div className="wish-product-name">
                                            <h3>{iteam.productName}</h3>
                                            <p>size:Large</p>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <div className="wish-ut-price"><h4>${iteam.NewPrice}</h4></div>
                                </td>
                                <td>
                                    <div className="wish-qan">
                                        <span><Dash onClick={() => { decrementQuantity(index) }}></Dash></span>
                                        <span>{iteam.quantity}</span>
                                        <span><Plus onClick={() => { incrementQuantity(index) }}></Plus></span>
                                    </div>
                                </td>
                                <td>
                                    <div className="wish-total">
                                        <h4> ${iteam.NewPrice * iteam.quantity}</h4>
                                    </div>
                                </td>
                                <td>
                                    <div className="wish-action">
                                        <button className="cart m-1">
                                            <CartDash></CartDash>
                                        </button>
                                        <button className="trash">
                                            <Trash3 onClick={() => showDeletePopup(iteam.id)}></Trash3>
                                        </button>

                                    </div>
                                </td>
                            </tr>

                        )
                    }
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
                    <DeletePopUp deletewishlistitm={() => deletewishlistitm(deletewishlistid)} show={showdeletepoup} closemodal={() => setshowdeletepoup(false)} />
                </PopUpModel>



            </div>
            <Footer></Footer>

        </>
    )
}