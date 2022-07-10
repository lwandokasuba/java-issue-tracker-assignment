/* eslint-disable react/prop-types */
import React from 'react';
import BuildIcon from '@mui/icons-material/Build';
import HomeIcon from '@mui/icons-material/Home';
import BugReportIcon from '@mui/icons-material/BugReport';
import InfoIcon from '@mui/icons-material/Info';
import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
// import {
//   useNavigate,
// } from 'react-router-dom';
import { useIssue } from '../../context/IssueContext';

const drawerWidth = 240;
const drawerList = [
  {
    id: 0,
    name: 'Home',
    href: '/',
    icon: HomeIcon,
  },
  {
    id: 1,
    name: 'Issues',
    href: '/issues',
    icon: BugReportIcon,
  },
  {
    id: 2,
    name: 'Equipments',
    href: '/equipments',
    icon: BuildIcon,
  },
  {
    id: 3,
    name: 'About',
    href: '/about',
    icon: InfoIcon,
  },
];

export default function DrawerComponent() {
  const { menuOpen } = useIssue();

  const drawer = (
    <div>
      <List sx={{ paddingTop: 10 }}>
        {drawerList.map((item) => (
          <ListItem button component="a" href={item.href} key={item.id}>
            <ListItemIcon>
              <item.icon />
            </ListItemIcon>
            <ListItemText primary={item.name} />
          </ListItem>
        ))}
      </List>
    </div>
  );
  return (
    <Drawer
      sx={{
        width: drawerWidth,
        height: '100%',
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: drawerWidth,
          boxSizing: 'border-box',
        },
        zIndex: 1,
      }}
      variant="temporary"
      anchor="left"
      open={menuOpen}
    >
      {drawer}
    </Drawer>
  );
}
