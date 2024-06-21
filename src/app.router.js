import { Route, Routes } from "react-router-dom";
import { NavBar } from "./components/Navbar/navbar.component";
import { Footer } from "./components/footer/footer.component";
import { Main } from "./components/main/main.component";
import { Product } from "./components/Popular Products/popproduct.component";
import { About } from "./components/about/about.component";
import { ProductList } from "./components/productlist/productlist.component";
import { SignIn } from "./components/signin/signin.component";
import { SignUp } from "./components/signup/signup.component";
import { BlogGrid } from "./components/blog/blog.component";
import { Promo } from "./components/promo/promo.component";
import { OverView } from "./components/overview/overview.component";
import { Categories } from "./components/Categories/Categories.components";
import { Contact } from "./components/contact/contact.component";
import { TrackingOrder } from "./components/tracking/ordertracking.component";
import { Home } from "./components/home/home.component";
import { WishlistPage } from "./components/wishlist/wishlistpage.component";
import { Terms } from "./components/termsandconditions/terms.component";
import { Privacy } from "./components/privacy/privacy.component";

import { Poster } from "./components/poster/poster.component";
import { Dashboard } from "./components/dashboard/dashboard.component";
import { AddToCartPage } from "./components/cart/cart.component";
import { UpdateUser } from "./components/user Update/updateuser.component";
import { AddProduct } from "./components/Popular Products/addproduct.component";


export function AppRouter(){
    return(
       <Routes>
       <Route path="/" element={<Home></Home>}></Route>
       <Route path="/wishlist" element={<WishlistPage></WishlistPage>}></Route>
       <Route path="/product" element={<Product></Product>}></Route>
       <Route path="/contact" element={<Contact></Contact>}></Route>
       <Route path="/signin" element={<SignIn></SignIn>}></Route>
       <Route path="/signup" element={<SignUp></SignUp>}></Route>
       <Route path="/about" element={<About></About>}></Route>
       <Route path="/home" element={<Home></Home>}></Route>
       <Route path="/productlist" element={<ProductList></ProductList>}></Route>
       <Route path="/blog-grid" element={<BlogGrid></BlogGrid>}></Route>
       <Route path="/tracking" element={<TrackingOrder></TrackingOrder>}></Route>
       <Route path="/terms" element={<Terms></Terms>}></Route>
       <Route path="/privacy" element={<Privacy></Privacy>}></Route>
       <Route path="/userdashboard" element={<Dashboard></Dashboard>}></Route>
       <Route path="/cartpage" element={<AddToCartPage></AddToCartPage>}></Route>
       <Route path="/updateuser" element={<UpdateUser></UpdateUser>}></Route>
 
       <Route path="/poster" element={<Poster></Poster>}></Route>
       <Route path="/adding-product" element={<AddProduct></AddProduct>}></Route>
       </Routes>
    )
}