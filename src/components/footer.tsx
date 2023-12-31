import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';

function Copyright() {
  return (
    <Typography variant='body2' color='text.secondary'>
      {'Copyright © '}
      <Link color='inherit' href='https://mui.com/'>
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

export default function StickyFooter() {
  return (
    <Box
      component='footer'
      sx={{
        py: 3,
        px: 2,
        mt: 'auto',
        backgroundColor: (theme) =>
          theme.palette.mode === 'light'
            ? theme.palette.grey[200]
            : theme.palette.grey[800],
      }}
    >
      <Container maxWidth='sm'>
        <div>
          <Link color='inherit' href='#'>
            Privacy Policy
          </Link>
          {' | '}
          <Link color='inherit' href='#'>
            Terms of Services
          </Link>
          {' | '}
          <Link color='inherit' href='#'>
            Careers
          </Link>
        </div>
        <Copyright />
      </Container>
    </Box>
  );
}
