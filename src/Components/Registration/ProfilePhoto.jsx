import { useState } from "react";

/****************************Materail-UI**************************/
import Button from "@mui/material/Button";
/****************************Materail-UI**************************/

import userdummypp from "../../assets/User_dummypp.svg";

export const ProfilePhoto = (props) => {
  const [userImg, setUserImg] = useState(null);

  // handle img change
  let handleImgChange = (file) => {
    let url = URL.createObjectURL(file);
    setUserImg(url);
  };

  return (
    <>
      <div className="bd-container">
        <div className="bd-text">
          <div className="bd-text-title">
            <h2 style={{ fontWeight: "700", fontSize: "30px" }}>
              Add your <span style={{ color: "#4E89FC" }}>Profile</span> Photo
            </h2>
            <p
              style={{
                color: "#686868",
                fontFamily: "Poppins",
                fontWeight: "500",
                fontSize: "18px",
              }}
            >
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Doloribus sint ea unde quae inventore et vero qui quia aut
              reprehenderit.
            </p>
          </div>
        </div>
        <div className="bd-form">
          <div className="bd-form-container">
            <div className="user-pp">
              <div className="user-photo">
                <img src={userImg == null ? userdummypp : userImg} />
              </div>
              <div className="upl-photo">
                <Button variant="outlined" component="label">
                  Upload
                  <input
                    hidden
                    accept="image/*"
                    type="file"
                    onChange={(e) => handleImgChange(e.target.files[0])}
                  />
                </Button>
              </div>
            </div>
            <div className="form-btns bd">
              <div className="empty-space"></div>
              <div className="f-btns">
                <div className="btn-back">
                  <Button
                    style={{
                      background: "#F3F3F3",
                      color: "black",
                      height: "55px",
                      width: "152px",
                      borderRadius: "10px",
                      outline: "none",
                      boxShadow: "none",
                    }}
                    variant="contained"
                    onClick={()=>{
                      props.setPageCount(props.pageCount-1)
                    }}
                  >
                    Back
                  </Button>
                </div>
                <div className="btn-next">
                  <Button
                    style={{
                      height: "55px",
                      width: "152px",
                      borderRadius: "10px",
                      outline: "none",
                      boxShadow: "none",
                    }}
                    variant="contained"
                    onClick={()=>{
                      props.setPageCount(props.pageCount+1)
                    }}
                  >
                    Submit{" "}
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
