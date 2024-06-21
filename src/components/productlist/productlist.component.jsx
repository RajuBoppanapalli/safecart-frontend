
import { Bag, Eye, Heart, Repeat } from "react-bootstrap-icons"
import "../productlist/productlist.component.css"
import product1 from "../../assets/images/product1.png"
import product2 from "../../assets/images/product2.webp"
import product3 from "../../assets/images/product3.webp"
import product4 from "../../assets/images/product4.png"
import { getproduct } from "../../services/product.service"
import { useEffect, useState } from "react"
import { NavBar } from "../Navbar/navbar.component"
import { Footer } from "../footer/footer.component"

export function ProductList() {
    //creating state variable for product
    const [ProductDetails, setProductDetails] = useState([]);
    //creating useEffect for product
    useEffect(() => {
        getproduct().then((res) => {
            setProductDetails(res.data)

        })

    }, []);


    const [openItems, setOpenItems] = useState({
        Electronics: false,
        Fashion: false,
    });

    const handleCategoryClick = (category) => {
        setOpenItems(prevState => ({
            ...prevState,
            [category]: !prevState[category]
        }));
    };

    const handleSubCategoryClick = (category, subcategory) => {
        setOpenItems(prevState => ({
            ...prevState,
            [category]: {
                ...prevState[category],
                [subcategory]: !prevState[category]?.[subcategory]
            }
        }));
    };

    return (
        <>
            
            <div className="productlist-head">
                <h1>Products</h1>
                <p>Shop Page</p>
            </div>

            <div className="pop-fill">
                <div className="pop-productlist row-4">

                    {
                        ProductDetails && ProductDetails.map((iteam) =>

                            <div className="products col-3">
                                <div className="productlist-div">
                                {
                                    iteam.productImage && <img src={iteam.productImage} alt="" />
                                }
                                {
                                    !iteam.productImage && <img src={product4} alt="" />
                                }
                                </div>
                                <div className="product-hover">
                                    <div><Bag></Bag></div>
                                    <div><Heart></Heart></div>
                                    <div><Repeat></Repeat></div>
                                    <div><Eye></Eye></div>
                                </div>
                                <div className="product-percents">{iteam.OfferPercent}%off</div>
                                <div className="data-price">

                                    <p>{iteam.productName}</p>
                                    <h4 className="stock">Stock Available({iteam.Stockavailable})</h4>
                                    <h5>${iteam.Newprice}  &nbsp;<del>${iteam.OldPrice}</del>
                                    </h5>
                                </div>

                            </div>
                        )}


                </div>

                <div className="cat">

                    <h4>Catagories</h4>
                     <ul>
                        <li onClick={() => handleCategoryClick('Electronics')}>Electrinic

                            {openItems['Electronics'] && (
                                <ul>
                                    <li onClick={(e) => e.stopPropagation()}>
                                        <span onClick={() => handleSubCategoryClick('Electronics', 'Smart Phones')}>Smart Phones</span>
                                        {openItems['Electronics']['Smart Phones'] && (
                                            <ul>
                                                <li>
                                                    <input type="checkbox" />Android Phones
                                                </li>
                                                <li>
                                                    <input type="checkbox" />iphones
                                                </li>
                                                <li>
                                                    <input type="checkbox" />Refurbished Phones
                                                </li>
                                                <li>
                                                    <input type="checkbox" />Gaming Phones
                                                </li>
                                                <li> <input type="checkbox" />Business Phones</li>
                                                <li><input type="checkbox" />Feature Phones</li>
                                                <li><input type="checkbox" />Rugged Phones</li>
                                            </ul>
                                        )}

                                    </li>
                                    <li onClick={(e) => e.stopPropagation()}>
                                        <span onClick={() => handleSubCategoryClick('Electronics', 'Laptops & Desktops')}>Laptops & Desktops</span>
                                        {openItems['Electronics']['Laptops & Desktops'] && (
                                            <ul>
                                                <li>
                                                    <input type="checkbox" />Ultrabooks
                                                </li>
                                                <li>
                                                    <input type="checkbox" />Gamming Laptops
                                                </li>
                                                <li>
                                                    <input type="checkbox" />Desktop PCs
                                                </li>
                                                <li>
                                                    <input type="checkbox" />MacBooks
                                                </li>
                                                <li> <input type="checkbox" />Workstations</li>
                                                <li><input type="checkbox" />chromebooks</li>
                                                <li><input type="checkbox" />All-in-One PCs</li>
                                            </ul>
                                        )}
                                    </li>
                                    <li onClick={(e) => e.stopPropagation()}>
                                        <span onClick={() => handleSubCategoryClick('Electronics', 'Audio Device')}>Audio Device</span>
                                        {openItems['Electronics']['Audio Device'] && (
                                            <ul>
                                                <li>
                                                    <input type="checkbox" />Headphones
                                                </li>
                                                <li>
                                                    <input type="checkbox" />Earbuds
                                                </li>
                                                <li>
                                                    <input type="checkbox" />Bluetooth Speakers
                                                </li>
                                                <li>
                                                    <input type="checkbox" />Soundbars
                                                </li>
                                                <li> <input type="checkbox" />Microphones</li>
                                                <li><input type="checkbox" />Turntables</li>
                                                <li><input type="checkbox" />Portable MP3 Players</li>
                                            </ul>
                                        )}
                                    </li>
                                    <li onClick={(e) => e.stopPropagation()}>
                                        <span onClick={() => handleSubCategoryClick('Electronics', 'Camera & Drones')}>Camera & Drones</span>
                                        {openItems['Electronics']['Camera & Drones'] && (
                                            <ul>
                                                <li>
                                                    <input type="checkbox" />DSLR Cameras
                                                </li>
                                                <li>
                                                    <input type="checkbox" />Mirrirless Cameras
                                                </li>
                                                <li>
                                                    <input type="checkbox" />Compact Cameras
                                                </li>
                                                <li>
                                                    <input type="checkbox" />Drones
                                                </li>
                                                <li> <input type="checkbox" />Action Cameras</li>
                                                <li><input type="checkbox" />Camcoders</li>
                                                <li><input type="checkbox" />360 Cameras</li>
                                            </ul>
                                        )}
                                    </li>
                                    <li onClick={(e) => e.stopPropagation()}>
                                        <span onClick={() => handleSubCategoryClick('Electronics', 'Smartwatches & wearables')}>Smartwatches & wearables</span>
                                        {openItems['Electronics']['Smartwatches & wearables'] && (


                                            <ul>
                                                <li>
                                                    <input type="checkbox" />Fitness Trackers
                                                </li>
                                                <li>
                                                    <input type="checkbox" />Smartwatches for Android
                                                </li>
                                                <li>
                                                    <input type="checkbox" />Apple Watch
                                                </li>
                                                <li>
                                                    <input type="checkbox" />Kids' Smartwatches
                                                </li>
                                                <li> <input type="checkbox" />Sport watch</li>
                                                <li><input type="checkbox" />Classic Design</li>
                                                <li><input type="checkbox" />Smart Glasses</li>
                                            </ul>
                                        )}
                                    </li>
                                </ul>
                            )}
                        </li>

                        <li onClick={() => handleCategoryClick('Fashion')}>Fashion

                            {openItems['Fashion'] && (

                                <ul>
                                    <li onClick={(e) => e.stopPropagation()}>
                                        <span onClick={() => handleSubCategoryClick('Fashion', 'Mens Clothing')}>Men's Clothing</span>
                                        {openItems['Fashion']['Mens Clothing'] && (

                                            <ul>
                                                <li>
                                                    <input type="checkbox" />T-shirts
                                                </li>
                                                <li>
                                                    <input type="checkbox" />Suits & Blazers
                                                </li>
                                                <li>
                                                    <input type="checkbox" />Casial Shirts
                                                </li>
                                                <li>
                                                    <input type="checkbox" />Jeans
                                                </li>
                                                <li> <input type="checkbox" />Shorts</li>
                                                <li><input type="checkbox" />Outerwear</li>
                                                <li><input type="checkbox" />Sportwear</li>
                                            </ul>
                                        )}
                                    </li>

                                    <li onClick={(e) => e.stopPropagation()}>
                                        <span onClick={() => handleSubCategoryClick('Fashion', 'Womens Clothing')}>Women's Clothing</span>
                                        {openItems['Fashion']['Womens Clothing'] && (

                                            <ul>
                                                <li>
                                                    <input type="checkbox" />Dresses
                                                </li>
                                                <li>
                                                    <input type="checkbox" />Blouses & Shirts
                                                </li>
                                                <li>
                                                    <input type="checkbox" />Leggins
                                                </li>
                                                <li>
                                                    <input type="checkbox" />Skirts
                                                </li>
                                                <li> <input type="checkbox" />Ligerie</li>
                                                <li><input type="checkbox" />Outerwear</li>
                                                <li><input type="checkbox" />Maternity Clothes</li>
                                            </ul>
                                        )}
                                    </li>
                                    <li onClick={(e) => e.stopPropagation()}>
                                        <span onClick={() => handleSubCategoryClick('Fashion', 'Footwear')}>Footwear</span>
                                        {openItems['Fashion']['Footwear'] && (

                                            <ul>
                                                <li>
                                                    <input type="checkbox" />Sneakers
                                                </li>
                                                <li>
                                                    <input type="checkbox" />Formal Shoes
                                                </li>
                                                <li>
                                                    <input type="checkbox" />Sandals & Flip Flops
                                                </li>
                                                <li>
                                                    <input type="checkbox" />Heels
                                                </li>
                                                <li> <input type="checkbox" />Boots</li>
                                                <li><input type="checkbox" />Sports Shoes</li>
                                                <li><input type="checkbox" />Loafers</li>
                                            </ul>
                                        )}
                                    </li>

                                    <li onClick={(e) => e.stopPropagation()}>
                                        <span onClick={() => handleSubCategoryClick('Fashion', 'Handbags & Wallets')}>Handbags & Wallets</span>
                                        {openItems['Fashion']['Handbags & Wallets'] && (

                                            <ul>
                                                <li>
                                                    <input type="checkbox" />Totes
                                                </li>
                                                <li>
                                                    <input type="checkbox" />Backpacks
                                                </li>
                                                <li>
                                                    <input type="checkbox" />Satchels
                                                </li>
                                                <li>
                                                    <input type="checkbox" />Wallets
                                                </li>
                                                <li> <input type="checkbox" />clutches</li>
                                                <li><input type="checkbox" />crossbody Bags</li>
                                                <li><input type="checkbox" />Luggage & Travel</li>
                                            </ul>
                                        )}
                                    </li>

                                </ul>
                            )}
                        </li>

                        <li onClick={() => handleCategoryClick('Home & Living')}>Home & Living

                            {openItems['Home & Living'] && (


                                <ul>
                                    <li onClick={(e) => e.stopPropagation()}>
                                        <span onClick={() => handleSubCategoryClick('Home & Living', 'Furniture')}>Furniture</span>
                                        {openItems['Home & Living']['Furniture'] && (

                                            <ul>
                                                <li>
                                                    <input type="checkbox" />Sofas & Couches
                                                </li>
                                                <li>
                                                    <input type="checkbox" />Bed Farmes & Sets
                                                </li>
                                                <li>
                                                    <input type="checkbox" />Dining tables & Chairs
                                                </li>
                                                <li>
                                                    <input type="checkbox" />Wardrobes
                                                </li>
                                                <li> <input type="checkbox" />Outdoor Furniture</li>
                                                <li><input type="checkbox" />Coffee Tables</li>
                                                <li><input type="checkbox" />Office Furniture</li>
                                            </ul>
                                        )}
                                    </li>
                                    <li onClick={(e) => e.stopPropagation()}>
                                        <span onClick={() => handleSubCategoryClick('Home & Living', 'Home Decor')}>Home Decor</span>
                                        {openItems['Home & Living']['Home Decor'] && (

                                            <ul>
                                                <li>
                                                    <input type="checkbox" />Wall Art
                                                </li>
                                                <li>
                                                    <input type="checkbox" />Clocks
                                                </li>
                                                <li>
                                                    <input type="checkbox" />Vases & Pots
                                                </li>
                                                <li>
                                                    <input type="checkbox" />Mirrors
                                                </li>
                                                <li> <input type="checkbox" />Rugs & Carpets</li>
                                                <li><input type="checkbox" />Candles & Holders</li>
                                                <li><input type="checkbox" />Photo Frames</li>
                                            </ul>
                                        )}
                                    </li>

                                    <li onClick={(e) => e.stopPropagation()}>
                                        <span onClick={() => handleSubCategoryClick('Home & Living', 'Kichen & Dining')}>Kichen & Dining</span>
                                        {openItems['Home & Living']['Kichen & Dining'] && (

                                            <ul>
                                                <li>
                                                    <input type="checkbox" />Cookware
                                                </li>
                                                <li>
                                                    <input type="checkbox" />Tableware
                                                </li>
                                                <li>
                                                    <input type="checkbox" />Bakeware
                                                </li>
                                                <li>
                                                    <input type="checkbox" />Utensils & Gadgets
                                                </li>
                                                <li> <input type="checkbox" />Coffee & Tea sets</li>
                                                <li><input type="checkbox" />Storage & Organization</li>
                                                <li><input type="checkbox" />Dinnerware</li>
                                            </ul>
                                        )}
                                    </li>

                                </ul>
                            )}
                        </li>
                        <li onClick={() => handleCategoryClick('Garden &Outdoors')}>Garden &Outdoors

                            {openItems['Garden &Outdoors'] && (

                                <ul>
                                    <li onClick={(e) => e.stopPropagation()}>
                                        <span onClick={() => handleSubCategoryClick('Garden &Outdoors', 'Gardening')}>Gardening</span>
                                        {openItems['Garden &Outdoors']['Gardening'] && (

                                            <ul>
                                                <li>
                                                    <input type="checkbox" />PlantSeeds
                                                </li>
                                                <li>
                                                    <input type="checkbox" />Gardening Tools
                                                </li>
                                                <li>
                                                    <input type="checkbox" />Plant Containers
                                                </li>
                                                <li>
                                                    <input type="checkbox" />Fatilizers
                                                </li>
                                                <li> <input type="checkbox" />Pesticides</li>
                                                <li><input type="checkbox" />Flowering Plant</li>
                                                <li><input type="checkbox" />Omamental Plants</li>
                                            </ul>
                                        )}
                                    </li>
                                    <li onClick={(e) => e.stopPropagation()}>
                                        <span onClick={() => handleSubCategoryClick('Garden &Outdoors', 'Outdoor Furniture')}>Outdoor Furniture</span>
                                        {openItems['Garden &Outdoors']['Outdoor Furniture'] && (


                                            <ul>
                                                <li>
                                                    <input type="checkbox" />Garden Benches
                                                </li>
                                                <li>
                                                    <input type="checkbox" />Swing Chairs
                                                </li>
                                                <li>
                                                    <input type="checkbox" />Hammocks
                                                </li>
                                                <li>
                                                    <input type="checkbox" />Picnic Tables
                                                </li>
                                                <li> <input type="checkbox" />Outdoor Umbrellas</li>
                                                <li><input type="checkbox" />Rettan Furniture</li>
                                                <li><input type="checkbox" />Deck Chairs</li>
                                            </ul>
                                        )}
                                    </li>

                                    <li onClick={(e) => e.stopPropagation()}>
                                        <span onClick={() => handleSubCategoryClick('Garden &Outdoors', 'BBQ & Outdoor Cooking')}>BBQ & Outdoor Cooking</span>
                                        {openItems['Garden &Outdoors']['BBQ & Outdoor Cooking'] && (



                                            <ul>
                                                <li>
                                                    <input type="checkbox" />Charcoal Grills
                                                </li>
                                                <li>
                                                    <input type="checkbox" />gas Grills
                                                </li>
                                                <li>
                                                    <input type="checkbox" />BBQ Tools
                                                </li>
                                                <li>
                                                    <input type="checkbox" />Fire Pits
                                                </li>
                                                <li> <input type="checkbox" />Outdoor Oveans</li>
                                                <li><input type="checkbox" />Grills Covers</li>
                                                <li><input type="checkbox" />Smokers</li>
                                            </ul>
                                        )}
                                    </li>

                                    <li onClick={(e) => e.stopPropagation()}>
                                        <span onClick={() => handleSubCategoryClick('Garden &Outdoors', 'OutDoor Decor')}>OutDoor Decor</span>
                                        {openItems['Garden &Outdoors']['OutDoor Decor'] && (


                                            <ul>
                                                <li>
                                                    <input type="checkbox" />Garden Statues
                                                </li>
                                                <li>
                                                    <input type="checkbox" />Wind Chimes
                                                </li>
                                                <li>
                                                    <input type="checkbox" />Fountains
                                                </li>
                                                <li>
                                                    <input type="checkbox" />Brid Baths
                                                </li>
                                                <li> <input type="checkbox" />Decorative Stones</li>
                                                <li><input type="checkbox" />Solar Lights</li>
                                                <li><input type="checkbox" />Flags & Banners</li>
                                            </ul>
                                        )}
                                    </li>

                                </ul>
                            )}

                        </li>

                        <li onClick={() => handleCategoryClick('Sports & Fitness')}>Sports & Fitness

                            {openItems['Sports & Fitness'] && (

                                <ul>
                                    <li onClick={(e) => e.stopPropagation()}>
                                        <span onClick={() => handleSubCategoryClick('Sports & Fitness', 'Team Sports')}>Team Sports</span>
                                        {openItems['Sports & Fitness']['Team Sports'] && (

                                            <ul>
                                                <li>
                                                    <input type="checkbox" />Football
                                                </li>
                                                <li>
                                                    <input type="checkbox" />Basketball
                                                </li>
                                                <li>
                                                    <input type="checkbox" />volleyball
                                                </li>
                                                <li>
                                                    <input type="checkbox" />Baseball
                                                </li>
                                                <li> <input type="checkbox" />Hockey</li>
                                                <li><input type="checkbox" />Cricket</li>
                                                <li><input type="checkbox" />Rugby</li>
                                            </ul>
                                        )}
                                    </li>
                                    <li onClick={(e) => e.stopPropagation()}>
                                        <span onClick={() => handleSubCategoryClick('Sports & Fitness', 'Fitness Equipment')}>Fitness Equipment</span>
                                        {openItems['Sports & Fitness']['Fitness Equipment'] && (


                                            <ul>
                                                <li>
                                                    <input type="checkbox" />Treadmills
                                                </li>
                                                <li>
                                                    <input type="checkbox" />Weights
                                                </li>
                                                <li>
                                                    <input type="checkbox" />Resistance Bands
                                                </li>
                                                <li>
                                                    <input type="checkbox" />Yoga Marks
                                                </li>
                                                <li> <input type="checkbox" />Ellipticals</li>
                                                <li><input type="checkbox" />Excercise Bikes</li>
                                                <li><input type="checkbox" />Rowing Machines</li>
                                            </ul>
                                        )}
                                    </li>
                                    <li onClick={(e) => e.stopPropagation()}>
                                        <span onClick={() => handleSubCategoryClick('Sports & Fitness', 'Water Sports')}>Water Sports</span>
                                        {openItems['Sports & Fitness']['Water Sports'] && (
                                            <ul>
                                                <li>
                                                    <input type="checkbox" />Swimming
                                                </li>
                                                <li>
                                                    <input type="checkbox" />Diving
                                                </li>
                                                <li>
                                                    <input type="checkbox" />Kayaking
                                                </li>
                                                <li>
                                                    <input type="checkbox" />Surfing
                                                </li>
                                                <li> <input type="checkbox" />Fishing</li>
                                                <li><input type="checkbox" />Snorkeling</li>
                                                <li><input type="checkbox" />Water Skiing</li>
                                            </ul>
                                        )}
                                    </li>
                                    <li onClick={(e) => e.stopPropagation()}>
                                        <span onClick={() => handleSubCategoryClick('Sports & Fitness', 'Camping & Hiking')}>Camping & Hiking</span>
                                        {openItems['Sports & Fitness']['Camping & Hiking'] && (

                                            <ul>
                                                <li>
                                                    <input type="checkbox" />Tents
                                                </li>
                                                <li>
                                                    <input type="checkbox" />Sleeping Bags
                                                </li>
                                                <li>
                                                    <input type="checkbox" />Camping Cookware
                                                </li>
                                                <li>
                                                    <input type="checkbox" />Hiking Boots
                                                </li>
                                                <li> <input type="checkbox" />Backpacks</li>
                                                <li><input type="checkbox" />Navigation Tools</li>
                                                <li><input type="checkbox" />Camping Furniture</li>
                                            </ul>
                                        )}
                                    </li>

                                </ul>
                            )}
                        </li>
                        <li onClick={() => handleCategoryClick('Persnalcare & Beuaty')}>Persnalcare & Beuaty

                            {openItems['Persnalcare & Beuaty'] && (

                                <ul>
                                    <li onClick={(e) => e.stopPropagation()}>
                                        <span onClick={() => handleSubCategoryClick('Persnalcare & Beuaty', 'Hair Care')}>Hair Care</span>
                                        {openItems['Persnalcare & Beuaty']['Hair Care'] && (

                                            <ul>
                                                <li>
                                                    <input type="checkbox" />Shampoos
                                                </li>
                                                <li>
                                                    <input type="checkbox" />Conditioners
                                                </li>
                                                <li>
                                                    <input type="checkbox" />Hair Oils
                                                </li>
                                                <li>
                                                    <input type="checkbox" />Hair Colors
                                                </li>
                                                <li> <input type="checkbox" />Stylings Tools</li>
                                                <li><input type="checkbox" />Hair Masks</li>
                                                <li><input type="checkbox" />Hair Brushes</li>
                                            </ul>
                                        )}
                                    </li>
                                    <li onClick={(e) => e.stopPropagation()}>
                                        <span onClick={() => handleSubCategoryClick('Persnalcare & Beuaty', 'Skin Care')}>Skin Care</span>
                                        {openItems['Persnalcare & Beuaty']['Skin Care'] && (


                                            <ul>
                                                <li>
                                                    <input type="checkbox" />Moisturizers
                                                </li>
                                                <li>
                                                    <input type="checkbox" />Face Masks
                                                </li>
                                                <li>
                                                    <input type="checkbox" />Cleansers
                                                </li>
                                                <li>
                                                    <input type="checkbox" />SunScreens
                                                </li>
                                                <li> <input type="checkbox" />Serums</li>
                                                <li><input type="checkbox" />Exfoliators</li>
                                                <li><input type="checkbox" />Eye Cream</li>
                                            </ul>
                                        )}
                                    </li>
                                    <li onClick={(e) => e.stopPropagation()}>
                                        <span onClick={() => handleSubCategoryClick('Persnalcare & Beuaty', 'MakeUp')}>MakeUp</span>
                                        {openItems['Persnalcare & MakeUp']['MakeUp'] && (


                                            <ul>
                                                <li>
                                                    <input type="checkbox" />Foundations
                                                </li>
                                                <li>
                                                    <input type="checkbox" />Lipsticks
                                                </li>
                                                <li>
                                                    <input type="checkbox" />Eyeliners
                                                </li>
                                                <li>
                                                    <input type="checkbox" />Mascaras
                                                </li>
                                                <li> <input type="checkbox" />Blushes</li>
                                                <li><input type="checkbox" />Eyeshadows</li>
                                                <li><input type="checkbox" />Makeup Removers</li>
                                            </ul>
                                        )}
                                    </li>
                                    <li onClick={(e) => e.stopPropagation()}>
                                        <span onClick={() => handleSubCategoryClick('Persnalcare & Beuaty', 'Mens Grooming')}>Men's Grooming</span>
                                        {openItems['Persnalcare & MakeUp']['Mens Grooming'] && (

                                            <ul>
                                                <li>
                                                    <input type="checkbox" />Shaving Creams
                                                </li>
                                                <li>
                                                    <input type="checkbox" />Aftershaves
                                                </li>
                                                <li>
                                                    <input type="checkbox" />Beard Oils
                                                </li>
                                                <li>
                                                    <input type="checkbox" />Trimmers
                                                </li>
                                                <li> <input type="checkbox" />Face Washes</li>
                                                <li><input type="checkbox" />Body Washes</li>
                                                <li><input type="checkbox" />Decodorants</li>
                                            </ul>
                                        )}
                                    </li>

                                </ul>
                            )}
                        </li>

                        <li onClick={() => handleCategoryClick('Kids and Babies')}>Kids and Babies

                            {openItems['Kids and Babies'] && (


                                <ul>
                                    <li onClick={(e) => e.stopPropagation()}>
                                        <span onClick={() => handleSubCategoryClick('Kids and Babies', 'Clothing')}>Clothing</span>
                                        {openItems['Kids and Babies']['Clothing'] && (
                                            <ul>
                                                <li>
                                                    <input type="checkbox" />Infant Wear
                                                </li>
                                                <li>
                                                    <input type="checkbox" />Dresses
                                                </li>
                                                <li>
                                                    <input type="checkbox" />T-shirts
                                                </li>
                                                <li>
                                                    <input type="checkbox" />School Uniforms
                                                </li>
                                                <li> <input type="checkbox" />Sleepwear</li>
                                                <li><input type="checkbox" />FootWear</li>
                                                <li><input type="checkbox" />Accessories</li>
                                            </ul>
                                        )}
                                    </li>
                                    <li onClick={(e) => e.stopPropagation()}>
                                        <span onClick={() => handleSubCategoryClick('Kids and Babies', 'Toys')}>Toys</span>
                                        {openItems['Kids and Babies']['Toys'] && (

                                            <ul>
                                                <li>
                                                    <input type="checkbox" />Educational Toys
                                                </li>
                                                <li>
                                                    <input type="checkbox" />Soft Toys
                                                </li>
                                                <li>
                                                    <input type="checkbox" />Board Games
                                                </li>
                                                <li>
                                                    <input type="checkbox" />Action Figures
                                                </li>
                                                <li> <input type="checkbox" />Puzzles</li>
                                                <li><input type="checkbox" />Remote Control Toys</li>
                                                <li><input type="checkbox" />Craft Kits</li>
                                            </ul>
                                        )}
                                    </li>
                                    <li onClick={(e) => e.stopPropagation()}>
                                        <span onClick={() => handleSubCategoryClick('Kids and Babies', 'Baby Care')}>Baby Care</span>
                                        {openItems['Kids and Babies']['Baby Care'] && (

                                            <ul>
                                                <li>
                                                    <input type="checkbox" />Diapers
                                                </li>
                                                <li>
                                                    <input type="checkbox" />Baby Food
                                                </li>
                                                <li>
                                                    <input type="checkbox" />Feeding Bootles
                                                </li>
                                                <li>
                                                    <input type="checkbox" />Baby Wipes
                                                </li>
                                                <li> <input type="checkbox" />Stollers</li>
                                                <li><input type="checkbox" />Car Seats</li>
                                                <li><input type="checkbox" />High Chairs</li>
                                            </ul>
                                        )}
                                    </li>

                                    <li onClick={(e) => e.stopPropagation()}>
                                        <span onClick={() => handleSubCategoryClick('Kids and Babies', 'School Supplies')}>School Supplies</span>
                                        {openItems['Kids and Babies']['School Supplies'] && (
                                            <ul>
                                                <li>
                                                    <input type="checkbox" />Backpacks
                                                </li>
                                                <li>
                                                    <input type="checkbox" />Stationery
                                                </li>
                                                <li>
                                                    <input type="checkbox" />Lunch Boxes
                                                </li>
                                                <li>
                                                    <input type="checkbox" />School Kit
                                                </li>
                                                <li> <input type="checkbox" />Notebooks</li>
                                                <li><input type="checkbox" />Art Supllies</li>
                                                <li><input type="checkbox" />Calculators</li>
                                            </ul>
                                        )}
                                    </li>

                                </ul>
                            )}
                        </li>
                        <li onClick={() => handleCategoryClick('Music & Instruments')}>Music & Instruments

                            {openItems['Music & Instruments'] && (

                                <ul>
                                    <li onClick={(e) => e.stopPropagation()}>
                                        <span onClick={() => handleSubCategoryClick('Music & Instruments', 'String Instruments')}>String Instruments</span>
                                        {openItems['Music & Instruments']['String Instruments'] && (

                                            <ul>
                                                <li>
                                                    <input type="checkbox" />Guitars
                                                </li>
                                                <li>
                                                    <input type="checkbox" />Violins
                                                </li>
                                                <li>
                                                    <input type="checkbox" />Ukuleles
                                                </li>
                                                <li>
                                                    <input type="checkbox" />Cellos
                                                </li>
                                                <li> <input type="checkbox" />Harps</li>
                                                <li><input type="checkbox" />Banjos</li>
                                                <li><input type="checkbox" />Mandolins</li>
                                            </ul>
                                        )}
                                    </li>
                                    <li onClick={(e) => e.stopPropagation()}>
                                        <span onClick={() => handleSubCategoryClick('Music & Instruments', 'percussion')}>percussion</span>
                                        {openItems['Music & Instruments']['percussion'] && (

                                            <ul>
                                                <li>
                                                    <input type="checkbox" />Drums
                                                </li>
                                                <li>
                                                    <input type="checkbox" />Cymbals
                                                </li>
                                                <li>
                                                    <input type="checkbox" />Tambourines
                                                </li>
                                                <li>
                                                    <input type="checkbox" />Congas
                                                </li>
                                                <li> <input type="checkbox" />Bongos</li>
                                                <li><input type="checkbox" />Maracas</li>
                                                <li><input type="checkbox" />Timpani</li>
                                            </ul>
                                        )}
                                    </li>
                                    <li onClick={(e) => e.stopPropagation()}>
                                        <span onClick={() => handleSubCategoryClick('Music & Instruments', 'Wind Instruments')}>Wind Instruments</span>
                                        {openItems['Music & Instruments']['Wind Instruments'] && (

                                            <ul>
                                                <li>
                                                    <input type="checkbox" />Flutes
                                                </li>
                                                <li>
                                                    <input type="checkbox" />Clarinets
                                                </li>
                                                <li>
                                                    <input type="checkbox" />Saxophones
                                                </li>
                                                <li>
                                                    <input type="checkbox" />Trumpets
                                                </li>
                                                <li> <input type="checkbox" />Harmonicas</li>
                                                <li><input type="checkbox" />Bagpipes</li>
                                                <li><input type="checkbox" />Oboes</li>
                                            </ul>
                                        )}
                                    </li>
                                    <li onClick={(e) => e.stopPropagation()}>
                                        <span onClick={() => handleSubCategoryClick('Music & Instruments', 'Keyboard & Pianos')}>Keyboard & Pianos</span>
                                        {openItems['Music & Instruments']['Keyboard & Pianos'] && (

                                            <ul>
                                                <li>
                                                    <input type="checkbox" />Electroinc Keyboards
                                                </li>
                                                <li>
                                                    <input type="checkbox" />Grand Pianos
                                                </li>
                                                <li>
                                                    <input type="checkbox" />Organs
                                                </li>
                                                <li>
                                                    <input type="checkbox" />Synthesizers
                                                </li>
                                                <li> <input type="checkbox" />Harpischords</li>
                                                <li><input type="checkbox" />Accordin</li>
                                                <li><input type="checkbox" />Midi Controllers</li>
                                            </ul>
                                        )}
                                    </li>

                                </ul>
                            )}
                        </li>

                        <li onClick={() => handleCategoryClick('Automotive & vehicles')}>Automotive & vehicles

                            {openItems['Automotive & vehicles'] && (



                                <ul>
                                    <li onClick={(e) => e.stopPropagation()}>
                                        <span onClick={() => handleSubCategoryClick('Automotive & vehicles', 'Car parts & Accessories')}>Car parts & Accessories</span>
                                        {openItems['Automotive & vehicles']['Car parts & Accessories'] && (


                                            <ul>
                                                <li>
                                                    <input type="checkbox" />Engine Components
                                                </li>
                                                <li>
                                                    <input type="checkbox" />Brakes
                                                </li>
                                                <li>
                                                    <input type="checkbox" />Suspensions
                                                </li>
                                                <li>
                                                    <input type="checkbox" />Lighting
                                                </li>
                                                <li> <input type="checkbox" />Audio & Electronics</li>
                                                <li><input type="checkbox" />Exterior Accessories</li>
                                                <li><input type="checkbox" />Interiors Accessories</li>
                                            </ul>
                                        )}
                                    </li>
                                    <li onClick={(e) => e.stopPropagation()}>
                                        <span onClick={() => handleSubCategoryClick('Automotive & vehicles', 'Motorcycles & Scooters')}>Motorcycles & Scooters</span>
                                        {openItems['Automotive & vehicles']['Motorcycles & Scooters'] && (


                                            <ul>
                                                <li>
                                                    <input type="checkbox" />Strees Bikes
                                                </li>
                                                <li>
                                                    <input type="checkbox" />Cruisers
                                                </li>
                                                <li>
                                                    <input type="checkbox" />Off-Road
                                                </li>
                                                <li>
                                                    <input type="checkbox" />Electronic Scooters
                                                </li>
                                                <li> <input type="checkbox" />Touring</li>
                                                <li><input type="checkbox" />Oarts & Accessories</li>
                                                <li><input type="checkbox" />Riding Gear</li>
                                            </ul>
                                        )}
                                    </li>
                                    <li onClick={(e) => e.stopPropagation()}>
                                        <span onClick={() => handleSubCategoryClick('Automotive & vehicles', 'RVs Campers')}>RVs Campers</span>
                                        {openItems['Automotive & vehicles']['RVs Campers'] && (


                                            <ul>
                                                <li>
                                                    <input type="checkbox" />Class A MotorHomes
                                                </li>
                                                <li>
                                                    <input type="checkbox" />Travel Traillers
                                                </li>
                                                <li>
                                                    <input type="checkbox" />Camper Vans
                                                </li>
                                                <li>
                                                    <input type="checkbox" />Fifth Wheel
                                                </li>
                                                <li> <input type="checkbox" />Toy Haulers</li>
                                                <li><input type="checkbox" />Pop-Up-Campers</li>
                                                <li><input type="checkbox" />Truck Campers</li>
                                            </ul>
                                        )}
                                    </li>
                                    <li onClick={(e) => e.stopPropagation()}>
                                        <span onClick={() => handleSubCategoryClick('Automotive & vehicles', 'Boats & Watercraft')}>Boats & Watercraft</span>
                                        {openItems['Automotive & vehicles']['Boats & Watercraft'] && (


                                            <ul>
                                                <li>
                                                    <input type="checkbox" />Sailboats
                                                </li>
                                                <li>
                                                    <input type="checkbox" />Motorboats
                                                </li>
                                                <li>
                                                    <input type="checkbox" />Yachts
                                                </li>
                                                <li>
                                                    <input type="checkbox" />Fishing Boat
                                                </li>
                                                <li> <input type="checkbox" />Jet Skis</li>
                                                <li><input type="checkbox" />Kayaks &  Canoes</li>
                                                <li><input type="checkbox" />Boat Parts & Accessories</li>
                                            </ul>
                                        )}
                                    </li>

                                </ul>
                            )}
                        </li>
                    </ul>
                </div>

            </div>


            {/* ................................................................................ */}

            <Footer></Footer>

        </>
    )
}