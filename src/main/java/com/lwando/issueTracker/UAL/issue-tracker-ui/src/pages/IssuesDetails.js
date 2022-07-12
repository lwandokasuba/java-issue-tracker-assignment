/* eslint-disable react/prop-types */
import {
  Container, Grid, List, ListItem, ListItemText,
} from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ActionPaper, Wrapper } from '../components';
import { useIssue } from '../context/IssueContext';

function Issue({ inspection }) {
  if (!inspection) return <div />;
  return (
    <Container>
      <List>
        <Grid
          container
          direction="row"
          justifyContent="flex-start"
          alignItems="flex-start"
        >
          <Grid item xs={6}>
            {inspection.name && (
            <ListItem>
              <ListItemText primary="Name" secondary={inspection.name} />
            </ListItem>
            )}
            <ListItem>
              <ListItemText primary="Description" secondary={inspection.description} />
            </ListItem>
            <ListItem>
              <ListItemText primary="Date" secondary={inspection.date} />
            </ListItem>
          </Grid>
          <Grid item xs={6}>
            <ListItem>
              <ListItemText primary="Equipment Name" secondary={inspection.equipment.name} />
            </ListItem>
            <ListItem>
              <ListItemText primary="Equipment Description" secondary={inspection.equipment.description} />
            </ListItem>
            <ListItem>
              <ListItemText primary="Equipment Location" secondary={inspection.equipment.location} />
            </ListItem>
          </Grid>
          <Grid item>
            <ListItem>
              <ListItemText primary="Status" secondary={inspection.status.name} />
            </ListItem>
            <ListItem>
              <ListItemText primary="Status Description" secondary={inspection.status.description} />
            </ListItem>
          </Grid>
        </Grid>
      </List>
    </Container>
  );
}

export default function IssuesDetails() {
  const [inspection, setInspection] = useState();
  const { issueId } = useParams();
  const {
    gettingInspectionById,
    getInspectionByIdData,
    getInspectionById,
  } = useIssue();

  useEffect(() => {
    if (issueId) {
      getInspectionById(issueId);
    }
  }, [issueId]);

  useEffect(() => {
    if (getInspectionByIdData && getInspectionByIdData.inspectionById) {
      setInspection(getInspectionByIdData.inspectionById);
    }
  }, [getInspectionByIdData]);
  return (
    <Wrapper loading={gettingInspectionById}>
      <ActionPaper title="Inspection Details" />
      <Issue inspection={inspection} />
    </Wrapper>
  );
}
