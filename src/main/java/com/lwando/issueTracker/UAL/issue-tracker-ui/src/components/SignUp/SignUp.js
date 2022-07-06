/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-console */
import React, { useEffect, useState } from 'react';
import {
  Avatar,
  Autocomplete,
  Button,
  CssBaseline,
  TextField,
  Typography,
  Container,
  Toolbar,
  Grid,
  Link,
  InputAdornment,
  IconButton,
} from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Loading from '../Loading';
import { useIssue } from '../../context/IssueContext';

export default function SignUp() {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();
  const [correctPassword, setCorrectPassword] = useState();
  const [roles, setRoles] = useState();
  const [roleId, setRoleId] = useState();
  const [showPassword, setShowPassword] = useState(false);
  // const [loadingCurrentUser, setLoadingCurrentUser] = useState(false);

  const {
    errorGettingRole,
    getRoleData,
    getRoles,
    gettingRole,
    addUser,
  } = useIssue();

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  useEffect(() => {
    if (password && confirmPassword) {
      setCorrectPassword(password === confirmPassword ? 'Passwords match' : 'Passwords do not match');
    }
  }, [confirmPassword]);

  useEffect(() => {
    getRoles();
  }, []);

  useEffect(() => {
    if (getRoleData && getRoleData.role) {
      setRoles(getRoleData.role);
    }
  }, [getRoleData, errorGettingRole]);

  const handleAddUser = (e) => {
    e.preventDefault();
    addUser(username, password, roleId);
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Toolbar />
      <div>
        <Grid align="center">
          <Avatar sx={{ bgcolor: 'primary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign Up
          </Typography>
          {/* {loginError && (
          <Typography variant="body2" color="error">
            Failed to login
          </Typography>
          )}
          {redirectError && (
          <Typography variant="body2" color="error">
            Failed to continue with google
          </Typography>
          )} */}
          {gettingRole && (<Loading />)}
        </Grid>
        <form noValidate>
          <TextField
            type="username"
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="username"
            name="username"
            placeholder="username"
            autoComplete="username"
            autoFocus
            onChange={(e) => setUsername(e.target.value)}
          />
          <Autocomplete
            disablePortal
            id="combo-box-demo"
            fullWidth
            onChange={(event, option) => setRoleId(option.id)}
            options={roles || []}
            getOptionLabel={(option) => (`${option.name}`)}
            noOptionsText="No available roles..."
            renderInput={(params) => <TextField {...params} label="Role" />}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            placeholder="Password"
            type={showPassword ? 'text' : 'password'}
            id="password"
            autoComplete="current-password"
            onChange={(e) => setPassword(e.target.value)}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="confirm password"
            placeholder="Confirm Password"
            type={showPassword ? 'text' : 'password'}
            id="confirmpassword"
            autoComplete="current-password"
            onChange={(e) => setConfirmPassword(e.target.value)}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
          {correctPassword && (
            <Typography>{correctPassword}</Typography>
          )}
          <Button
            fullWidth
            variant="contained"
            color="primary"
            onClick={handleAddUser}
          >
            Sign In
          </Button>
        </form>
        <Grid align="center">
          <Link href="/login" align="center">have an account? Sign In</Link>
        </Grid>
      </div>
      <Toolbar />
      <Toolbar />
    </Container>
  );
}
