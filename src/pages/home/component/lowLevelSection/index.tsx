import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { IEmployee } from '../../../../interfaces/employee';
import EmployeeCard from '../employeeCard';
import { Divider, Grid, styled } from '@mui/material';
import { useHTheme } from '../../../../contexts/themeContext';
import { useDevice } from '../../../../hooks/useDevice';
import { useContext } from 'react';
import { getSlidesNumber, shouldComponentBeDisplayed } from './utils';
import { Devices } from '../../../../interfaces';
import { ShowableContext } from '../../contexts/showableContext';

interface Props {
  employees: IEmployee[] | undefined;
}

export default function LowLevelSection({ employees }: Props) {
  const { theme } = useHTheme();
  const device = useDevice();
  const { isShowCeoChildren, showableLowLevels } = useContext(ShowableContext);

  const isShowComponent = shouldComponentBeDisplayed({
    employees,
    showableLowLevels,
    isShowCeoChildren,
  });

  if (!isShowComponent) {
    return null;
  }

  const slidesNumber = getSlidesNumber(device);

  return (
    <Wrapper theme={theme}>
      <Divider>Low Levels</Divider>

      <SliderWrap>
        <StyledSwiper
          navigation={device !== Devices.MOBILE}
          modules={[Navigation]}
          spaceBetween={1}
          slidesPerView={slidesNumber}
        >
          {employees?.map((employee) => {
            if (!showableLowLevels.includes(employee.id)) return null;
            return (
              <SwiperSlide key={employee.id}>
                <EmployeeCard employee={employee} isSelected />
              </SwiperSlide>
            );
          })}
        </StyledSwiper>
      </SliderWrap>
    </Wrapper>
  );
}

const Wrapper = styled(Grid)`
  background-color: ${({ theme }) => theme.palette.background.default};
  color: ${({ theme }) => theme.palette.text.primary};
  padding-top: 2rem;
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
}
`;
