/* eslint-disable react/prop-types */
import React from 'react';
import MenuTwoToneIcon from '@mui/icons-material/MenuTwoTone';
import MenuOpenTwoToneIcon from '@mui/icons-material/MenuOpenTwoTone';
import LockOpenTwoToneIcon from '@mui/icons-material/LockOpenTwoTone';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import {
  AppBar,
  Grid,
  IconButton,
  Toolbar,
  Typography,
} from '@mui/material';
// import {
//   useNavigate,
// } from 'react-router-dom';
// import Toolbar from '@mui/material/Toolbar';
// import LockTwoToneIcon from '@mui/icons-material/LockTwoTone';
import { useIssue } from '../../context/IssueContext';

export default function Header() {
  // const navigate = useNavigate();
  const { currentUser, menuOpen, setMenuOpen } = useIssue();

  function handleSubmit(e) {
    e.preventDefault();
    // logout().then(() => {
    //   navigate(app.loginPath);
    // }).catch(() => {
    //   // console.log('Logout failed!');
    // });
  }

  // const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <AppBar position="fixed" elevation={0} sx={{ zIndex: 2 }}>
      <Toolbar>
        <Grid
          container
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Grid item>
            <Grid
              container
              direction="row"
              justifyContent="flex-start"
              alignItems="center"
            >
              <IconButton
                color="inherit"
                aria-label="open drawer"
                onClick={() => setMenuOpen(!menuOpen)}
                edge="start"
                style={{ paddingTop: '0.4em' }}
                size="large"
              >
                {menuOpen && (
                  <MenuOpenTwoToneIcon />
                )}
                {!menuOpen && (
                  <MenuTwoToneIcon />
                )}
              </IconButton>
            </Grid>
          </Grid>
          <Grid item>
            <Grid
              container
              direction="row"
              justifyContent="flex-end"
              alignItems="center"
            >
              {currentUser && (
                <>
                  <Grid item>
                    <Typography>
                      Welcome,
                      {' '}
                      {currentUser.username}
                    </Typography>
                  </Grid>
                  <Grid item>
                    <IconButton
                      color="secondary"
                      onClick={(e) => handleSubmit(e)}
                      size="large"
                    >
                      <LockOpenTwoToneIcon />
                    </IconButton>
                    <IconButton
                      color="secondary"
                  // onClick={viewAccountDetails}
                      size="large"
                    >
                      <AccountCircleIcon />
                    </IconButton>
                  </Grid>
                </>
              )}
            </Grid>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
}
