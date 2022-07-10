/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-console */
import React, { useState, useEffect } from 'react';
import {
  Avatar,
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
import { useNavigate } from 'react-router-dom';
import Loading from '../Loading';
import { useIssue } from '../../context/IssueContext';

export default function SignIn() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();
  const { login, currentUser, loadingLoggin } = useIssue();

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleSignIn = (e) => {
    e.preventDefault();
    login(email, password);
  };

  useEffect(() => {
    if (currentUser) {
      navigate('/');
    }
  }, [currentUser]);

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
            Log In
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
          {loadingLoggin && (<Loading />)}
        </Grid>
        <form noValidate>
          <TextField
            type="name"
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="username"
            name="name"
            placeholder="User Name"
            autoComplete="name"
            autoFocus
            onChange={(e) => setEmail(e.target.value)}
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
          <Button
            fullWidth
            variant="contained"
            color="primary"
            onClick={handleSignIn}
          >
            Sign In
          </Button>
        </form>
        <Grid align="center">
          <Link href="/signup" align="center">Don't have an account? Sign Up</Link>
        </Grid>
      </div>
      <Toolbar />
      <Toolbar />
    </Container>
  );
}
