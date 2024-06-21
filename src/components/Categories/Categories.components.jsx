import { ArrowLeft, ArrowRight } from "react-bootstrap-icons";
import"../Categories/Categories.component.css"
import fashion from"../../assets/images/fashion.webp"
import electronic from"../../assets/images/electronics.webp"
import home from"../../assets/images/home.webp"
import sports from"../../assets/images/sports.webp"
import beuaty from"../../assets/images/beauty.webp"
import kids from"../../assets/images/kids.webp"
import garden from"../../assets/images/garden.webp"

export function Categories() {
    return (
        <>

            <div className="categories-head row">
                <div className="categories-head1 col"><h1>Categories</h1></div>
                <div className="arrow-div col">
                <a href="" className="arrow"><ArrowLeft></ArrowLeft></a>
                <a href="" className="arrow"><ArrowRight></ArrowRight></a>
                </div>
             
            </div>
            <div className="Categories row">
                <div className="Categories-items col-1">
                    <div className="itm-img">
                        <a href=""> <img src={fashion} alt="" /></a>
                       
                    </div>
                    <div className="itm-text">
                     <p>Fashion</p>
                    </div>
                </div>
                <div className="Categories-items col-1">
                    <div className="itm-img">
                        <a href=""><img src={electronic} alt="" /></a>
                        
                    </div>
                    <div className="itm-text">
                      <p>Electronics</p>
                    </div>
                </div>
                <div className="Categories-items col-1">
                    <div className="itm-img">
                        <a href=""><img src={home} alt="" /></a>
                        
                    </div>
                    <div className="itm-text">
                      <p>Home & Livig</p>
                    </div>
                </div>
                <div className="Categories-items col-1">
                    <div className="itm-img">
                        <a href=""> <img src={garden} alt="" /></a>
                       
                    </div>
                    <div className="itm-text">
                    Garden & Outdoors
                    </div>
                </div>
                <div className="Categories-items col-1">
                    <div className="itm-img">
                        <a href=""><img src={sports} alt="" /></a>
                    </div>
                    <div className="itm-text">
                        <p>Sports & Fitness</p>
                    </div>
                </div>
                <div className="Categories-items col-1">
                    <div className="itm-img">
                        <a href=""><img src={beuaty} alt="" /></a>
                        
                    </div>
                    <div className="itm-text">
                        <p>Personal Care & Beauty</p>
                    </div>
                </div>
                <div className="Categories-items col-1">
                    <div className="itm-img">
                        <a href=""> <img src={kids} alt="" /></a>
                       
                    </div>
                    <div className="itm-text"><p>Kids & Babies</p></div>
                </div>

            </div>
        </>
    )
}