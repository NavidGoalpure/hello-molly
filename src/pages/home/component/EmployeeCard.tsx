import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';
import { ICeo, IEmployee } from '../../../interfaces/employee';
import {
  Box,
  Button,
  CardActionArea,
  CardActions,
  styled,
} from '@mui/material';
import { LazyLoadImage } from 'react-lazy-load-image-component';

interface CardComponentProps {
  employee: IEmployee | ICeo;
}

const EmployeeCard: React.FC<CardComponentProps> = ({ employee }) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <Box sx={{ width: 'max-content', mx: 'auto' }}>
        <StyledImage
          alt={employee.name}
          height={96}
          src={employee.avatar}
          width={96}
        />
      </Box>
      <CardContent>
        <Typography gutterBottom variant='h5' component='div'>
          {employee.name}
        </Typography>
        <Typography variant='body2' color='text.secondary'>
          {employee.role}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size='small' color='primary'>
          Share
        </Button>
      </CardActions>
    </Card>
  );
};

export default EmployeeCard;
const StyledImage = styled(LazyLoadImage)`
  width: 6rem;
  height: auto;
  border-radius: 50%;
  margin: auto;
`;
