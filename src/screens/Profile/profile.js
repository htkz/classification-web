import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

import Header from 'components/Header/header';
import Info from './info';
import ResetPassword from './resetPassword';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div role='tabpanel' hidden={value !== index} {...other}>
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    width: '100%',
    display: 'flex',
    height: 'calc(100vh - 64px)',
  },
  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`,
    minWidth: '200px',
    paddingTop: '48px',
  },
  container: {
    display: 'flex',
  },
  panel: {
    width: '100%',
  },
}));

export default function VerticalTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div>
      <Header />
      <div className={classes.container}>
        <div className={classes.root}>
          <Tabs
            orientation='vertical'
            variant='scrollable'
            value={value}
            onChange={handleChange}
            aria-label='Vertical tabs example'
            className={classes.tabs}
          >
            <Tab label='User Information' {...a11yProps(0)} />
            <Tab label='Change Password' {...a11yProps(1)} />
          </Tabs>
          <TabPanel className={classes.panel} value={value} index={0}>
            <Info />
          </TabPanel>
          <TabPanel className={classes.panel} value={value} index={1}>
            <ResetPassword />
          </TabPanel>
        </div>
      </div>
    </div>
  );
}
