import React from 'react';
import Hero from './component/hero';
import SmartContent from './component/smartContent';
import Layout from '../../components/layout';
import { SearchInputContextProvider } from './contexts/searchInput';

const Home: React.FC = () => {
  return (
    <Layout>
      <SearchInputContextProvider>
        <Hero />
        <SmartContent />
      </SearchInputContextProvider>
    </Layout>
  );
};

export default Home;
