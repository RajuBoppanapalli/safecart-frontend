import React from "react";
import { Truck } from "react-bootstrap-icons"

import aboutimg1 from "../../assets/images/aboutimg1.png"
import aboutimg2 from "../../assets/images/aboutimg2.png"
import aboutimg3 from "../../assets/images/aboutimg3.png"
import img1 from "../../assets/images/img1.jpg"
import img2 from "../../assets/images/img2.jpg"
import img3 from "../../assets/images/img3.jpg"
import "../about/about.component.css"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { NavBar } from "../Navbar/navbar.component";
import { Footer } from "../footer/footer.component";

function Moves(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "block", background: "black" }}
            onClick={onClick}
        />
    );
}
export function About() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 1,
        nextArrow: <Moves></Moves>,
        prevArrow: <Moves></Moves>,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 3,
                    initialSlide: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 3
                }
            }
        ]
    };

    return (
        <>
     
            <div className="about-head">
                <h1>About</h1>
                <p>about</p>
            </div>

            <div className="about-post1 row" >
                <div className="about-poster1-text col">
                    <div className="about-text">
                        <h2>This is how we do. Learn <br /> something about us and our <br /> services</h2>
                        <p>There’s a voice that keeps on calling me. Down the road, that’s where I’ll always be. Every stop I make, I make a new friend. Can’t stay for long, just turn around and I’m gone again. Maybe tomorrow, I’ll want to settle down, Until tomorrow, I’ll just keep moving on.</p>

                        <p>Top Cat! The most effectual Top Cat! Who’s intellectual close friends get to call him T.C., providing it’s with dignity.
                            fasdkfjlasdjflkajldsfjlkadsjlfjaldjflkaf</p>
                        <p>fadsfkhaksdfhkjahsdkfhakjsdhfkahdskj</p>
                        <p>fadskjfhkasdjhfkjhasdkjfha</p>
                        <p>fasdhfkahsdkfhkasdhfkjashdkfjh</p>
                        <p>fasdbkfhaskdfhkasdhfkashdfkjasdhjkf</p>
                    </div>
                </div>
                <div className="about-poster1-img col">
                    <img src={aboutimg1} alt="" />
                </div>
            </div>
            <div className="about-poster2 row" >
                <div className="about-poster2-img col">
                    <img src={aboutimg2} alt="" />
                </div>
                <div className="about-poster2-text col">
                    <h2>We Provide Express & <br /> secure home delivery</h2>
                    <p>here’s a voice that keeps on calling me. Down the road, that’s where I’ll always be. Every stop I make, I make a new friend. Can’t stay for long, just turn around and I’m gone again. Maybe tomorrow, I’ll want to settle down, Until tomorrow, I’ll just keep moving on.</p>
                    <p>Top Cat! The most effectual Top Cat! Who’s intellectual close friends get to call him T.C., providing it’s with dignity.</p>
                </div>
            </div>

            <div className="about-poster3 row">

                <div className="about-poster3-text col">
                    <div className="about-icons row">
                        <div className="about-icons-1 col">
                            <h3>Our Advantages</h3>
                        </div>
                    </div>
                    <div className="about-icons row">
                        <div className="about-icons-1 col">
                            <Truck></Truck>
                            <div className="cont"><h4>Free Shipping</h4>
                                <p>Free Shopping on all online order
                                </p></div>

                        </div>
                        <div className="about-icons-1 col">
                            <Truck></Truck>
                            <div className="cont"><h4>100% Secure Payment</h4>
                                <p>We Ensure Secure Transections</p>
                            </div>
                        </div>
                    </div>
                    <div className="about-icons row">
                        <div className="about-icons-1 col">
                            <Truck></Truck>
                            <div className="cont">
                                <h4>Fresh Product</h4>
                                <p>We provide 100% Original item</p>
                            </div>
                        </div>
                        <div className="about-icons-1 col">
                            <Truck></Truck>

                            <div className="cont">
                                <h4>

                                    24/7 Support Center
                                </h4>
                                <p>We are available in 24 hours</p>
                            </div>

                        </div>
                    </div>

                </div>
                <div className="about-poster3-img col">
                    <img src={aboutimg3} alt="" />

                </div>
            </div>


            {/*...............................................  */}
            <div className="card">
                <h1>Client Says</h1>
                <Slider {...settings}>
                    <div className="slic-skid">
                        <p className="content">Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti earum assumenda consequuntur sunt reprehenderit amet, saepe itaque recusandae asperiores rem?</p>
                        <div className="second-slick">
                            <img src={img1} alt="" />
                            <div className="third-slick">
                            <h3>mr.raju</h3>
                            <p>Lorem ipsum dolor sit.</p>
                            </div>
                            
                        </div>
                    </div>
                    <div className="slic-skid">
                        <p className="content">Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti earum assumenda consequuntur sunt reprehenderit amet, saepe itaque recusandae asperiores rem?</p>
                        <div className="second-slick">
                            <img src={img2} alt="" />
                            <div className="third-slick">
                            <h3>mr.praveen</h3>
                            <p>Lorem ipsum dolor sit.</p>
                            </div>
                            
                        </div>
                    </div>
                    <div className="slic-skid">
                        <p className="content">Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti earum assumenda consequuntur sunt reprehenderit amet, saepe itaque recusandae asperiores rem?</p>
                        <div className="second-slick">
                            <img src={img3} alt="" />
                            <div className="third-slick">
                                <h3>mr.Ajay</h3>
                            <p>Lorem ipsum dolor sit.</p>
                            </div>
                            
                        </div>
                    </div>
                    <div className="slic-skid">
                        <p className="content">Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti earum assumenda consequuntur sunt reprehenderit amet, saepe itaque recusandae asperiores rem?</p>
                        <div className="second-slick">
                            <img src={img3} alt="" />
                            <div className="third-slick">
                            <h3>mr.Manoj</h3>
                            <p>Lorem ipsum dolor sit.</p>
                            </div>
                        </div>
                    </div>
                    <div className="slic-skid">
                        <p className="content">Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti earum assumenda consequuntur sunt reprehenderit amet, saepe itaque recusandae asperiores rem?</p>
                        <div className="second-slick">
                            <img src={img1} alt="" />
                            <div className="third-slick">
                            <h3>mr.Vasu</h3>
                            <p>Lorem ipsum dolor sit.</p>
                            </div>
                            
                        </div>
                    </div>
                    <div className="slic-skid">
                        <p className="content">Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti earum assumenda consequuntur sunt reprehenderit amet, saepe itaque recusandae asperiores rem?</p>
                        <div className="second-slick">
                            <img src={img2} alt="" />
                            <div className="third-slick">
                            <h3>mr.Mahesh</h3>
                            <p>Lorem ipsum dolor sit.</p>
                            </div>
                           
                        </div>
                    </div>
                    <div className="slic-skid">
                        <p className="content">Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti earum assumenda consequuntur sunt reprehenderit amet, saepe itaque recusandae asperiores rem?</p>
                        <div className="second-slick">
                            <img src={img3} alt="" />
                            <div className="third-slick">
                            <h3>mr.Prashanth</h3>
                            <p>Lorem ipsum dolor sit.</p>
                            </div>
                            
                        </div>
                    </div>
                    <div className="slic-skid">
                        <p className="content">Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti earum assumenda consequuntur sunt reprehenderit amet, saepe itaque recusandae asperiores rem?</p>
                        <div className="second-slick">
                            <img src={img2} alt="" />
                            <div className="third-slick">
                            <h3>mr.Naveen</h3>
                            <p>Lorem ipsum dolor sit.</p>
                            </div>
                           
                        </div>
                    </div>
                    <div className="slic-skid">
                        <p className="content">Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti earum assumenda consequuntur sunt reprehenderit amet, saepe itaque recusandae asperiores rem?</p>
                        <div className="second-slick">
                            <img src={img1} alt="" />
                            <div className="third-slick">
                            <h3>mr.manmath</h3>
                            <p>Lorem ipsum dolor sit.</p>
                            </div>
                            
                        </div>
                    </div>
                </Slider>
            </div>
            <Footer></Footer>

        </>
    )
}