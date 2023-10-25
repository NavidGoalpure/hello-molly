import React from 'react';
import { useHTheme } from '../../contexts/themeContext';
import Hero from './component';
import NavigationMenu from '../../components/navigationMenu';

const Home: React.FC = () => {
  const { theme, toggleTheme } = useHTheme();

  return (
    <div>
      <NavigationMenu />
      {/* <Hero /> */}
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
