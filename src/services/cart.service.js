import { read } from "./context.service";

let carturl="http://localhost:4001/getcartdata"
export function  getcartdata(){
    return(
        read(carturl)
    )
  
}