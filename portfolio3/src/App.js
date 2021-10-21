import { Container, Grid } from "@material-ui/core";
import React from "react";
import "./App.css";

function App() {
  return (
    <Container>
      <Grid container>
        <Grid item xs={12} sm={12} md={4} lg={3}>
          ABC
        </Grid>
        <Grid item xs>
          xyz
        </Grid>
      </Grid>
    </Container>
  );
}

export default App;
