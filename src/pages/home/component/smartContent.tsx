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
import EmployeeCard from './employeeCard';
import { Container, Grid, styled } from '@mui/material';
import { useHTheme } from '../../../contexts/themeContext';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import EmployeeSlider from './employeeSlider';

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
  //error
  if (isError)
    return <ErrorDialog isOpen={true} setIsOpen={setIsShowErrorModal} />;
  // navid loading
  if (isLoading) return <HomeSkeleton />;

  return (
    <Wrapper theme={theme}>
      <CeoContainer>
        {validatedData?.ceo && <EmployeeCard employee={validatedData.ceo} />}
      </CeoContainer>
      {validatedData?.midLevels && (
        <EmployeeSlider employees={validatedData.midLevels} />
      )}
    </Wrapper>
  );
}
const Wrapper = styled(Grid)`
  background-color: ${({ theme }) => theme.palette.background.default};
  color: ${({ theme }) => theme.palette.text.primary};
`;
const CeoContainer = styled('div')`
  display: flex;
  justify-content: center;
  align-items: center;
`;
