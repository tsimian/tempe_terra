import React from "react";
import { Grid, Typography } from "@mui/material";
import ModelCanvas from "./ModelCanvas";

const Mission = () => {
  return (
    <div className="mission-section" id="mission">
      <Grid
        container
        spacing={3}
        sx={{
          display: "flex",
          justifyContent: "space-evenly",
          alignItems: "center",
          zIndex: "2",
          color: "#f4f4f4",
          height: "100%",
          width: "100%",
          padding: "",
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
          <ModelCanvas />
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
          <Typography variant="h4" component="h4" className="mission-text">
            Mission: To secure humanity's future
          </Typography>
          <br></br>
          <Typography variant="h6" component="h6" className="mission-text">
            With <strong>resolute determination</strong>, we pioneer the
            uncharted frontiers of the <strong>Red Planet</strong>. Through our{" "}
            <strong>valiant efforts</strong>, we aspire to secure a future where
            the human spirit persists,{" "}
            <strong>even in the face of seemingly insurmountable odds</strong>.
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
};

export default Mission;
