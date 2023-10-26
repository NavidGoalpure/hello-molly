import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import HThemeSwitch from './ThemeSwitch';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import HLink from '../../elements/hLink';

export default function NavigationMenu() {
  const [isDrawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (open: boolean) => {
    setDrawerOpen(open);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position='static'>
        <Toolbar>
          <IconButton
            size='large'
            edge='start'
            color='inherit'
            aria-label='menu'
            sx={{ mr: 2 }}
            onClick={() => toggleDrawer(true)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
            H-CO
          </Typography>
          <HThemeSwitch sx={{ m: 1 }} defaultChecked />
        </Toolbar>
      </AppBar>
      <Drawer
        anchor='left'
        open={isDrawerOpen}
        onClose={() => toggleDrawer(false)}
      >
        <List>
          <ListItem>
            <HLink href='/'>Home</HLink>
          </ListItem>
          <ListItem>
            <HLink href='about-us'>About Us</HLink>
          </ListItem>
          <ListItem>
            <HLink href='services'>Services</HLink>
          </ListItem>
          <ListItem>
            <HLink href='contact-us'>Contact Us</HLink>
          </ListItem>
          <ListItem>
            <HLink href='blog'>Blog</HLink>
          </ListItem>
        </List>
      </Drawer>
    </Box>
  );
}
