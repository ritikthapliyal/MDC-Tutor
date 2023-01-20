import { Hheader } from "../Headers/Hheader";
import "./Basicdetails.css";

/****************************Materail-UI**************************/
import Button from "@mui/material/Button";
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
import { YearOfExp } from "./YearOfExp";
import { ProfilePhoto } from "./ProfilePhoto";
import { saveTutorDetails } from "../../functions/utils";
/****************************Materail-UI**************************/

export const Basicdetails = () => {
  const [textAreaCount, ChangeTextAreaCount] = useState(0);

  /**********************page 1 state***********************/
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [acadQualification, setAcadQual] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [dob, setDate] = useState(null);
  /*********************page 1 state************************/

  /**************************page 2 state************************/
  const [prlang, setPrLang] = useState("");
  /**************************page 2 state************************/

  /**************************page 3 state************************/
  const [seclang, setSecLang] = useState("");
  /**************************page 3 state************************/

  /**************************page 4 state****************************/
  const [prAparatus, setPrAparatus] = useState("");
  /**************************page 4 state****************************/

  /**************************page 5 state****************************/
  const [secAparatus, setSecAparatus] = useState("");
  /**************************page 5 state****************************/

  /**************************page 6 state****************************/
  const [ays, setAys] = useState("");
  /**************************page 6 state****************************/

  const [pageCount, setPageCount] = useState(1);

  // count for textarea words
  const recalculate = (e) => {
    ChangeTextAreaCount(e.target.value.length);
  };

  const handleNext = async(e) => {
    let document = {}
    if (pageCount == 1) {
      if (
        name == "" || email == "" || acadQualification == "" || city == "" || state == "" || dob == ""
      ) {
        return;
        // alert to fill all acad details
      } else {
        // api to save details till now and pageCount
        document = {
          full_name:name,
          email,
          dob,
          qualification:acadQualification,
          city,
          state,
        }
      }
    } 
    else if (pageCount == 2) {
      if (prlang == "") {
        return
      } else {
        document = {primary_language:prlang}
      }
    } else if (pageCount == 3) {
      if (seclang == "") {
      } else {
        document = {secondary_language:seclang}
      }
    } else if (pageCount == 4) {
      if (prAparatus == "") {
        alert("Blank")
        return
      } else {
        console.log("Hello",prAparatus)
        document = {primary_apparatus:prAparatus}
      }
    } else if (pageCount == 5) {
      if (secAparatus == "") {
        return;
      } else {
        document = {secondary_apparatus:secAparatus}
      }
    } else if (pageCount == 6) {
      if (ays == "" || ays.length < 20) {
        return;
      } else {
        document = {description:ays}
      }
    }
    document.page = pageCount
    console.log(document)
    await saveTutorDetails(document)
    .then(()=>setPageCount(pageCount + 1))
    .catch(err=>console.log("Something went wrong",err))
    
  };

  const handleBack = (e) => {
    setPageCount(pageCount - 1);
  };

  return (
    <>
      <Hheader></Hheader>
      <div className="bd-container">
        {pageCount == 1 ? (
          <>
            <div className="bd-text">
              <div className="bd-text-title">
                <h2 style={{ fontWeight: "700", fontSize: "30px" }}>
                  Add your basic{" "}
                  <span style={{ color: "#4E89FC" }}>details</span>
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
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div className="form-email bd">
                  <TextField
                    id="outlined-basic"
                    label="Email Address"
                    variant="outlined"
                    fullWidth
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="form-birthday bd">
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DatePicker
                      label="Select your birthday"
                      value={dob}
                      onChange={(newValue) => {
                        setDate(newValue);
                      }}
                      renderInput={(params) => (
                        <TextField fullWidth {...params} />
                      )}
                    />
                  </LocalizationProvider>
                </div>
                <div className="form-edu bd">
                  <TextField
                    id="outlined-basic"
                    label="Highest Academic Qualification"
                    variant="outlined"
                    fullWidth
                    onChange={(e) => setAcadQual(e.target.value)}
                  />
                </div>
                <div className="form-add bd">
                  <div className="add-city">
                    <FormControl style={{ width: "90%" }}>
                      <InputLabel id="demo-simple-select-label">
                        City
                      </InputLabel>
                      <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        label="Select City"
                        onChange={(e) => {
                          setCity(e.target.value);
                        }}
                      >
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                      </Select>
                    </FormControl>
                  </div>
                  <div className="add-state">
                    <FormControl style={{ width: "90%" }}>
                      <InputLabel id="demo-simple-select-label">
                        State
                      </InputLabel>
                      <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        label="Select State"
                        onChange={(e) => {
                          setState(e.target.value);
                        }}
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
                    <div className="btn-back"></div>
                    <div className="btn-next">
                      <Button
                        style={{
                          height: "55px",
                          width: "152px",
                          borderRadius: "10px",
                          outline: "none",
                        }}
                        variant="contained"
                        onClick={() => {
                          handleNext();
                        }}
                      >
                        Next{" "}
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        ) : (
          ""
        )}

        {pageCount == 2 ? (
          <>
            <div className="bd-text-title">
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
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Doloribus sint ea unde quae inventore et vero qui quia aut
                reprehenderit.
              </p>
            </div>

            <div className="bd-form">
              <div className="bd-form-container">
                <div className="form-name bd">
                  <TextField
                    id="outlined-basic"
                    type="text"
                    value="English"
                    variant="outlined"
                    inputProps={{ readOnly: true }}
                    fullWidth
                    onClick={(e) => {
                      setPrLang(e.target.value);
                    }}
                  />
                </div>
                <div className="form-email bd">
                  <TextField
                    id="outlined-basic"
                    type="text"
                    value="Hindi"
                    variant="outlined"
                    inputProps={{ readOnly: true }}
                    fullWidth
                    onClick={(e) => {
                      setPrLang(e.target.value);
                    }}
                  />
                </div>
                <div className="form-birthday bd">
                  <TextField
                    id="outlined-basic"
                    type="text"
                    value="Tamil"
                    variant="outlined"
                    inputProps={{ readOnly: true }}
                    fullWidth
                    onClick={(e) => {
                      setPrLang(e.target.value);
                    }}
                  />
                </div>
                <div className="form-edu bd">
                  <TextField
                    id="outlined-basic"
                    type="text"
                    value="Telgu"
                    variant="outlined"
                    inputProps={{ readOnly: true }}
                    fullWidth
                    onClick={(e) => {
                      setPrLang(e.target.value);
                    }}
                  />
                </div>
                <div className="form-edu bd">
                  <TextField
                    id="outlined-basic"
                    type="text"
                    value="Bengali"
                    variant="outlined"
                    inputProps={{ readOnly: true }}
                    fullWidth
                    onClick={(e) => {
                      setPrLang(e.target.value);
                    }}
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
                        onClick={() => {
                          handleBack();
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
                        }}
                        variant="contained"
                        onClick={() => {
                          handleNext();
                        }}
                      >
                        Next{" "}
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        ) : (
          ""
        )}

        {pageCount == 3 ? (
          <>
            <div className="bd-text-title">
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
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Doloribus sint ea unde quae inventore et vero qui quia aut
                reprehenderit.
              </p>
            </div>

            <div className="bd-form">
              <div className="bd-form-container">
                <div className="form-name bd">
                  <TextField
                    id="outlined-basic"
                    type="text"
                    value="English"
                    variant="outlined"
                    inputProps={{ readOnly: true }}
                    fullWidth
                    onClick={(e) => {
                      setSecLang(e.target.value);
                    }}
                  />
                </div>
                <div className="form-email bd">
                  <TextField
                    id="outlined-basic"
                    type="text"
                    value="Hindi"
                    variant="outlined"
                    inputProps={{ readOnly: true }}
                    fullWidth
                    onClick={(e) => {
                      setSecLang(e.target.value);
                    }}
                  />
                </div>
                <div className="form-birthday bd">
                  <TextField
                    id="outlined-basic"
                    type="text"
                    value="Tamil"
                    variant="outlined"
                    inputProps={{ readOnly: true }}
                    fullWidth
                    onClick={(e) => {
                      setSecLang(e.target.value);
                    }}
                  />
                </div>
                <div className="form-edu bd">
                  <TextField
                    id="outlined-basic"
                    type="text"
                    value="Telgu"
                    variant="outlined"
                    inputProps={{ readOnly: true }}
                    fullWidth
                    onClick={(e) => {
                      setSecLang(e.target.value);
                    }}
                  />
                </div>
                <div className="form-edu bd">
                  <TextField
                    id="outlined-basic"
                    type="text"
                    value="Bengali"
                    variant="outlined"
                    inputProps={{ readOnly: true }}
                    fullWidth
                    onClick={(e) => {
                      setSecLang(e.target.value);
                    }}
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
                        onClick={() => {
                          handleBack();
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
                        }}
                        variant="contained"
                        onClick={() => {
                          handleNext();
                        }}
                      >
                        Next{" "}
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        ) : (
          ""
        )}

        {pageCount == 4 ? (
          <>
            <div className="bd-text-title">
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
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Doloribus sint ea unde quae inventore et vero qui quia aut
                reprehenderit.
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
                    onClick={(e) => {
                      setPrAparatus(e.target.value);
                    }}
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
                    onClick={(e) => {
                      setPrAparatus(e.target.value);
                    }}
                  />
                </div>

                <div className="form-btns bd">
                  <div className="empty-space"></div>
                  <div className="f-btns">
                    <div className="btn-back">
                      <Button
                        variant="contained"
                        onClick={() => {
                          handleBack();
                        }}
                      >
                        Back
                      </Button>
                    </div>
                    <div className="btn-next">
                      <Button
                        variant="contained"
                        onClick={() => {
                          handleNext();
                        }}
                      >
                        Next{" "}
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        ) : (
          ""
        )}
        {pageCount == 5 ? (
          <>
            <div className="bd-text-title">
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
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Doloribus sint ea unde quae inventore et vero qui quia aut
                reprehenderit.
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
                    onClick={(e) => {
                      setSecAparatus(e.target.value);
                    }}
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
                    onClick={(e) => {
                      setSecAparatus(e.target.value);
                    }}
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
                    onClick={(e) => {
                      setSecAparatus(e.target.value);
                    }}
                  />
                </div>

                <div className="form-btns bd">
                  <div className="empty-space"></div>
                  <div className="f-btns">
                    <div className="btn-back">
                      <Button
                        variant="contained"
                        onClick={() => {
                          handleBack();
                        }}
                      >
                        Back
                      </Button>
                    </div>
                    <div className="btn-next">
                      <Button
                        variant="contained"
                        onClick={() => {
                          handleNext();
                        }}
                      >
                        Next{" "}
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        ) : (
          ""
        )}

        {pageCount == 6 ? (
          <>
            <div className="bd-text-title">
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
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Doloribus sint ea unde quae inventore et vero qui quia aut
                reprehenderit.
              </p>
            </div>

            <div className="bd-form">
              <div className="bd-form-container">
                <div className="bd-textarea">
                  <textarea
                    type="text"
                    rows={10}
                    className="full_height_Width"
                    onChange={(e) => {
                      setAys(e.target.value);
                    }}
                  />
                </div>

                <div className="form-btns bd">
                  <div className="empty-space"></div>
                  <div className="f-btns">
                    <div className="btn-back">
                      <Button
                        variant="contained"
                        onClick={() => {
                          handleBack();
                        }}
                      >
                        Back
                      </Button>
                    </div>
                    <div className="btn-next">
                      <Button
                        variant="contained"
                        onClick={() => {
                          handleNext();
                        }}
                      >
                        Next{" "}
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        ) : (
          ""
        )}
        {pageCount == 7 ? (
          <YearOfExp
            pageCount={pageCount}
            setPageCount={setPageCount}
          ></YearOfExp>
        ) : (
          ""
        )}
        {pageCount == 8 ? (
          <ProfilePhoto
            pageCount={pageCount}
            setPageCount={setPageCount}
          ></ProfilePhoto>
        ) : (
          ""
        )}
      </div>
    </>
  );
};
