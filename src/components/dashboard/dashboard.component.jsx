import { Calendar3, Person } from "react-bootstrap-icons";

import"../dashboard/dashboard.component.css"
import { NavBar } from "../Navbar/navbar.component";
import { Footer } from "../footer/footer.component";
import { AuthRoute } from "../../services/auth.route";

export function Dashboard() {
    return (
        <AuthRoute>
     
            <div className="dash-head">
                <h1>User Dashboard</h1>

            </div>
            <div className="dash-first row">
                <div className="dash-user col">
                    <table className="dash-table">
                        <thead>
                            <tr>
                                <th>
                                <div className="dash-person" style={{background:"rgb(21, 107, 206)"}}>
                                    <div className="dash-person-first"><Person></Person></div>
                                    <div><p>person</p></div>
                                </div>
                                </th>
                           
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td style={{width:"200px",background:"#f7f7f7"}}>Dashboard</td>
                            </tr >
                            <tr>
                                <td style={{background:"#f7f7f7"}}>Edit Profile</td>
                            </tr>
                            <tr>
                                <td style={{background:"#f7f7f7"}}>Change Password</td>
                            </tr>
                            <tr>
                                <td style={{background:"#f7f7f7"}}>My Orders</td>
                            </tr>
                            <tr>
                                <td style={{background:"#f7f7f7"}}>Chat List</td>
                            </tr>
                            <tr>
                                <td style={{background:"#f7f7f7"}}>Refund Request</td>
                            </tr>
                            <tr>
                                <td style={{background:"#f7f7f7"}}>Wallet history</td>
                            </tr>
                            <tr>
                                <td style={{background:"#f7f7f7"}}>shipping Address</td>
                            </tr>
                            <tr>
                                <td style={{background:"#f7f7f7"}}>Support Ticket</td>
                            </tr>
                            <tr>
                                <td style={{background:"#f7f7f7"}}>Logout</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="dash-outer col" >
                    <div  >
                        <div className="dash-inner row">
                            <div className="dash-sub-inner col">
                                <div className="dash-calender"><Calendar3></Calendar3></div>
                                <div className="dash-tick">
                                    <h4>Total Orders</h4>
                                    <h1>0</h1>
                                </div>
                            </div>

                            <div className="dash-sub-inner col ">
                                <div  className="dash-calender"><Calendar3></Calendar3></div>
                                <div className="dash-tick">
                                    <h4 >Support Tickets</h4>
                                    <h1>4</h1>
                                </div>
                            </div>
                        </div>
                        <div></div>
                    </div>
                    <div className="dash-details col">
                        <table style={{width:"725px"}}>
                            <thead>
                                <tr>
                                    <th>
                                        Order</th>
                                    <th>Date</th>
                                    <th>Status	</th>
                                    <th>Amount</th>
                                    <th>Action</th>

                                </tr>
                            </thead>
                            <tbody>
                                <tr >
                                    <td style={{padding:"20px"}}>#569</td>
                                    <td style={{padding:"20px"}}>March 17, 2024</td>
                                    <td style={{padding:"20px"}}><button style={{background:"yellow",border:"none",borderRadius:"5px"}}>pending</button></td>
                                    <td  style={{padding:"20px"}}>$140.00</td>
                                    <td  style={{padding:"20px"}}> <button style={{background:" rgb(143, 142, 141)",border:"1px solid black",borderRadius:"5px"}}>View Details</button></td>
                                </tr>
                                <tr>
                                    <td  style={{padding:"20px"}}>#569</td>
                                    <td  style={{padding:"20px"}}>March 17, 2024</td>
                                    <td  style={{padding:"20px"}}><button style={{background:" yellow",border:"none",borderRadius:"5px"}}>pending</button></td>
                                    <td  style={{padding:"20px"}}>$140.00</td>
                                    <td  style={{padding:"20px"}}> <button style={{background:" rgb(143, 142, 141)",border:"1px solid black",borderRadius:"5px"}}>View Details</button></td>
                                </tr>
                                <tr>
                                    <td  style={{padding:"20px"}}>#569</td>
                                    <td  style={{padding:"20px"}}>March 17, 2024</td>
                                    <td  style={{padding:"20px"}}><button style={{background:"yellow",border:"none",borderRadius:"5px"}}>pending</button></td>
                                    <td  style={{padding:"20px"}}>$140.00</td>
                                    <td  style={{padding:"20px"}}> <button style={{background:" rgb(143, 142, 141)",border:"1px solid black",borderRadius:"5px"}}>View Details</button></td>
                                </tr>
                                <tr>
                                    <td  style={{padding:"20px"}}>#569</td>
                                    <td  style={{padding:"20px"}}>March 17, 2024</td>
                                    <td style={{padding:"20px"}}><button style={{background:" yellow",border:"none",borderRadius:"5px"}}>pending</button></td>
                                    <td style={{padding:"20px"}}>$140.00</td>
                                    <td style={{padding:"20px"}}> <button style={{background:" rgb(143, 142, 141)",border:"1px solid black",borderRadius:"5px"}}>View Details</button></td>
                                </tr>
                                <tr>
                                    <td style={{padding:"20px"}}>#569</td>
                                    <td style={{padding:"20px"}}>March 17, 2024</td>
                                    <td style={{padding:"20px"}}><button style={{background:" yellow",border:"none",borderRadius:"5px"}}>pending</button></td>
                                    <td style={{padding:"20px"}}>$140.00</td>
                                    <td style={{padding:"20px"}}> <button style={{background:" rgb(143, 142, 141)",border:"1px solid black",borderRadius:"5px"}}>View Details</button></td>
                                </tr>

                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </AuthRoute>
    )
}