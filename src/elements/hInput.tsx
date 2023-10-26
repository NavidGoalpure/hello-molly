import TextField, { TextFieldProps } from '@mui/material/TextField';
import { styled } from '@mui/material/styles';
import { useHTheme } from '../contexts/themeContext';
import { useContext, ChangeEvent } from 'react';
import { SearchInputContext } from '../pages/home/contexts/searchInput';

export default function HInput({ children, ...rest }: TextFieldProps) {
  const { theme } = useHTheme();
  const { searchedText, setSearchedText } = useContext(SearchInputContext);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setSearchedText(value);
  };

  return (
    <Wrapper theme={theme}>
      <StyledInput
        {...rest}
        theme={theme}
        value={searchedText}
        onChange={handleChange}
      >
        {children}
      </StyledInput>
    </Wrapper>
  );
}
const Wrapper = styled('div')`
  background-color: ${({ theme }) => theme.palette.background.default};
  color: ${({ theme }) => theme.palette.text.primary};
  padding: 1rem;
  width: 30rem;
  div {
    width: 100%;
  }
`;

const StyledInput = styled(TextField)`
  background-color: ${({ theme }) => theme.palette.background.default};
  .MuiInputBase-input {
    color: ${({ theme }) => theme.palette.text.primary};
  }
`;
