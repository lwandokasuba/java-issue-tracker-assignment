import React, { useEffect, useState } from 'react';
import {
  Grid,
  TextField,
} from '@mui/material';
import MainDialog from '../MainDialog';
import { useIssue } from '../../context/IssueContext';

export default function AddEquipmentDialog() {
  const [name, setName] = useState();
  const [description, setDescription] = useState();
  const [location, setLocation] = useState();
  const {
    addEquipmentDialog,
    setAddEquipmentDialog,
    addingEquipment,
    errorAddingEquipment,
    addEquipment,
    addEquipmentData,
  } = useIssue();

  useEffect(() => {
    if (addEquipmentData && addEquipmentData.addEquipment) {
      setAddEquipmentDialog(false);
    }
  }, [addEquipmentData]);

  const handleSubmit = () => {
    addEquipment(name, description, location);
  };

  return (
    <MainDialog
      openDialog={addEquipmentDialog}
      handleClose={() => setAddEquipmentDialog(!addEquipmentDialog)}
      title="Add Equipment"
      handleSubmit={handleSubmit}
      loading={addingEquipment}
      error={errorAddingEquipment}
    >
      <Grid
        container
        direction="row"
        alignItems="center"
        justifyContent="center"
        spacing={2}
        p={3}
      >
        <Grid item xs={12}>
          <TextField
            variant="outlined"
            required
            label="Name"
            name="name"
            id="name"
            fullWidth
            type="text"
            onChange={(e) => setName(e.target.value)}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            variant="outlined"
            label="Description"
            name="description"
            id="description"
            type="text"
            fullWidth
            onChange={(e) => setDescription(e.target.value)}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            variant="outlined"
            label="Location"
            name="location"
            id="location"
            type="text"
            fullWidth
            onChange={(e) => setLocation(e.target.value)}
          />
        </Grid>
      </Grid>
    </MainDialog>
  );
}
