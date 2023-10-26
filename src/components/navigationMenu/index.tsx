import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import HThemeSwitch from './ThemeSwitch';

export default function NavigationMenu() {
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
          >
            <MenuIcon />
          </IconButton>
          <Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
            H-CO
          </Typography>
          <HThemeSwitch sx={{ m: 1 }} defaultChecked />
        </Toolbar>
      </AppBar>
    </Box>
  );
}
//  <nav>
//    <HLink>Home</HLink>
//    <HLink>About Us</HLink>
//    <HLink>Services</HLink>
//    <HLink>Contact Us</HLink>
//    <HLink>Blog</HLink>
//  </nav>;
