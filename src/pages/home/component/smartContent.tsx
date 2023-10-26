import * as React from 'react';
import HomeSkeleton from './skeleton';
import ErrorDialog from './errorModal';
import { useState } from 'react';
import { IOrganizationStructure } from '../../../interfaces/employee';
import { useQuery } from 'react-query';
import { QueryKeys } from '../../../interfaces/query';
import { fetchOrganizationData } from '../../../queries/fetchOrganizationData';
import { organizationSchema } from '../../../queries/fetchOrganizationData/yupSchema';
import { validateAndSendErrors } from '../../../queries/utils';
import { Grid, styled } from '@mui/material';
import { useHTheme } from '../../../contexts/themeContext';
import 'swiper/css';
import CeoSection from './CeoSection';
import MidLevelSection from './midLevelSection';
import LowLevelSection from './lowLevelSection';
import { ShowableContextProvider } from '../contexts/showableContext';
import { NavigationContextProvider } from '../contexts/navigationContext';

export default function SmartContent() {
  const { theme } = useHTheme();
  const [isShowErrorModal, setIsShowErrorModal] = useState<boolean>(false);
  const [validatedData, setValidatedData] = useState<IOrganizationStructure>();
  const { data, isLoading, isError } = useQuery<IOrganizationStructure>(
    QueryKeys.ORGANIZATION_DATA,
    fetchOrganizationData
  );
  React.useEffect(() => {
    if (data) {
      //validate data structure
      validateAndSendErrors(data, organizationSchema)
        .then(() => setValidatedData(data))
        .catch(() => setIsShowErrorModal(true));
    }
  }, [data]);
  //
  if (isError)
    return <ErrorDialog isOpen={true} setIsOpen={setIsShowErrorModal} />;
  //
  if (isLoading) return <HomeSkeleton />;

  return (
    <Wrapper theme={theme}>
      <ShowableContextProvider>
        <NavigationContextProvider>
          <CeoSection employee={validatedData?.ceo} />
          <MidLevelSection employees={validatedData?.midLevels} />
          <LowLevelSection employees={validatedData?.lowLevel} />
        </NavigationContextProvider>
      </ShowableContextProvider>
    </Wrapper>
  );
}
const Wrapper = styled(Grid)`
  background-color: ${({ theme }) => theme.palette.background.default};
  color: ${({ theme }) => theme.palette.text.primary};
  padding-top: 3rem;
  padding-bottom: 3rem;
`;
