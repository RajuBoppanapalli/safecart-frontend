import { read } from "./context.service"


let userurl="http://localhost:4001/userslist/"
export function getusers(){
    return(
     read(userurl)   
    )
}