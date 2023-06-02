import React from "react";
import {
  Box,
  Card,
  CardContent,
  Divider,
  Typography,
  Button,
} from "@mui/material";

const PriceTiers = () => {
  return (
    <Box className="price-container" id="pricing">
      <div className="price-wrapper">
        <Card className="card card-1">
          <CardContent>
            <Typography variant="h5" component="h5">
              Basic
            </Typography>
            <Typography variant="h4" component="h4">
              $15,000
            </Typography>
            <Typography variant="body1" component="p">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </Typography>
            <Button
              variant="outlined"
              color="secondary"
              sx={{ marginTop: "10px" }}
            >
              Buy Now
            </Button>
          </CardContent>
        </Card>
        <Card className="card card-2" id="premium-card">
          <div className="tab popular">
            <Typography
              variant="subtitle1"
              component="p"
              sx={{ fontWeight: 600 }}
            >
              Most Popular
            </Typography>
          </div>
          <hr />
          <CardContent>
            <Typography variant="h5" component="h5">
              Premium
            </Typography>
            <Typography variant="h4" component="h4">
              $50,000
            </Typography>
            <Typography variant="body1" component="p">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </Typography>
            <Button
              variant="outlined"
              sx={{ marginTop: "10px" }}
              id="premium-btn"
            >
              Buy Now
            </Button>
          </CardContent>
        </Card>
        <Card className="card card-3">
          <CardContent>
            <Typography variant="h5" component="h5">
              Deluxe
            </Typography>
            <Typography variant="h4" component="h4">
              $100,000
            </Typography>
            <Typography variant="body1" component="p">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </Typography>
            <Button
              variant="outlined"
              color="secondary"
              sx={{ marginTop: "10px" }}
            >
              Buy Now
            </Button>
          </CardContent>
        </Card>
      </div>
    </Box>
  );
};

export default PriceTiers;
