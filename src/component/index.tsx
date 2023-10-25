import React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import { styled } from '@mui/material/styles';

const Hero = () => {
  return (
    <Wrapper>
      <Container maxWidth='lg'>
        <Content>
          <Typography variant='h2' component='h2' gutterBottom>
            Welcome to Our Website
          </Typography>
          <Typography variant='h5' paragraph>
            Discover amazing content here!
          </Typography>
          <TextField
            label='Search for something...'
            variant='outlined'
            fullWidth
          />
        </Content>
      </Container>
    </Wrapper>
  );
};

export default Hero;
const Wrapper = styled('div')`
  position: relative;
  background-color: ${({ theme }) => theme.palette.primary.main};
  color: ${({ theme }) => theme.palette.common.white};
  margin-bottom: ${({ theme }) => theme.spacing(4)};
  background-image: url('your_large_optimized_image.jpg'); /* Set your optimized image here */
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  height: 400px; /* Adjust the height to your design */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Content = styled('div')`
  padding: ${({ theme }) => theme.spacing(4)};
`;
const Input = styled('div')`
  width: 100%;
`;
