import { Route, Routes } from "react-router-dom";
import { NavBar } from "../Navbar/navbar.component";
import { Main } from "../main/main.component";
import { Product } from "../Popular Products/popproduct.component";
import { Categories } from "../Categories/Categories.components";
import { OverView } from "../overview/overview.component";
import { Promo } from "../promo/promo.component";
import { Footer } from "../footer/footer.component";
import { TrendProduct } from "../trending/trendproducts.component";
import { Poster } from "../poster/poster.component";
import { BoldSale } from "../boldsale/boldsale.component";


export function Home(){
    return(
        <>
        
         <Main></Main>
         <Product></Product>
         <Categories></Categories>
         <OverView></OverView>
         <TrendProduct></TrendProduct>
         <Poster></Poster>
         <BoldSale></BoldSale>
         <Promo></Promo>
        <Footer></Footer>

        </>
    )
}