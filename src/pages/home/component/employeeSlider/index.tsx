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
} from '../../../../interfaces/employee';

import EmployeeCard from '../employeeCard';
import { Container, Grid, styled } from '@mui/material';
import { useHTheme } from '../../../../contexts/themeContext';
import { useDevice } from '../../../../hooks/useDevice';
import { getSlidesNumber } from './utils';
import { Devices } from '../../../../interfaces';
// import required modules

interface Props {
  employees: IEmployee[];
}

export default function EmployeeSlider({ employees }: Props) {
  const { theme } = useHTheme();
  const device = useDevice();
  const slidesNumber = getSlidesNumber(device);
  return (
    <Wrapper theme={theme}>
      <SliderWrap>
        <StyledSwiper
          navigation={device === Devices.TABLET}
          modules={[Navigation]}
          spaceBetween={1}
          slidesPerView={slidesNumber}
        >
          {/* onSlideChange={() => console.log('slide change')}
onSwiper={(swiper: any) => console.log(swiper)} */}

          {employees?.map((employee) => (
            <SwiperSlide>
              <EmployeeCard employee={employee} key={employee.id} />
            </SwiperSlide>
          ))}
        </StyledSwiper>
      </SliderWrap>
    </Wrapper>
  );
}
const Wrapper = styled(Grid)`
  background-color: ${({ theme }) => theme.palette.background.default};
  color: ${({ theme }) => theme.palette.text.primary};
`;
const StyledSwiper = styled(Swiper)`
  padding: 3rem;
`;
export const SliderWrap = styled('div')`
  position: relative;
  .swiper {
    width: 80%;
    margin-top: 30px;
    margin-left: auto;
    margin-right: auto;
  }

  .swiper-slide {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
