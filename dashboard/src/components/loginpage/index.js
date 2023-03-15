import React from "react";
import { Button, Grid, TextField, Typography } from "@mui/material";
import "./login.css";
import login_page_side from "../../assets/login_page_side.png";

function index() {
  const handleSubmit = (e) => {
    e.preventDefault();
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
          <TextField
            id="outlined-multiline-flexible"
            label="Multiline"
            multiline
            maxRows={4}
          />
          <TextField
            id="outlined-multiline-flexible"
            label="Multiline"
            multiline
            maxRows={4}
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

export default index;