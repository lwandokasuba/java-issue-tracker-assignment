/* eslint-disable react/jsx-props-no-spreading */
import React, { useEffect, useState } from 'react';
import {
  Autocomplete,
  Grid,
  TextField,
} from '@mui/material';
import MainDialog from '../MainDialog';
import { useIssue } from '../../context/IssueContext';

export default function AddInspectionDialog() {
  const [name, setName] = useState();
  const [description, setDescription] = useState();
  const [date, setDate] = useState();
  const [equipments, setEquipments] = useState();
  const [equipmentId, setEquipmentId] = useState();
  const [status, setStatus] = useState();
  const [statusId, setStatusId] = useState();
  const {
    addIssueDialog,
    setAddIssueDialog,
    addingInspection,
    errorAddingInspection,
    addInspection,
    addInspectionData,
    getEquipments,
    getEquipmentsData,
    getStatus,
    getStatusData,
    currentUser,
  } = useIssue();

  useEffect(() => {
    getEquipments();
    getStatus();
  }, []);

  useEffect(() => {
    if (addInspectionData && addInspectionData.addInspection) {
      setAddIssueDialog(false);
    }
  }, [addInspectionData]);

  useEffect(() => {
    if (getEquipmentsData && getEquipmentsData.equipments) {
      setEquipments(getEquipmentsData.equipments);
    }
  }, [getEquipmentsData]);

  useEffect(() => {
    if (getStatusData && getStatusData.status) {
      setStatus(getStatusData.status);
    }
  }, [getStatusData]);

  const handleSubmit = () => {
    addInspection({
      name,
      description: description || null,
      date: date || null,
      equipmentId: equipmentId || null,
      statusId: statusId || null,
      userId: currentUser.userId,
    });
  };

  return (
    <MainDialog
      openDialog={addIssueDialog}
      handleClose={() => setAddIssueDialog(!addIssueDialog)}
      title="Add Inspection"
      handleSubmit={handleSubmit}
      loading={addingInspection}
      error={errorAddingInspection}
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
        <Grid item xs={12} sm={12}>
          <Autocomplete
            autoSelect
            disableClearable
            onChange={(event, equipment) => {
              setEquipmentId(equipment.id);
            }}
            id="select-equipment-autocomplete"
            options={equipments || []}
            getOptionLabel={(option) => (`${option.name}`)}
            noOptionsText="No available equipments..."
            required
            renderInput={(params) => (
              <TextField
                {...params}
                label="Select equipments"
                variant="outlined"
                fullWidth
              />
            )}
          />
        </Grid>
        <Grid item xs={12} sm={12}>
          <Autocomplete
            autoSelect
            disableClearable
            onChange={(event, statu) => {
              setStatusId(statu.id);
            }}
            id="select-status-autocomplete"
            options={status || []}
            getOptionLabel={(option) => (`${option.name}`)}
            noOptionsText="No available status..."
            required
            renderInput={(params) => (
              <TextField
                {...params}
                label="Select status"
                variant="outlined"
                fullWidth
              />
            )}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            variant="outlined"
            label="date"
            name="date"
            id="date"
            type="date"
            fullWidth
            onChange={(e) => setDate(e.target.value)}
          />
        </Grid>
      </Grid>
    </MainDialog>
  );
}
