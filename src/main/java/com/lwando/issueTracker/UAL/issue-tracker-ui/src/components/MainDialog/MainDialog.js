/* eslint-disable react/prop-types */
/* eslint-disable no-console */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import { Grid } from '@mui/material';
import LinearLoading from '../LinearLoading';

const Transition = React.forwardRef((props, ref) => <Slide direction="up" ref={ref} {...props} />);

export default function MainDialog({
  openDialog,
  handleClose,
  loading,
  title,
  error,
  children,
  handleSubmit,
}) {
  return (
    <div>
      <Dialog
        open={openDialog}
        TransitionComponent={Transition}
        onClose={handleClose}
        fullWidth
        aria-describedby="add-item-dialog-slide-description"
      >
        {loading && <LinearLoading activate={loading} />}
        <DialogTitle sx={{ backgroundColor: 'primary.main' }}>
          {title}
        </DialogTitle>
        <DialogContent>
          <Grid
            container
            direction="row"
            alignItems="center"
            justifyContent="center"
            spacing={2}
            p={3}
          >
            {error && (
              <Grid item>
                <div>error</div>
              </Grid>
            )}
          </Grid>
          {children}
        </DialogContent>
        <DialogActions>
          <Grid
            container
            direction="row"
            alignItems="center"
            justifyContent="center"
          >
            <Grid item p={1}>
              <Button onClick={handleClose} variant="contained">Cancel</Button>
            </Grid>
            <Grid item p={1}>
              <Button onClick={handleSubmit} variant="contained">Submit</Button>
            </Grid>
          </Grid>
        </DialogActions>
      </Dialog>
    </div>
  );
}
