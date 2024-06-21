import React from "react"
import "../signup/signup.component.css"

import { Footer } from "../footer/footer.component"
import { useForm } from "react-hook-form";


export function SignUp() {

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();


    return (
        <>
           
            <div className="signup-head">
                <h1>Register</h1>
            </div>

            <div className="signup-page">
                <h3>Create Account</h3>
                <form method="post" id="regform" action="http://localhost:4001/saveuser" onSubmit={handleSubmit(()=>document.getElementById("regform").submit())} >

                    <div className="form-group">
                       <input type="text" placeholder="user name" name="user_name" {...register("user_name",{required:true,minLength:3,maxLength:40})} />
                       {
                        errors.user_name && errors.user_name.type==="required"?<span style={{color:"red"}}>please enter your name</span>:
                        errors.user_name && errors.user_name.type==="minLength"?<span style={{color:"red"}}>please enter atleast three characters</span>:
                        errors.user_name && errors.user_name.type==="maxLength"?<span style={{color:"red"} } >this field accepts only 40 characters</span>:""
                        
                       }
                    </div>
                    <br />
                    <div className="form-group">
                        <input type="tel" placeholder="Phone Number" name="phoneNumber" {...register("phoneNumber", { required: true,maxLength:10 })} />
                        {
                            errors.phoneNumber && errors.phoneNumber.type==="required"? <span style={{ color: "red" }}>Please enter  phone number</span> : 
                            errors.phoneNumber && errors.phoneNumber.type==="maxLength"?<span style={{ color: "red" }}>this field accepts only 10 Digits</span> : ""
                        }

                    </div><br />
                    <div className="form-group">
                        <input type="email" placeholder="Email" name="email" {...register('email', { required: true, pattern:{value:/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,message:"email Format should be 'name@domain.com'"} })} />

                        {
                            errors.email && errors.email.type==="required" ?<span style={{color:"red"}}>please  enter your email</span>:
                            errors.email && errors.email.message ? <span style={{color:"red"}}>{errors.email.message}</span>:""
                        }
                    </div><br />
                    <div className="form-group">
                        <input type="text" placeholder="country" name="country" {...register("country", { required: true })} />
                        {
                            errors && errors.country ? <span style={{ color: "red" }}>please enter country field</span> : ""
                        }
                    </div><br />
                    <div className="form-group">
                        <input type="password" placeholder="password" name="password" {...register("password", { required: true  })}/>
                        {
                           errors.password && errors.password.type==="required"?<span style={{color:"red"} } > please required your password</span>:
                           errors.password && errors.password.message?<span style={{color:"red"} } > {errors.password.message}</span>:""
                        }
                    </div><br />
                    <div className="form-group">
                        <input type="password" placeholder="conform password" />
                    </div><br />
                    <div className="">

                        <input type="checkbox" />
                        <label htmlFor="">Accept all Terms and Conditions & Privacy Policy" </label>
                    </div><br />
                    <div className="form-group">
                        <button className="btn">Signup</button>
                    </div><br />
                    <div className="form-group row">

                        <p className="col-6">Already Have account?</p>
                        <a className="col-6" href="/signin">SignIn</a>

                    </div>
                </form>
            </div>
            <Footer></Footer>
        </>
    )
}