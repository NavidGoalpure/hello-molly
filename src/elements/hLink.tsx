import { styled } from '@mui/material/styles';
import Link, { LinkProps } from '@mui/material/Link';

export default function HLink({ children, href = '#', ...rest }: LinkProps) {
  return (
    <StyledLink variant='button' href={href} {...rest}>
      {children}
    </StyledLink>
  );
}

const StyledLink = styled(Link)`
  color: ${({ theme }) => theme.palette.text.primary};
  margin-left: 1rem;
  text-decoration: unset;
`;
