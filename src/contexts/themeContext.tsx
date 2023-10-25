// ThemeContext.tsx
import React, { createContext, useContext, useState, ReactNode } from 'react';
import { Theme } from '@mui/material/styles';
import { lightTheme, darkTheme } from '../styles/theme';

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>(lightTheme);

  const toggleTheme = () => {
    setTheme((prevTheme) =>
      prevTheme === lightTheme ? darkTheme : lightTheme
    );
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useHTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useHTheme must be used within a ThemeProvider');
  }
  return context;
};
