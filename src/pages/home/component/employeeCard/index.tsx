import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { IEmployee } from '../../../../interfaces/employee';
import {
  Box,
  Button,
  CardActionArea,
  CardActions,
  Chip,
  Stack,
  styled,
} from '@mui/material';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { getColorBaseOnDepartment } from './utils';

interface CardComponentProps {
  employee: IEmployee;
}

const EmployeeCard: React.FC<CardComponentProps> = ({ employee }) => {
  const departmentColor = getColorBaseOnDepartment(employee.department);
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
        <Stack direction='row' spacing={1} alignItems={'baseline'}>
          <Typography variant='body2' color='text.secondary'>
            {employee.role}
          </Typography>
          {/*Check Not CEO */}
          {departmentColor && (
            <Chip
              label={employee.department}
              sx={{
                backgroundColor: departmentColor,
              }}
            />
          )}
        </Stack>
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
