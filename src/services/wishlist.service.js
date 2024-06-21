import { deleteitem, read } from "./context.service";


let wishlisturl="http://localhost:4001/wishlistdata" 
let deleturl="http://localhost:4001/wishlist/del/:id"

export function getwishlist(){
    return(
        read(wishlisturl)
    )
}
export function deletwishlist(){
    return(
        deleteitem(deleturl)
    )
}