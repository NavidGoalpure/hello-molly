import { styled } from '@mui/material/styles';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import heroImage from './hero.webp';
import HInput from '../../../../elements/hInput';

const Hero = () => {
  return (
    <Wrapper style={{ height: 'calc(100vh - 4rem)' }}>
      <LazyLoadImage
        alt={'hero'}
        src={heroImage}
        width={'100%'}
        style={{ objectFit: 'cover', height: 'inherit' }}
      />
      <Content>
        <HInput
          sx={{
            width: { xs: '80%', md: '50%' },
          }}
          label='Search for employee name...'
          variant='outlined'
        />
      </Content>
    </Wrapper>
  );
};

export default Hero;
const Wrapper = styled('div')`
  position: relative;
  background-color: ${({ theme }) => theme.palette.primary.main};
  color: ${({ theme }) => theme.palette.common.white};
  height: max-content;

  align-items: center;
`;
const Content = styled('div')`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  //
  display: flex;
  justify-content: center;
  align-items: center;
  //
  padding: ${({ theme }) => theme.spacing(4)};
`;
