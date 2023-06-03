import React from "react";
import { Avatar, Grid, Typography } from "@mui/material";
import AboutImage from "../images/mars-ppl.jpg";

const About = () => {
  return (
    <div className="about-section section" id="about">
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
          className="about-left"
        >
          <Typography variant="h2" component="h2" className="about-text">
            Our Story
          </Typography>
          <br></br>
          <Typography variant="h6" component="h6" className="about-text">
            Born out of the depths of cosmic inspiration,{" "}
            <strong>Tempe Terra</strong> was founded by a charismatic luminary
            whose fervent belief in the boundless potential of Mars{" "}
            <strong>ignited a flame of devotion</strong> within the hearts of
            its disciples. Together, we embark on a journey that transcends the
            mundane, daring to unveil the extraordinary on the celestial canvas
            of <strong>Tempe Terra</strong>.
          </Typography>
          <br></br>
          <Typography variant="body2" component="p" className="about-text">
            <em>(This text was written by AI)</em>
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
          className="about-right"
        >
          <Avatar
            alt="People on Mars"
            src={AboutImage}
            sx={{ width: 250, height: 250 }}
          />
        </Grid>
      </Grid>
    </div>
  );
};

export default About;
