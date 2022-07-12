import { Container, Grid, Typography } from '@mui/material';
import React from 'react';
import logo from '../assets/zescologo.png';

export default function Home() {
  return (
    <Container>
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
      >
        <Grid item xs={12} align="center">
          <img alt="logo" src={logo} width="200" />
        </Grid>
        <Grid item>
          <Typography variant="h4">Welcome to the Zesco Limited Issue Tracking Web App</Typography>
        </Grid>
      </Grid>
    </Container>
  );
}
