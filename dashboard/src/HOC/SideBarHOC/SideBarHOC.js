import { Grid } from "@mui/material";
import React from "react";
import TOPBarHoc from "../TopBarHOC/TOPBarHoc";
import "./SideBarHOC.css";

function SideBarHOC({ children }) {
  return (
    <Grid container maxWidth={"100%"}>
      <Grid item md={2} className="side_bar_container">
        this is side bar!
      </Grid>

      <Grid item md={9}>
      <TOPBarHoc /> 
        {children}
      </Grid>
    </Grid>
  );
}

export default SideBarHOC;
