import React, { useState } from 'react';

import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

import { register } from 'Api/accounts';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%',
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function Register() {
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [firstName, setFirstName] = useState('');
  const [middleName, setMiddleName] = useState('');
  const [lastName, setLastName] = useState('');
  const [mailAddress, setMailAddress] = useState('');
  const [occupation, setOccupation] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState(false);
  const [phoneError, setPhoneError] = useState(false);

  const classes = useStyles();

  const checkEmail = (email) => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email.toLowerCase());
  };

  const checkPhone = (phone) => {
    const re = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    return re.test(phone);
  };

  const formCheck = () => {
    let result = true;
    if (!checkEmail(email)) {
      setEmailError(true);
      result = false;
    }
    if (!checkPhone(phone)) {
      setPhoneError(true);
      result = false;
    }
    return result;
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    if (!formCheck()) return;
    try {
      const data = {
        email,
        phone,
        firstName,
        middleName,
        lastName,
        mailAddress,
        occupation,
        username,
        password,
      };
      await register(data);
      alert('Successfully registered');
    } catch (error) {
      if (error.response) {
        alert(`Error: ${error.response.data.error.message}`);
      }
    }
  };

  return (
    <Container component='main' maxWidth='sm'>
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component='h1' variant='h5'>
          Sign up
        </Typography>
        <form className={classes.form} onSubmit={onSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={4}>
              <TextField
                variant='outlined'
                required
                fullWidth
                label='First Name'
                autoFocus
                value={firstName}
                onChange={(ev) => setFirstName(ev.target.value)}
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <TextField
                variant='outlined'
                fullWidth
                label='Middle Name'
                value={middleName}
                onChange={(ev) => setMiddleName(ev.target.value)}
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <TextField
                variant='outlined'
                required
                fullWidth
                label='Last Name'
                value={lastName}
                onChange={(ev) => setLastName(ev.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                error={emailError}
                variant='outlined'
                required
                fullWidth
                label='Email Address'
                name='email'
                type='email'
                value={email}
                onChange={(ev) => {
                  const newEmail = ev.target.value;
                  setEmail(newEmail);
                  if (checkEmail(newEmail)) {
                    setEmailError(false);
                  }
                }}
                helperText='Format: aaa@bbb.cc'
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant='outlined'
                required
                fullWidth
                label='Username'
                value={username}
                onChange={(ev) => setUsername(ev.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant='outlined'
                required
                fullWidth
                name='password'
                label='Password'
                type='password'
                value={password}
                onChange={(ev) => setPassword(ev.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                error={phoneError}
                variant='outlined'
                required
                fullWidth
                name='phone'
                label='Phone'
                type='tel'
                value={phone}
                onChange={(ev) => {
                  const newPhone = ev.target.value;
                  setPhone(newPhone);
                  if (checkPhone(newPhone)) {
                    setPhoneError(false);
                  }
                }}
                helperText='Format: 123-321-4567'
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant='outlined'
                required
                fullWidth
                label='Mail Address'
                value={mailAddress}
                onChange={(ev) => setMailAddress(ev.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant='outlined'
                required
                fullWidth
                label='Occupation'
                value={occupation}
                onChange={(ev) => setOccupation(ev.target.value)}
              />
            </Grid>
          </Grid>
          <Button
            type='submit'
            fullWidth
            variant='contained'
            color='primary'
            className={classes.submit}
          >
            Sign Up
          </Button>
          <Grid container justify='center'>
            <Grid item>
              <Link to='/login' variant='body2'>
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
}
