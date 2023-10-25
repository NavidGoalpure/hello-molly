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

const Home: React.FC = () => {
  const { theme, toggleTheme } = useHTheme();
  const [validatedData, setValidatedData] = useState<IOrganizationStructure>();
  const [isShowErrorModal, setIsShowErrorModal] = useState<boolean>(false);
  const { data, isLoading, isError } = useQuery<IOrganizationStructure>(
    QueryKeys.ORGANIZATION_DATA,
    fetchOrganizationData
  );
  useEffect(() => {
    if (data) {
      //validate data structure
      validateAndSendErrors(data, organizationSchema)
        .then(() => setValidatedData(data))
        .catch(() => setIsShowErrorModal(true));
    }
  }, [data]);

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
        {isShowErrorModal ? (
          <ErrorDialog isOpen={true} setIsOpen={setIsShowErrorModal} />
        ) : (
          'dataContent using the current theme.'
        )}
      </div>
    </div>
  );
};

export default Home;
