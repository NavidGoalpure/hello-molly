// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
////////////////////////
import {
  IEmployee,
  IOrganizationStructure,
} from '../../../interfaces/employee';

import EmployeeCard from './employeeCard';
import { Container, Grid, styled } from '@mui/material';
import { useHTheme } from '../../../contexts/themeContext';
// import required modules

interface Props {
  employees: IEmployee[];
}

export default function EmployeeSlider({ employees }: Props) {
  const { theme } = useHTheme();
  return (
    <Wrapper theme={theme}>
      <Swiper navigation={true} modules={[Navigation]} className='mySwiper'>
        {/* <Swiper
        // spaceBetween={50}
        slidesPerView={1}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper: any) => console.log(swiper)}
      > */}
        {employees?.map((employee) => (
          <SwiperSlide>
            <EmployeeCard employee={employee} key={employee.id} />
          </SwiperSlide>
        ))}
      </Swiper>
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
