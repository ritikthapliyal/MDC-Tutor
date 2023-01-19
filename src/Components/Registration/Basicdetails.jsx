import { Hheader } from "../Headers/Hheader";
import "./Basicdetails.css";
import { FileUploader } from "react-drag-drop-files";

/****************************Materail-UI**************************/
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { useState } from "react";
import Button from "@mui/material/Button";
/****************************Materail-UI**************************/

import userdummypp from "../../assets/User_dummypp.svg";

const fileTypes = ["PDF"];

export const Basicdetails = () => {
  const [date, setDate] = useState(null);
  const [textAreaCount, ChangeTextAreaCount] = useState(0);
  const [file, setFile] = useState(null);
  const [fileArr, setfileArr] = useState([]);
  const [userImg, setUserImg] = useState(null);

  // file handler for upload at years of exp
  const handleChange = (file) => {
    setFile(file);
    setfileArr([...fileArr, file]);
  };

  console.log(fileArr);

  // handle img change
  let handleImgChange = (file) => {
    let url = URL.createObjectURL(file);
    setUserImg(url);
  };

  // count for textarea words
  const recalculate = (e) => {
    ChangeTextAreaCount(e.target.value.length);
  };

  return (
    <>
      <Hheader></Hheader>
      <div className="bd-container">
        {/* <div className="bd-text">
          <div className="bd-text-title">
            <h2 style={{ fontWeight: "700", fontSize: "30px" }}>
              Add your basic <span style={{ color: "#4E89FC" }}>details</span>
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
            <div className="form-name bd">
              <TextField
                id="outlined-basic"
                label="Full Name"
                variant="outlined"
                fullWidth
              />
            </div>
            <div className="form-email bd">
              <TextField
                id="outlined-basic"
                label="Email Address"
                variant="outlined"
                fullWidth
              />
            </div>
            <div className="form-birthday bd">
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker
                  label="Select your birthday"
                  value={date}
                  onChange={(newValue) => {
                    setDate(newValue);
                  }}
                  renderInput={(params) => <TextField fullWidth {...params} />}
                />
              </LocalizationProvider>
            </div>
            <div className="form-edu bd">
              <TextField
                id="outlined-basic"
                label="Highest Academic Qualification"
                variant="outlined"
                fullWidth
              />
            </div>
            <div className="form-add bd">
              <div className="add-city">
                <FormControl style={{ width: "90%" }}>
                  <InputLabel id="demo-simple-select-label">Age</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    label="Select City"
                  >
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                  </Select>
                </FormControl>
              </div>
              <div className="add-state">
                <FormControl style={{ width: "90%" }}>
                  <InputLabel id="demo-simple-select-label">Age</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    label="Select State"
                  >
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                  </Select>
                </FormControl>
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
                    }}
                    variant="contained"
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
                    }}
                    variant="contained"
                  >
                    Next{" "}
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div> */}

        {/* <div className="bd-text-title">
          <h2 style={{ fontWeight: "700", fontSize: "30px" }}>
            Select your <span style={{ color: "#4E89FC" }}>primary</span>{" "}
            teaching
          </h2>
          <h2 style={{ fontWeight: "700", fontSize: "30px" }}>language</h2>
          <p
            style={{
              color: "#686868",
              fontFamily: "Poppins",
              fontWeight: "500",
              fontSize: "18px",
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
                type='text' 
				value='English'
				variant='outlined'
				inputProps={
					{ readOnly: true, }
				}
                fullWidth
              />
            </div>
            <div className="form-email bd">
            <TextField
                id="outlined-basic"
                type='text' 
				value='Hindi'
				variant='outlined'
				inputProps={
					{ readOnly: true, }
				}
                fullWidth
              />
            </div>
            <div className="form-birthday bd">
            <TextField
                id="outlined-basic"
                type='text' 
				value='Tamil'
				variant='outlined'
				inputProps={
					{ readOnly: true, }
				}
                fullWidth
              />
            </div>
            <div className="form-edu bd">
            <TextField
                id="outlined-basic"
                type='text' 
				value='Telgu'
				variant='outlined'
				inputProps={
					{ readOnly: true, }
				}
                fullWidth
              />
            </div>
            <div className="form-edu bd">
            <TextField
                id="outlined-basic"
                type='text' 
				value='Bengali'
				variant='outlined'
				inputProps={
					{ readOnly: true, }
				}
                fullWidth
              />
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
                    }}
                    variant="contained"
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
                    }}
                    variant="contained"
                  >
                    Next{" "}
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div> */}

        {/* <div className="bd-text-title">
          <h2 style={{ fontWeight: "700", fontSize: "30px" }}>
            Select your <span style={{ color: "#4E89FC" }}>secondary</span>{" "}
            teaching
          </h2>
          <h2 style={{ fontWeight: "700", fontSize: "30px" }}>language</h2>
          <p
            style={{
              color: "#686868",
              fontFamily: "Poppins",
              fontWeight: "500",
              fontSize: "18px",
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
                type='text' 
				value='English'
				variant='outlined'
				inputProps={
					{ readOnly: true, }
				}
                fullWidth
              />
            </div>
            <div className="form-email bd">
            <TextField
                id="outlined-basic"
                type='text' 
				value='Hindi'
				variant='outlined'
				inputProps={
					{ readOnly: true, }
				}
                fullWidth
              />
            </div>
            <div className="form-birthday bd">
            <TextField
                id="outlined-basic"
                type='text' 
				value='Tamil'
				variant='outlined'
				inputProps={
					{ readOnly: true, }
				}
                fullWidth
              />
            </div>
            <div className="form-edu bd">
            <TextField
                id="outlined-basic"
                type='text' 
				value='Telgu'
				variant='outlined'
				inputProps={
					{ readOnly: true, }
				}
                fullWidth
              />
            </div>
            <div className="form-edu bd">
            <TextField
                id="outlined-basic"
                type='text' 
				value='Bengali'
				variant='outlined'
				inputProps={
					{ readOnly: true, }
				}
                fullWidth
              />
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
                    }}
                    variant="contained"
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
                    }}
                    variant="contained"
                  >
                    Next{" "}
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div> */}

        {/* <div className="bd-text-title">
          <h2 style={{ fontWeight: "700", fontSize: "30px" }}>
            Select your <span style={{ color: "#4E89FC" }}>primary</span>{" "}
            teaching apparatus
          </h2>
          <h2 style={{ fontWeight: "700", fontSize: "30px" }}>language</h2>
          <p
            style={{
              color: "#686868",
              fontFamily: "Poppins",
              fontWeight: "500",
              fontSize: "18px",
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
                type='text' 
				value='Stylus/Pen'
				variant='outlined'
				inputProps={
					{ readOnly: true, }
				}
                fullWidth
              />
            </div>
            <div className="form-email bd">
            <TextField
                id="outlined-basic"
                type='text' 
				value='Physical White/Black board'
				variant='outlined'
				inputProps={
					{ readOnly: true, }
				}
                fullWidth
              />
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
                    }}
                    variant="contained"
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
                    }}
                    variant="contained"
                  >
                    Next{" "}
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div> */}

        {/* <div className="bd-text-title">
          <h2 style={{ fontWeight: "700", fontSize: "30px" }}>
            Select your <span style={{ color: "#4E89FC" }}>secondary</span>{" "}
            teaching apparatus
          </h2>
          <h2 style={{ fontWeight: "700", fontSize: "30px" }}>language</h2>
          <p
            style={{
              color: "#686868",
              fontFamily: "Poppins",
              fontWeight: "500",
              fontSize: "18px",
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
                value="Stylus/Pen"
                variant="outlined"
                inputProps={{ readOnly: true }}
                fullWidth
              />
            </div>
            <div className="form-email bd">
              <TextField
                id="outlined-basic"
                type="text"
                value="Physical White/Black board"
                variant="outlined"
                inputProps={{ readOnly: true }}
                fullWidth
              />
            </div>

            <div className="form-edu bd">
              <TextField
                id="outlined-basic"
                type="text"
                value="None"
                variant="outlined"
                inputProps={{ readOnly: true }}
                fullWidth
              />
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
                    }}
                    variant="contained"
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
                    }}
                    variant="contained"
                  >
                    Next{" "}
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div> */}

        {/* <div className="bd-text-title">
          <h2 style={{ fontWeight: "700", fontSize: "30px" }}>
            Tell us a little about{" "}
            <span style={{ color: "#4E89FC" }}>yourself </span>
            <span
              style={{
                color: "#686868",
                fontFamily: "Poppins",
                fontSize: "14px",
                fontWeight: "500",
              }}
            >
              ( minimum 20 words )
            </span>
          </h2>
          <h2 style={{ fontWeight: "700", fontSize: "30px" }}></h2>
          <p
            style={{
              color: "#686868",
              fontFamily: "Poppins",
              fontWeight: "500",
              fontSize: "18px",
            }}
          >
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus
            sint ea unde quae inventore et vero qui quia aut reprehenderit.
          </p>
        </div>

        <div className="bd-form">
          <div className="bd-form-container">
            <div className="bd-textarea">
              <textarea
                type="text"
                rows={10}
                className="full_height_Width"
                onChange={recalculate}
                
              />
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
                  >
                    Next{" "}
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div> */}

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
                  >
                    Next{" "}
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <div className="bd-text">
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
                <div className="btn-back"></div>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </>
  );
};
