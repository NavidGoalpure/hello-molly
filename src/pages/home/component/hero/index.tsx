import React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import { styled } from '@mui/material/styles';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import heroImage from './hero.jpg';
import { useHTheme } from '../../../../contexts/themeContext';
import HInput from '../../../../elements/hInput';

const Hero = () => {
  const { theme } = useHTheme();

  return (
    <Wrapper id='navid'>
      <LazyLoadImage
        alt={'hero'}
        height={'auto'}
        src={heroImage}
        width={'100%'}
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
