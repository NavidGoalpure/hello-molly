import React from 'react';
import Hero from './component/hero';
import NavigationMenu from '../../components/navigationMenu';
import SmartContent from './component/smartContent';

const Home: React.FC = () => {
  return (
    <div>
      <NavigationMenu />
      {/* <Hero /> */}

      <SmartContent />
    </div>
  );
};

export default Home;
