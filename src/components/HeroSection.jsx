import React from "react";
import { Grid, Typography, Button } from "@mui/material";
import HeroImage from "../images/mars_colony.jpg";
import KeyboardDoubleArrowDownIcon from "@mui/icons-material/KeyboardDoubleArrowDown";

const HeroSection = () => {
  return (
    <div className="hero-section" id="home">
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
            A new start:
          </Typography>
          <br></br>
          <Typography variant="h4" component="h4" className="intro">
            Discover home away from home on Mars
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
            <a href="#mission">Learn more</a>
          </Button>
        </Grid>
        <KeyboardDoubleArrowDownIcon
          sx={{
            mt: 4,
            fontSize: "36px",
          }}
          className="arrow-down"
        />
      </Grid>
    </div>
  );
};

export default HeroSection;
