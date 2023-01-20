import { useState } from "react";
import "./LoginBox.css";

export const LoginBox = () => {

   const [lemail , setLemail] = useState("")// login email
   const [lpassowrd , setLpass] = useState("") // login password


   const LoginUser = ()=>{

       if(lemail=="" || lpassowrd==""){
         // alert
       }

       // login using firebase
   }


  // login firebase

  // email -> pageCount , isComp

  // isComp -> true -> dashboard
  // isComp -> false -> pageCount -> pageCount (params) -> params -> basicdetails -> pageCount(params.id)

  return (
    <>
      <div className="login-container">
        <div className="l-head">
          <h2>Let's Get Started!</h2>
        </div>
        <div className="l-glogin">
          <div className="l-glogin-img"></div>
          <div className="l-glogin-text">
            <h5 style={{ fontFamily: "Poppins", marginTop: "0.5rem" }}>
              Continue with google
            </h5>
          </div>
        </div>
        <div className="break-line"></div>

        {/* <div className="l-phlogin">
          <div className="phn-id-dropdown"></div>
          <div className="phno-text">
            <div className="phn-code">+91</div>
            <div className="phn-text">
              <input type="text" placeholder="Enter Phone Number"/>
            </div>
          </div>
        </div> */}

        <div className="l-emailPass">
          <div className="l-email">
            <input type="text" placeholder="Enter email" onChange={(e)=>{setLemail(e.target.value)}} />
          </div>
          <div className="l-password">
            <input type="password" placeholder="Enter password" onChange={(e)=>{setLpass(e.target.value)}} />
          </div>
        </div>

        <div className="get-otp-btn">
          <button  onClick={()=>{}}>LOGIN</button>
        </div>
        <div className="login-text" style={{ fontFamily: "Poppins" }}>
          New to DoubtConnect?{" "}
          <span style={{ color: "#4E89FC" }}> Create account</span>
        </div>
      </div>
    </>
  );
};
