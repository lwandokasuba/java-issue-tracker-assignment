import React, { useEffect, useState } from 'react';
import AddIcon from '@mui/icons-material/Add';
import {
  List, ListItem, ListItemText, Divider,
} from '@mui/material';
import {
  ActionPaper, AddEquipmentDialog, Wrapper,
} from '../components';
import { useIssue } from '../context/IssueContext';

export default function Equipments() {
  const [equipments, setEquipments] = useState();
  const {
    addEquipmentDialog,
    setAddEquipmentDialog,
    getEquipments,
    gettingEquipments,
    getEquipmentsData,
    addEquipmentData,
    refetchEquipments,
  } = useIssue();

  useEffect(() => {
    getEquipments();
  }, []);

  useEffect(() => {
    refetchEquipments();
  }, [addEquipmentData]);

  useEffect(() => {
    if (getEquipmentsData && getEquipmentsData.equipments) {
      setEquipments(getEquipmentsData.equipments);
    }
  }, [getEquipmentsData]);
  return (
    <>
      <Wrapper loading={gettingEquipments}>
        <ActionPaper
          title="Equipments"
          actionComponent={<AddIcon />}
          actionGetter={addEquipmentDialog}
          actionSetter={setAddEquipmentDialog}
        />
        <List>
          <ListItem sx={{ color: 'primary.main' }}>
            <ListItemText primary="ID" />
            <ListItemText primary="Name" />
            <ListItemText primary="Description" />
            <ListItemText primary="Location" />
          </ListItem>
          <Divider light />
          {equipments && equipments.map((equipment) => (
            <ListItem
              button
              component="a"
              href={`/equipment/${equipment.id}`}
              key={equipment.id}
              style={{
                padding: '1.5em',
                paddingBottom: '1.5em',
              }}
            >
              <ListItemText primary={equipment.id} />
              <ListItemText primary={equipment.name} />
              <ListItemText primary={equipment.description} />
              <ListItemText primary={equipment.location} />
            </ListItem>
          ))}
        </List>
      </Wrapper>
      <AddEquipmentDialog />
    </>
  );
}
