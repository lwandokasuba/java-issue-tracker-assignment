import { CircularProgress, Grid } from '@mui/material';
import React from 'react';

export default function Loading() {
  return (
    <Grid
      container
      direction="row"
      justifyContent="center"
      alignItems="center"
      style={{ height: '100%' }}
    >
      <CircularProgress />
    </Grid>
  );
}
