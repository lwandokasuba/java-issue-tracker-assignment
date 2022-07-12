import { List, ListItem, ListItemText } from '@mui/material';
import React from 'react';
import { ActionPaper, Wrapper } from '../components';

export default function About() {
  return (
    <Wrapper>
      <ActionPaper title="About the Developer" />
      <List>
        <ListItem>
          <ListItemText primary="Full Names" secondary="Lwando Kasuba" />
        </ListItem>
        <ListItem>
          <ListItemText primary="SIN Number" secondary="19*****" />
        </ListItem>
        <ListItem>
          <ListItemText primary="Program of Study" secondary="BSc Computer Science" />
        </ListItem>
        <ListItem>
          <ListItemText primary="Year of Study" secondary="3" />
        </ListItem>
      </List>
    </Wrapper>
  );
}
