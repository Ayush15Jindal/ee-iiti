import React from "react";
import { Container, Grid, Typography } from "@mui/material";
import "./styles/template.css";
export default function Header(props) {
  return (
    <div className="header">
      <Grid
        container
        sx={{
          backgroundColor: "primary.main",
          height: "fit-content",
          overflow: "hidden",
        }}
      >
        <Grid item xs={6} paddingX={8} paddingY={2}>
          <Container>
            <Typography variant="h1" color="white">
              {props.title}
            </Typography>
            <Typography variant="p" color="white">
              {props.description}
            </Typography>
          </Container>
        </Grid>
        <Grid item xs={6} className="template-bg">
          {/* <img src={props.image} alt="" style={{ width: "100%" }} /> */}
        </Grid>
      </Grid>
    </div>
  );
}
