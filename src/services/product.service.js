import { read } from "./context.service"

const producturl="http://localhost:4001/product_details/"

export function getproduct(){
    return read(producturl)
}