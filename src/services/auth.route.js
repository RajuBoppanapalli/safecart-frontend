
import { Navigate } from "react-router-dom";
import { getLocalStorageItem } from "./storage/local.storage";

export function AuthRoute(props){
    
 let uservalid=false;

  uservalid=getLocalStorageItem("userdata");
 
   
    if(uservalid){
        
      return props.children;

    }
    else{
      return <Navigate to="/signin"></Navigate>
        
    }
    
}

