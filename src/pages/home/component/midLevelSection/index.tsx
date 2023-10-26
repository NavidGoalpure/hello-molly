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
import { Divider, Grid, styled } from '@mui/material';
import { useHTheme } from '../../../../contexts/themeContext';
import { useDevice } from '../../../../hooks/useDevice';
import { Devices } from '../../../../interfaces';
import { useContext } from 'react';
import { ShowableContext } from '../../../../contexts/showableContext';
import { getSlidesNumber } from './utils';
import { useQuery } from 'react-query';
import { QueryKeys } from '../../../../interfaces/query';
import { fetchOrganizationData } from '../../../../queries/fetchOrganizationData';

interface Props {
  employees: IEmployee[] | undefined;
}

export default function MidLevelSection({ employees }: Props) {
  const { data } = useQuery<IOrganizationStructure>(
    QueryKeys.ORGANIZATION_DATA,
    fetchOrganizationData
  );
  const { theme } = useHTheme();
  const device = useDevice();
  const {
    isShowCeoChildren,
    addChildrenToShowableList,
    removeChildrenFromShowableList,
  } = useContext(ShowableContext);

  if (!employees || employees.length === 0 || !isShowCeoChildren || !data)
    return null;
  //
  const slidesNumber = getSlidesNumber(device);
  return (
    <Wrapper theme={theme}>
      <Divider>Mid Levels</Divider>

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
              <EmployeeCard
                employee={employee}
                key={employee.id}
                expandButton={{
                  expandLessHandler: () => {
                    removeChildrenFromShowableList({
                      parentId: employee?.id,
                      lowLevelEmployees: data.lowLevel,
                    });
                  },
                  expandMoreHandler: () => {
                    addChildrenToShowableList({
                      parentId: employee?.id,
                      lowLevelEmployees: data.lowLevel,
                    });
                  },
                }}
              />
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
`;
