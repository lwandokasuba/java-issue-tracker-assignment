import React, { useEffect, useState } from 'react';
import AddIcon from '@mui/icons-material/Add';
import {
  List, ListItem, ListItemText, Divider,
} from '@mui/material';
import {
  ActionPaper, AddInspectionDialog, Wrapper,
} from '../components';
import { useIssue } from '../context/IssueContext';

export default function Issues() {
  const [issues, setIssues] = useState();
  const {
    addIssueDialog,
    setAddIssueDialog,
    gettingInspections,
    getInspectionsData,
    getInspections,
    refetchInspections,
    addInspectionData,
  } = useIssue();

  useEffect(() => {
    getInspections();
  }, []);

  useEffect(() => {
    refetchInspections();
  }, [getInspectionsData, addInspectionData]);

  useEffect(() => {
    if (getInspectionsData && getInspectionsData.inspections) {
      setIssues(getInspectionsData.inspections);
    }
  }, [getInspectionsData]);
  return (
    <>
      <Wrapper loading={gettingInspections}>
        <ActionPaper
          title="Inspections"
          actionComponent={<AddIcon />}
          actionGetter={addIssueDialog}
          actionSetter={setAddIssueDialog}
        />
        <List>
          <ListItem sx={{ color: 'primary.main' }}>
            <ListItemText primary="ID" />
            <ListItemText primary="Name" />
            <ListItemText primary="Description" />
            <ListItemText primary="Date" />
          </ListItem>
          <Divider light />
          {issues && issues.map((issue) => (
            <ListItem
              button
              component="a"
              href={`/issue/${issue.id}`}
              key={issue.id}
              style={{
                padding: '1.5em',
                paddingBottom: '1.5em',
              }}
            >
              <ListItemText primary={issue.id} />
              <ListItemText primary={issue.name} />
              <ListItemText primary={issue.description} />
              <ListItemText primary={issue.date} />
            </ListItem>
          ))}
        </List>
      </Wrapper>
      <AddInspectionDialog />
    </>
  );
}
