import React, { useEffect, useState } from 'react';
import { useHTheme } from '../../contexts/themeContext';
import Hero from './component/hero';
import NavigationMenu from '../../components/navigationMenu';
import { useQuery } from 'react-query';
import { IOrganizationStructure } from '../../interfaces/employee';
import { QueryKeys } from '../../interfaces/query';
import { fetchOrganizationData } from '../../queries/fetchOrganizationData';
import { organizationSchema } from '../../queries/fetchOrganizationData/yupSchema';
import { validateAndSendErrors } from '../../queries/utils';
import ErrorDialog from './component/errorModal';
import HomeSkeleton from './component/skeleton';
import SmartContent from './component/smartContent';

const Home: React.FC = () => {
  const { theme, toggleTheme } = useHTheme();

  ///loading
  return (
    <div>
      <NavigationMenu />
      {/* <Hero /> */}

      <SmartContent />
    </div>
  );
};

export default Home;
