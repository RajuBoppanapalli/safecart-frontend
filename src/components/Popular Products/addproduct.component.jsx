import axios from "axios";
import { useState } from "react";
import { useForm } from "react-hook-form"
import "../Popular Products/addproduct.component.css"
import { Check2Circle } from "react-bootstrap-icons";

export function AddProduct() {
    const [productimage, setproductimage] = useState();
    const [addproduct, setaddproduct] = useState(false);
    const {
        register,
        handleSubmit
    } = useForm();

    async function saveData(data) {
        let formData = new FormData();
        formData.append("productName", data.productName);
        formData.append("OldPrice", data.OldPrice);
        formData.append("Newprice", data.Newprice);
        formData.append("OfferPercent", data.OfferPercent);
        formData.append("Stockavailable", data.Stockavailable);
        formData.append("productImage", productimage);

        const config = {
            Headers: { "content-Type": "multipart/form-data" }

        }
        const res = await axios.post("http://localhost:4001/savedata", formData, config);
        window.location.reload();


    }
    function loadImage(event) {
        var reader = new FileReader();
        reader.onload = function () {
            setproductimage(reader.result)
        }
        reader.readAsDataURL(event.target.files[0]);
    }
    return (
        <>
            <div className="add-product-head">
                <h1>Add Product</h1>
            </div>
            <div className="addproduct">
                <form onSubmit={handleSubmit((data) => { saveData(data) })}>
                    <span className="add">Add Product</span>
                    <div>
                        <label htmlFor="">productName :</label> <input type="text" name="productName" placeholder="Product Name " {...register('productName')} /></div>
                    <div> <label htmlFor="">OldPrice :</label><input type="text" name="OldPrice" placeholder="Old Price" {...register('OldPrice')} /></div>
                    <div> <label htmlFor="">Newprice :</label><input type="text" name="Newprice" placeholder="New Price"{...register('Newprice')} />  </div>
                    <div> <label htmlFor="">OfferPercent :</label><input type="text" name="OfferPercent" placeholder="Offer Precent" {...register('OfferPercent')} /></div>
                    <div><label htmlFor="">Stockavailable :</label> <input type="text" name="Stockavailable" placeholder="Stock available" {...register('Stockavailable')} /></div>
                    <div> <label htmlFor="">productImage :</label>   <input type="file" name="productImage" {...register('productImage')} onChange={(event) => { loadImage(event) }} />  </div>
                    <div> <button className="bn" onClick={() => { setaddproduct(true) }} >submit</button></div>
                </form>
            </div>
            {

                addproduct && <label className="wishlis-pop"><Check2Circle></Check2Circle>Added Successfully</label>
            }
        </>
    )
}