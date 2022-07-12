/* eslint-disable react/prop-types */
import { Container, Paper } from '@mui/material';
import React from 'react';
import LinearLoading from '../LinearLoading';

export default function Wrapper({ children, loading }) {
  return (
    <Container
      maxWidth="lg"
      sx={{
        marginTop: 5,
        marginBottom: 10,
      }}
    >
      <Paper sx={{ minHeight: 200, backgroundColor: 'grey.200' }}>
        {loading && <LinearLoading activate={loading} />}
        {children}
      </Paper>
    </Container>
  );
}
