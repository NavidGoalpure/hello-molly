import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { IEmployee } from '../../../../interfaces/employee';
import {
  Box,
  CardActions,
  Chip,
  IconButton,
  Stack,
  styled,
} from '@mui/material';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { getColorBaseOnDepartment } from './utils';
import { ExpandLess } from '@mui/icons-material';

interface CardComponentProps {
  employee: IEmployee;
  expandButton?: {
    expandLessHandler: () => void;
    expandMoreHandler: () => void;
  };
}

const EmployeeCard: React.FC<CardComponentProps> = ({
  employee,
  expandButton,
}) => {
  const departmentColor = getColorBaseOnDepartment(employee.department);
  const [isExpanded, setIsExpanded] = useState(false);
  const handleExpandClick = () => {
    if (isExpanded) expandButton?.expandLessHandler();
    else expandButton?.expandMoreHandler();
    setIsExpanded(!isExpanded);
  };
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
      {expandButton && (
        <CardActions>
          <Stack justifyContent={'center'} width={'100%'} flexDirection={'row'}>
            <IconButton
              aria-label='expand'
              onClick={handleExpandClick}
              style={{
                transform: isExpanded ? 'rotate(180deg)' : 'rotate(0deg)',
                transition: 'transform 0.3s ease',
                width: 'max-content',
              }}
            >
              <ExpandLess />
            </IconButton>
          </Stack>
        </CardActions>
      )}
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
