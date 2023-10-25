import TextField, { TextFieldProps } from '@mui/material/TextField';
import { styled } from '@mui/material/styles';
import { useHTheme } from '../contexts/themeContext';

export default function HInput({ children, ...rest }: TextFieldProps) {
  const { theme } = useHTheme();
  return (
    <StyledInput {...rest} theme={theme}>
      {children}
    </StyledInput>
  );
}

const StyledInput = styled(TextField)`
  background-color: ${({ theme }) => theme.palette.background.default};
  .MuiInputBase-input {
    color: ${({ theme }) => theme.palette.text.primary};
  }
`;
