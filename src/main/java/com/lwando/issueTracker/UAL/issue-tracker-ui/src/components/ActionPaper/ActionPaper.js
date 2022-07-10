/* eslint-disable react/prop-types */
import React from 'react';
import {
  Container,
  Grid,
  Grow,
  IconButton,
  Typography,
} from '@mui/material';

export default function ActionPaper({
  title, actionComponent, actionSetter, actionGetter,
}) {
  const handleClick = () => {
    actionSetter(!actionGetter);
  };
  return (
    <Grow in timeout={2000} sx={{ backgroundColor: 'primary.main' }}>
      <Container>
        <Grid
          container
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          p={1}
        >
          <Grid item>
            {title && <Typography color="white">{title}</Typography>}
          </Grid>
          <Grid>
            {actionComponent && (
            <IconButton sx={{ color: 'white' }} onClick={handleClick}>
              {actionComponent}
            </IconButton>
            )}
          </Grid>
        </Grid>
      </Container>
    </Grow>
  );
}
