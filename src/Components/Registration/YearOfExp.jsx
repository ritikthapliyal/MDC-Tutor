import "./Basicdetails.css";
import { FileUploader } from "react-drag-drop-files";
/****************************Materail-UI**************************/
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
/****************************Materail-UI**************************/
import { useState } from "react";

const fileTypes = ["PDF"];

export const YearOfExp = (props) => {
  const [file, setFile] = useState(null);
  const [fileArr, setfileArr] = useState([]); // fileArr -> arr of all the files uploaded so far
  const [yoe , setYOE] = useState([]) // yoe => year of experience


  // file handler for upload at years of exp
  const handleChange = (file) => {
    setFile(file);
    setfileArr([...fileArr, file]);
  };

  const handleFileUpload = ()=>{

    console.log("hi");
     if(yoe=="" || fileArr.length<1){
        // alert to fill empty fields
     }else{

     }

     props.setPageCount(props.pageCount + 1);
  }

  const uploadFiles = ()=>{
    // api to  with fileArr and yoe to upload on backend
  }


  return (
    <>
      <div className="bd-text-title">
        <h2 style={{ fontWeight: "700", fontSize: "30px" }}>
          Add your years of{" "}
          <span style={{ color: "#4E89FC" }}>experience </span>
        </h2>
        <h2 style={{ fontWeight: "700", fontSize: "30px" }}></h2>
        <p
          style={{
            color: "#686868",
            fontFamily: "Poppins",
            fontWeight: "500",
            fontSize: "18px",
            width: "60%",
          }}
        >
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus
          sint ea unde quae inventore et vero qui quia aut reprehenderit.
        </p>
      </div>

      <div className="bd-form">
        <div className="bd-form-container">
          <div className="form-name bd">
            <TextField
              id="outlined-basic"
              type="text"
              placeholder="Years of experience"
              variant="outlined"
              fullWidth
              onChange={(e)=>{setYOE(e.target.value)}}
            />
          </div>

          <div className="upload-exp">
            <h2>Add you years of experience</h2>

            <div
              className="uploaded-file"
              style={{ display: fileArr.length > 0 ? "block" : "none" }}
            >
              {fileArr?.map((f) => {
                return (
                  <div className="up-file">
                    <p>{f[0]?.name}</p>
                  </div>
                );
              })}
            </div>

            <div className="exp-file-uploader">
              <div className="file-upl-btn">
                <span class="material-symbols-outlined">upload</span>
                <Button
                  style={{
                    height: "5.3rem",
                    width: "12rem",
                    borderRadius: "10px",
                    outline: "none",
                    boxShadow: "none",
                    background: "#4E89FC",
                    fontSize: "16px",
                  }}
                  variant="contained"
                  onClick={()=>{
                    uploadFiles()
                  }}
                >
                  Add file{" "}
                </Button>
              </div>
              <div className="drag-and-drop">
                <FileUploader
                  multiple={true}
                  handleChange={handleChange}
                  name="file"
                  types={fileTypes}
                  maxSize="1"
                  children=<div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      height: "100%",
                    }}
                  >
                    {file == null ? (
                      <p
                        style={{
                          color: "#A0A0A0",
                          font: "16px",
                          margin: "0",
                        }}
                      >
                        drag and drop file here
                      </p>
                    ) : (
                      <p
                        style={{
                          color: "#A0A0A0",
                          font: "16px",
                          margin: "0",
                        }}
                      >
                        {file[0].name}
                      </p>
                    )}
                  </div>
                />
              </div>
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
                  onClick={() => {
                    props.setPageCount(props.pageCount - 1);
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
                  onClick={()=>handleFileUpload()}
                >
                  Next{" "}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
