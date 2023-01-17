import "./Otp.css"
export const Otpbox = () => {
  return (
    <>
      <div className="otp-container">
        <div className="o-head">
          <h2>OTP Verification</h2>
        </div>
        <div className="otp-boxes">
          <div className="otp-small-box" contentEditable></div>
          <div className="otp-small-box" contentEditable></div>
          <div className="otp-small-box" contentEditable></div>
          <div className="otp-small-box" contentEditable></div>
          <div className="otp-small-box" contentEditable></div>
        </div>

        <div className="otp-timer">
          <p style={{ fontFamily: "Poppins", fontSize: "22px" }}>00 : 28</p>
        </div>
        <div className="otp-text" style={{ fontFamily: "Poppins" }}>
          Not received OTP? <span style={{ color: "#4E89FC" }}>Resend Now</span>
        </div>
      </div>
    </>
  );
};
