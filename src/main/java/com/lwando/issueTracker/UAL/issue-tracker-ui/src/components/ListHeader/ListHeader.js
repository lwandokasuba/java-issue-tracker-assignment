import { Container, Grid } from '@mui/material';
import React from 'react';

export default function ListHeader() {
  return (
    <Container>
      <Grid container spacing={4}>
        <Grid item>
          <div>Hi</div>
        </Grid>
        <Grid item>
          <div>Hi</div>
        </Grid>
      </Grid>
    </Container>
  );
}
