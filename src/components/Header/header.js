import React, { useState } from 'react';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';

import { makeStyles } from '@material-ui/core/styles';
import { useHistory, Link } from 'react-router-dom';

const Idle = require('react-idle').default;

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    color: 'white',
  },
  titleLink: {
    color: '#ccc',
    marginLeft: '1rem',
    padding: '10%, 0',
  },
  titleWrapper: {
    flexGrow: 1,
    display: 'flex',
  },
}));

export default function MenuAppBar() {
  const classes = useStyles();
  const history = useHistory();
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const logoutHandler = () => {
    sessionStorage.clear();
    history.push('/');
  };

  return (
    <div className={classes.root}>
      <AppBar position='static'>
        <Toolbar>
          <div className={classes.titleWrapper}>
            <Typography
              component={Link}
              to='/'
              variant='h6'
              className={classes.title}
              style={{ textDecoration: 'none' }}
            >
              Email Classification System
            </Typography>
            <Typography
              component={Link}
              to='/'
              variant='h6'
              className={classes.titleLink}
              style={{ textDecoration: 'none' }}
            >
              Home
            </Typography>
            <Typography
              component={Link}
              to='/profile'
              variant='h6'
              className={classes.titleLink}
              style={{ textDecoration: 'none' }}
            >
              Profile
            </Typography>
          </div>

          <div>
            <IconButton
              aria-label='account of current user'
              aria-controls='menu-appbar'
              aria-haspopup='true'
              onClick={handleMenu}
              color='inherit'
            >
              <AccountCircle />
            </IconButton>
            <Menu
              id='menu-appbar'
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={open}
              onClose={handleClose}
            >
              <MenuItem onClick={() => history.push('/profile')}>
                Profile
              </MenuItem>
              <MenuItem onClick={logoutHandler}>Logout</MenuItem>
            </Menu>
          </div>
        </Toolbar>
      </AppBar>
      <Idle
        timeout={1000 * 60 * 2}
        onChange={({ idle }) => {
          if (idle && Boolean(sessionStorage.getItem('user'))) {
            sessionStorage.clear();
            history.push('/');
            alert('You have been logged out due to long time no response!');
          }
        }}
      />
    </div>
  );
}
