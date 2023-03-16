import { Button, Grid, TextField, Typography } from "@mui/material";
import React from "react";
import TOPBarHoc from "../TopBarHOC/TOPBarHoc";
import "./SideBarHOC.css";
import SearchIcon from "@mui/icons-material/Search";
function SideBarHOC({ children }) {
  return (
    <Grid container maxWidth={"100%"}>
      <Grid item md={2} className="side_bar_container">
        <h2>Company name</h2>
        <TextField
          sx={{
            fieldset: {
              borderRadius: "96px",

              alignTtems: "center",
              padding: "12px 16px",
              // gap: "8px",

              width: "90%",
              
            },
          }}
          placeholder="Search modules..."
          InputProps={{
            startAdornment: <SearchIcon />,

            style: {
              paddingRight: " 0 ",
            },
          }}
        />
        <h3>Client Master</h3>
        <button>View Clients</button>
        <button>Add Client</button>
      </Grid>

      <Grid item md={9}>
        <TOPBarHoc />
        {children}
      </Grid>
    </Grid>
  );
}

export default SideBarHOC;
