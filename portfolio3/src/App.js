import { Container, Grid } from "@material-ui/core";
import React from "react";
import "./App.css";

function App() {
  return (
    <Container>
      <Grid container>
        <Grid
          item
          xs={12}
          sm={12}
          md={4}
          lg={3}
          style={{ backgroundColor: "blue" }}
        >
          <Profile />
        </Grid>
        <Grid item xs style={{ backgroundColor: "red" }}>
          xyz
        </Grid>
      </Grid>
    </Container>
  );
}

export default App;
