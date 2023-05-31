import React from "react";
import { Grid, Typography, Button } from "@mui/material";
import HeroImage from "../images/mars_colony.jpg";

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
        <Grid item xs={12} sm={6}>
          <Typography variant="h2" component="h2">
            Tempe Terra
          </Typography>
          <br></br>
          <Typography variant="h5" component="h5">
            Welcome home!
          </Typography>
        </Grid>
        {/* Right side */}
        <Grid item xs={12} sm={6}>
          <Button variant="contained" color="secondary" className="button">
            <h3>Learn more</h3>
          </Button>
        </Grid>
      </Grid>
    </div>
  );
};

export default HeroSection;
