import React from "react";
import {
  Avatar,
  Box,
  Grid,
  Card,
  CardContent,
  Typography,
} from "@mui/material";
import { ImQuotesLeft } from "react-icons/im";

const Testimonials = () => {
  return (
    <div className="testimonials-section section">
      <Grid container spacing={3} className="testimonials-container">
        <Grid item xs={12} sm={4}>
          <Card className="testimonial-card">
            <CardContent>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <ImQuotesLeft size={24} color="#cd693e" />
                <Avatar
                  alt="Remy Sharp"
                  src="/images/remy-sharp.jpg"
                  sx={{
                    marginLeft: "auto",
                    width: 56,
                    height: 56,
                  }}
                />
              </Box>
              <Typography variant="body2" sx={{ mt: 1, fontSize: "18px" }}>
                When the world faces uncertainty, it's reassuring to have a
                backup plan on Mars.
              </Typography>
              <Typography variant="body2" sx={{ mt: 3, fontSize: "16px" }}>
                <strong>- Remy Sharp</strong>
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Card className="testimonial-card">
            <CardContent>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <ImQuotesLeft size={24} color="#cd693e" />
                <Avatar
                  alt="Travis Howard"
                  src="/images/travis-howard.jpg"
                  sx={{
                    marginLeft: "auto",
                    width: 56,
                    height: 56,
                  }}
                />
              </Box>
              <Typography variant="body2" sx={{ mt: 1, fontSize: "18px" }}>
                Booking is a practical decision. When the time comes, I'll be
                ready to explore new horizons on Mars.
              </Typography>
              <Typography variant="body2" sx={{ mt: 3, fontSize: "16px" }}>
                <strong>- Travis Howard</strong>
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Card className="testimonial-card">
            <CardContent>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <ImQuotesLeft size={24} color="#cd693e" />
                <Avatar
                  alt="Cindy Baker"
                  src="/images/cindy-baker.jpg"
                  sx={{
                    marginLeft: "auto",
                    width: 56,
                    height: 56,
                  }}
                />
              </Box>
              <Typography variant="body2" sx={{ mt: 1, fontSize: "18px" }}>
                I'm excited about my future journey. Mars offers a fresh start
                and a chance for new experiences.
              </Typography>
              <Typography variant="body2" sx={{ mt: 3, fontSize: "16px" }}>
                <strong>- Cindy Baker</strong>
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
};

export default Testimonials;
