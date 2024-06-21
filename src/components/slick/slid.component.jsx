import Slider from "react-slick";
import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img1 from "../../assets/images/img1.jpg"
import img2 from "../../assets/images/img2.jpg"
import img3 from "../../assets/images/img3.jpg"
import "../slick/slid.component.css"

function Arrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "block", background: "black" }}
            onClick={onClick}
        />
    );
}

function Slid() {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        nextArrow: <Arrow />,
        prevArrow:<Arrow/>,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <div className="card">
            <Slider {...settings}>
                <div className="slic-skid">
                    <img src={img1} alt="" className="w-100" />

                </div>
                <div className="slic-skid">
                    <img src={img2} alt="" className="w-400" />
                </div>
                <div className="slic-skid">
                    <img src={img3} alt="" className="w-100" />
                </div>
                <div className="slic-skid">
                    <img src={img1} alt="" className="w-100" />
                </div>
                <div className="slic-skid">
                    <img src={img2} alt="" className="w-100" />
                </div>
                <div className="slic-skid">
                    <img src={img3} alt="" className="w-100" />
                </div>
            </Slider>
        </div>


    )
}
export default Slid