import React from "react";
import { Container, Card, CardContent, Typography } from "@mui/material";

const PriceTiers = () => {
  return (
    <Container className="price-container">
      <div className="price-wrapper">
        <Card className="card">
          <CardContent>
            <Typography variant="h5" component="h2">
              Basic
            </Typography>
            <Typography variant="h3" component="h3">
              $10
            </Typography>
            <Typography variant="body1" component="p">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </Typography>
          </CardContent>
        </Card>
        <Card className="card">
          <CardContent>
            <Typography variant="h5" component="h2">
              Standard
            </Typography>
            <Typography variant="h3" component="h3">
              $20
            </Typography>
            <Typography variant="body1" component="p">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </Typography>
          </CardContent>
        </Card>
        <Card className="card">
          <CardContent>
            <Typography variant="h5" component="h2">
              Premium
            </Typography>
            <Typography variant="h3" component="h3">
              $30
            </Typography>
            <Typography variant="body1" component="p">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </Typography>
          </CardContent>
        </Card>
      </div>
    </Container>
  );
};

export default PriceTiers;
