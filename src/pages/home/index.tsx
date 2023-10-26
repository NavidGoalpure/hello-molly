import React from 'react';
import Hero from './component/hero';
import SmartContent from './component/smartContent';
import Layout from '../../components/layout';

const Home: React.FC = () => {
  return (
    <Layout>
      <Hero />
      <SmartContent />
    </Layout>
  );
};

export default Home;
