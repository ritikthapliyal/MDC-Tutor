
import "./LoginBg.css";
import bgImg from "../assets/login-background.svg";
import yelloimg from "../assets/yellow-circle.svg";
import { LoginBox } from "./LoginBox";
import { Otpbox } from "./Otpbox";
import { Hheader } from "../Components/Headers/Hheader";

export const LoginBg = () => {
  return (
    <>
      <Hheader></Hheader>
      <div className="container-t">
        <div className="bg-img">
          <img src={bgImg} alt="" />
          <div className="intro-text">
            <h1 style={{ fontWeight: "700", fontSize: "3rem" }}>
              Passionate About
            </h1>
            <h1
              style={{
                fontWeight: "700",
                fontSize: "2.8rem",
                color: "#4E89FC",
              }}
            >
              Teaching?
            </h1>
            <p style={{ fontSize: "1.4rem" }}>
              We've got something
              <span style={{ color: "white" }}> just for you</span>
            </p>
          </div>
                 <LoginBox/>
        </div>
        <img src={yelloimg} className="yellow-circle" />
      </div>
    </>
  );
};
