import React from "react";
import { Avatar, Grid, Card, CardContent, Typography } from "@mui/material";
import { deepOrange, deepPurple } from "@mui/material/colors";

const Testimonials = () => {
  return (
    <div className="testimonials-section section">
      <Grid container spacing={3} className="testimonials-container">
        <Grid item xs={12} sm={4}>
          <Card className="testimonial-card">
            <CardContent>
              <Avatar
                alt="Remy Sharp"
                src="/images/remy-sharp.jpg"
                sx={{
                  marginLeft: "auto",
                  width: 56,
                  height: 56,
                }}
              />
              <Typography variant="h5" sx={{ mb: 1 }}>
                Remy Sharp
              </Typography>
              <hr />
              <Typography variant="body2" sx={{ mt: 1 }}>
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                et velit commodo, blandit risus ut, lacinia mauris."
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Card className="testimonial-card">
            <CardContent>
              <Avatar
                alt="Travis Howard"
                src="/images/travis-howard.jpg"
                sx={{ marginLeft: "auto", width: 56, height: 56 }}
              />
              <Typography variant="h5" sx={{ mb: 1 }}>
                Travis Howard
              </Typography>
              <hr />
              <Typography variant="body2" sx={{ mt: 1 }}>
                "Sed non ex at ipsum dapibus lobortis. Aliquam lobortis bibendum
                lacus, eget vestibulum dolor facilisis ac."
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Card className="testimonial-card">
            <CardContent>
              <Avatar
                alt="Cindy Baker"
                src="/images/cindy-baker.jpg"
                sx={{
                  marginLeft: "auto",
                  width: 56,
                  height: 56,
                }}
              />
              <Typography variant="h5" sx={{ mb: 1 }}>
                Cindy Baker
              </Typography>
              <hr />
              <Typography variant="body2" sx={{ mt: 1 }}>
                "Vestibulum quis pharetra justo. Mauris vehicula augue ut sapien
                cursus interdum. Donec faucibus malesuada."
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
};

export default Testimonials;
