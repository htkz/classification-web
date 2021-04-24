import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import PhoneAndroidOutlinedIcon from '@material-ui/icons/PhoneAndroidOutlined';
import DescriptionOutlinedIcon from '@material-ui/icons/DescriptionOutlined';
import EmailOutlinedIcon from '@material-ui/icons/EmailOutlined';
import BeachAccessIcon from '@material-ui/icons/BeachAccess';
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import WorkOutlineOutlinedIcon from '@material-ui/icons/WorkOutlineOutlined';
import PermIdentityOutlinedIcon from '@material-ui/icons/PermIdentityOutlined';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    width: '100%',
  },
  item: {
    width: '30%',
  },
}));

export default function Info() {
  const classes = useStyles();
  const user = JSON.parse(sessionStorage.getItem('user'));

  return (
    <div className={classes.root}>
      <ListItem className={classes.item}>
        <ListItemAvatar>
          <Avatar>
            <DescriptionOutlinedIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary='First Name' secondary={user.firstName} />
      </ListItem>
      <ListItem className={classes.item}>
        <ListItemAvatar>
          <Avatar>
            <DescriptionOutlinedIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary='Middle Name' secondary={user.middleName} />
      </ListItem>
      <ListItem className={classes.item}>
        <ListItemAvatar>
          <Avatar>
            <DescriptionOutlinedIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary='Last Name' secondary={user.lastName} />
      </ListItem>
      <ListItem className={classes.item}>
        <ListItemAvatar>
          <Avatar>
            <EmailOutlinedIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary='Email' secondary={user.email} />
      </ListItem>
      <ListItem className={classes.item}>
        <ListItemAvatar>
          <Avatar>
            <PhoneAndroidOutlinedIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary='Phone' secondary={user.phone} />
      </ListItem>
      <ListItem className={classes.item}>
        <ListItemAvatar>
          <Avatar>
            <HomeOutlinedIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary='Address' secondary={user.mailAddress} />
      </ListItem>
      <ListItem className={classes.item}>
        <ListItemAvatar>
          <Avatar>
            <WorkOutlineOutlinedIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary='Occupation' secondary={user.occupation} />
      </ListItem>
      <ListItem className={classes.item}>
        <ListItemAvatar>
          <Avatar>
            <PermIdentityOutlinedIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary='Username' secondary={user.username} />
      </ListItem>
    </div>
  );
}
