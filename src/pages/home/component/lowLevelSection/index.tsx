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
import {
  getSlidesNumber,
  isThisNodeSelected,
  shouldComponentBeDisplayed,
} from './utils';
import { Devices } from '../../../../interfaces';
import { ShowableContext } from '../../contexts/showableContext';
import { NavigationContext } from '../../contexts/navigationContext';

interface Props {
  employees: IEmployee[] | undefined;
}

export default function LowLevelSection({ employees }: Props) {
  const { selectedNode, setSelectedNode } = useContext(NavigationContext);
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
          {employees?.map((employee, index) => {
            if (!showableLowLevels.includes(employee.id)) return null;
            // Check if the current employee is selected
            const isSelected: boolean = isThisNodeSelected({
              selectedNode,
              index,
            });

            // Function to toggle the selected node
            const toggleSelectedNode = () => {
              setSelectedNode(() =>
                isSelected ? null : { row: 3, column: index + 1 }
              );
            };
            return (
              <SwiperSlide key={employee.id}>
                <EmployeeCard
                  employee={employee}
                  isSelected={isSelected}
                  selectHandler={toggleSelectedNode}
                />
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
