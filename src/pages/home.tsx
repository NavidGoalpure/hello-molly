import React from 'react';
import Button from '@mui/material/Button';
import { useHTheme } from '../contexts/themeContext';
import NavigationMenu from '../elements/navigationMenu';
import Hero from '../component';

const Home: React.FC = () => {
  const { theme, toggleTheme } = useHTheme();

  return (
    <div>
      <NavigationMenu />
      <Hero />
      <Button variant='contained' onClick={toggleTheme}>
        Toggle Theme
      </Button>
      <div
        style={{
          backgroundColor: theme.palette.background.default,
          color: theme.palette.text.primary,
        }}
      >
        Content using the current theme.
      </div>
    </div>
  );
};

export default Home;
