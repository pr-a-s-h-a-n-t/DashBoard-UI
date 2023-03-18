import React, { useState } from "react";
import { Button, Grid, TextField, Typography } from "@mui/material";
import "./login.css";
import login_page_side from "../../assets/login_page_side.png";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

function Index() {
  const navigate = useNavigate();
  const [userCredential, setUserCredential] = useState({
    email: "",
    password: "",
  });
 
  const [accessToken, setAccessToken] = useState("");

  const handleSubmit = async (e) => {

    console.log(userCredential, ",...........")
    e.preventDefault();

    const dta = await fetch("https://reqres.in/api/login", {
      // Adding method type
      method: "POST",
      body: JSON.stringify(userCredential),
      headers: {
        "Content-type": "application/json",
      },

    });
    let serverResponse = await dta.json();

      

    console.log(serverResponse.token, "Successfully" );

    if (serverResponse.token !== "" && dta.status === 200) {
      toast("🦄 login successful!", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      setAccessToken(serverResponse.token);
      navigate("/admin_panel/client_master/client_list-more");
    } else if (!serverResponse.token || dta.status === 400) {
      toast.error("error: Invalid Credential", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  };

  function handleUserInput(e) {
    if (e.target.name === "email" ) {
      console.log(e.target.value, "Email--------");
      userCredential.email = e.target.value;
    } else if (e.target.name === "password") {
      console.log(e.target.value, "password--------");
      userCredential.password = e.target.value;
    }
  }

  return (
    <Grid className="_login_container" container>
      <Grid item sm={12} md={4} className="_login_wrapper">
        <form onSubmit={handleSubmit}>
          <Typography>Welcome</Typography>
          <Typography>Enter your Username and Passoword.</Typography>
          {/* </Grid> */}
          {/* <Grid className="_input_wrapper" sx={{}} item> */}
          {/* <form onSubmit={handleSubmit}> */}
          <input
            type="text"
            name="email"
            required
            onChange={(e) => handleUserInput(e)}
          />
          <input
            type="password"
            name="password"
            required
            onChange={(e) => handleUserInput(e)}
          />
          <TextField type="submit" />
          <Typography>Forgot Password?</Typography>
        </form>

        <Grid className="_copyright_wrapper">
          <span>
            {" "}
            <p> Terms of Use</p>{" "}
          </span>
          <span>
            {" "}
            <p> Privacy Policy</p>{" "}
          </span>
          <Typography>© Punctualiti 2022. All rights reserved</Typography>
        </Grid>
      </Grid>

      <Grid item sm={12} md={6}>
        <div className="_img_container">
          <img src={login_page_side} alt="" />
        </div>
        <Typography>360° Solution for Asset Management</Typography>
        <Typography>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </Typography>
      </Grid>
    </Grid>
  );
}

export default Index;
