import "./LoginBox.css";

export const LoginBox = () => {
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

        <div className="l-phlogin">
          <div className="phn-id-dropdown"></div>
          <div className="phno-text">
            <div className="phn-code">+91</div>
            <div className="phn-text">
              <input type="text" placeholder="Enter Phone Number"/>
            </div>
          </div>
        </div>
        <div className="get-otp-btn">
          <button>Get OTP</button>
        </div>
        <div className="login-text" style={{ fontFamily: "Poppins" }}>
          New to DoubtConnect?{" "}
          <span style={{ color: "#4E89FC" }}>Create account</span>
        </div>
      </div>
    </>
  );
};
