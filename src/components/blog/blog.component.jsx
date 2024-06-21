import React from "react"
import "../blog/blog.component.css"
import blog1 from "../../assets/images/blog1.webp"
import blog2 from "../../assets/images/blog2.webp"
import blog3 from "../../assets/images/blog3.webp"
import blog4 from "../../assets/images/blog4.webp"
import blog5 from "../../assets/images/blog5.webp"
import blog6 from "../../assets/images/blog6.webp"

import { CalendarEvent, Tag } from "react-bootstrap-icons"
import { NavBar } from "../Navbar/navbar.component"
import { Footer } from "../footer/footer.component"
export function BlogGrid() {
    return (
        <>
            <div className="blog-head">
                <h1>Blog</h1>
                <p>Blog Grid Style</p>
            </div>
            <div className="blog-main">

                <div  className="blog-div">
                    
                    <div className="blog-img-div">
                        <img src={blog1} alt="" />
                    </div>
                    <div className="cal-and-event">
                        <CalendarEvent></CalendarEvent><p>Mon Jun 2020</p>
                        &nbsp;  &nbsp;
                        <Tag></Tag><p>
                            Startup Business</p>
                    </div>
                    <div className="blog-content">
                        <div className="blog-content-head">
                            <h3>New organization are added seal there</h3>
                        </div>
                        <div>
                            <p>Was drawing natural fat respect husband. An as noisy an offer drawn blush...</p>
                        </div>
                    </div>
                    <div className="blog-btn">
                        <button>Read More</button>
                    </div>
                </div>
                <div className="blog-div">
                    <div className="blog-img-div">
                        <img src={blog2} alt="" />
                    </div>
                    <div className="cal-and-event">
                        <CalendarEvent></CalendarEvent><p>Fri Jun 2020</p>
                        &nbsp;  &nbsp;
                        <Tag></Tag><p>
                            Startup Business</p>
                    </div>
                    <div className="blog-content">
                        <div className="blog-content-head">
                            <h3>Was drawing natural fat respect husband</h3>
                        </div>
                        <div>
                            <p>Was drawing natural fat respect husband. An as noisy an offer drawn blush...</p>
                        </div>
                    </div>
                    <div className="blog-btn">
                        <button>Read More</button>
                    </div>
                </div>
                <div className="blog-div">
                    <div className="blog-img-div">
                        <img src={blog3} alt="" />
                    </div>
                    <div className="cal-and-event">
                        <CalendarEvent></CalendarEvent><p>Fri Jun 2020</p>
                        &nbsp;  &nbsp;
                        <Tag></Tag><p>
                            Startup Business</p>
                    </div>
                    <div className="blog-content">
                        <div className="blog-content-head">
                            <h3>In mr began music weeks after at begin</h3>
                        </div>
                        <div>
                            <p>Was drawing natural fat respect husband. An as noisy an offer drawn blush...</p>
                        </div>
                    </div>
                    <div className="blog-btn">
                        <button>Read More</button>
                    </div>
                </div>
                <div className="blog-div">
                    <div className="blog-img-div">
                        <img src={blog4} alt="" />
                    </div>
                    <div className="cal-and-event">
                        <CalendarEvent></CalendarEvent><p>Fri Jun 2020</p>
                        &nbsp;  &nbsp;
                        <Tag></Tag><p>
                            Startup Business</p>
                    </div>
                    <div className="blog-content">
                        <div className="blog-content-head">
                            <h3>Travelling every thing her eat simply</h3>
                        </div>
                        <div>
                            <p>Was drawing natural fat respect husband. An as noisy an offer drawn blush...</p>
                        </div>
                    </div>
                    <div className="blog-btn">
                        <button>Read More</button>
                    </div>
                </div>
                <div className="blog-div">
                    <div className="blog-img-div">
                        <img src={blog5} alt="" />
                    </div>
                    <div className="cal-and-event">
                        <CalendarEvent></CalendarEvent><p>Fri Jun 2020</p>
                        &nbsp;  &nbsp;
                        <Tag></Tag><p>
                            Startup Business</p>
                    </div>
                    <div className="blog-content">
                        <div className="blog-content-head">
                            <h3>These tried for way joy wrote witty</h3>
                        </div>
                        <div>
                            <p>Was drawing natural fat respect husband. An as noisy an offer drawn blush...</p>
                        </div>
                    </div>
                    <div className="blog-btn">
                        <button>Read More</button>
                    </div>
                </div>
                <div className="blog-div">
                    <div className="blog-img-div">
                        <img src={blog6} alt="" />
                    </div>
                    <div className="cal-and-event">
                        <CalendarEvent></CalendarEvent><p>Mon Jun 2020</p>
                        &nbsp;  &nbsp;
                            <Tag></Tag>
                            <p>Startup Business</p>
                    

                    </div>
                    <div className="blog-content" >
                        <div className="blog-content-head">
                            <h3>THEY SAY A PICTURE SPEAKS A THOUSAND WORDS, RIGHT?</h3>
                        </div>
                        <div>
                            <p>Was drawing natural fat respect husband. An as noisy an offer drawn blush...</p>
                        </div>
                    </div>
                    <div className="blog-btn">
                        <button>Read More</button>
                    </div>
                </div>
            </div>

<Footer></Footer>
        </>
    )
}