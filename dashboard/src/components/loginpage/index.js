import React, { useState } from "react";
import { Button, Grid, TextField, Typography } from "@mui/material";
import "./login.css";
import login_page_side from "../../assets/login_page_side.png";

function Index() {
  const [userCredential, setUserCredential] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch("https://reqres.in/api/login", {
      // Adding method type
      method: "POST",

      // Adding body or contents to send
      body: JSON.stringify(userCredential),

      // Adding headers to the request
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      // Converting to JSON
      .then((response) => response.json())

      // Displaying results to console
      .then((json) => console.log(json));
  };

  const handleUserInput = (event) => {
    const { value, name } = event.target;
    setUserCredential({
      ...userCredential,
      [name]: value,
    });

    // console.log(value, name, "value ----- name ");
  };

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
            onChange={(e) => {
              handleUserInput(e);
            }}
          />
          <input
            type="password"
            onChange={(e) => {
              handleUserInput(e);
            }}
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
