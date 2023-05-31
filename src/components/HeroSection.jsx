import React from "react";
import { Grid, Typography, Button } from "@mui/material";
import HeroImage from "../images/mars_colony.jpg";
import KeyboardDoubleArrowDownIcon from "@mui/icons-material/KeyboardDoubleArrowDown";

const HeroSection = () => {
  return (
    <div className="hero-section">
      <img src={HeroImage} alt="Hero" className="hero-image" />
      <div className="overlay" />
      <Grid
        container
        spacing={1}
        sx={{
          display: "flex",
          justifyContent: "space-evenly",
          alignItems: "center",
          zIndex: "2",
          color: "#f4f4f4",
          height: "100%",
          width: "100%",
        }}
      >
        {/* Left side */}
        <Grid
          item
          xs={12}
          sm={6}
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography variant="h2" component="h2" className="intro">
            A new start,
          </Typography>
          <br></br>
          <Typography variant="h4" component="h4" className="intro">
            a home away from home.
          </Typography>
        </Grid>
        {/* Right side */}
        <Grid
          item
          xs={12}
          sm={6}
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-evenly",
            alignItems: "center",
          }}
        >
          <Button variant="contained" color="secondary" className="more-btn">
            <a href="#">Learn more</a>
          </Button>
          <KeyboardDoubleArrowDownIcon
            sx={{
              display: { sm: "none" },
              mt: 6,
              fontSize: "200%",
            }}
            className="arrow-down"
          />
        </Grid>
      </Grid>
    </div>
  );
};

export default HeroSection;
