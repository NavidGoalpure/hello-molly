import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Link from '@mui/material/Link';
import HLink from './hLink';

export default function NavigationMenu() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position='static'>
        {' '}
        <Toolbar sx={{ flexWrap: 'wrap' }}>
          <Typography variant='h6' color='inherit' noWrap sx={{ flexGrow: 1 }}>
            H-CO
          </Typography>
          <nav>
            <HLink>Home</HLink>
            <HLink>About Us</HLink>
            <HLink>Services</HLink>
            <HLink>Contact Us</HLink>
            <HLink>Blog</HLink>
          </nav>
          <Button href='#' variant='outlined' sx={{ my: 1, mx: 1.5 }}>
            Login
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
