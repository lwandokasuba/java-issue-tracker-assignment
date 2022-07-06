import React from 'react';
import { Fade, LinearProgress } from '@mui/material';
import PropTypes from 'prop-types';

export default function LinearLoading({ activate }) {
  return (
    <Fade in={activate}>
      <LinearProgress />
    </Fade>
  );
}

LinearLoading.propTypes = {
  activate: PropTypes.bool,
};

LinearLoading.defaultProps = {
  activate: false,
};
