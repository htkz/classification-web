import React, { useState } from 'react';

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

import { makeStyles } from '@material-ui/core/styles';
import { resetPasswordHandler } from 'Api/accounts';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
  },
  form: {
    width: '600px',
    marginTop: theme.spacing(1),
  },
  error: {
    color: 'red',
  },
  submit: {
    marginTop: '8px',
  },
}));

export default function ResetPassword() {
  const classes = useStyles();

  const [password, setPassword] = useState('');
  const [passwordRepeat, setPasswordRepeat] = useState('');
  const [error, setError] = useState(false);

  const submitHandler = async (event) => {
    event.preventDefault();
    if (password !== passwordRepeat) {
      setError(true);
      return;
    }

    try {
      await resetPasswordHandler(password);
      alert('Successfully updated the password!');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className={classes.root}>
      <form className={classes.form} onSubmit={submitHandler}>
        <TextField
          variant='outlined'
          margin='normal'
          required
          fullWidth
          label='Password'
          type='password'
          autoFocus
          value={password}
          onChange={(ev) => setPassword(ev.target.value)}
        />
        <TextField
          variant='outlined'
          margin='normal'
          required
          fullWidth
          label='Repeat Password'
          type='password'
          value={passwordRepeat}
          onChange={(ev) => setPasswordRepeat(ev.target.value)}
        />
        {error && <span className={classes.error}>Password is not same!</span>}
        <Button
          type='submit'
          fullWidth
          variant='contained'
          color='primary'
          className={classes.submit}
        >
          Reset Password
        </Button>
      </form>
    </div>
  );
}
