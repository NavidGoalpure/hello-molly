import React from 'react';
import { ThemeProvider } from './contexts/themeContext';
import Home from './pages/home';

function App() {
  return (
    <ThemeProvider>
      <Home />
    </ThemeProvider>
  );
}

export default App;
