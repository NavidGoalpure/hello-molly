import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from './contexts/themeContext';
import { QueryClient, QueryClientProvider } from 'react-query';
import { BrowserRouter } from 'react-router-dom';
import Routes from './routes';

const queryClient = new QueryClient();
function App() {
  return (
    <React.StrictMode>
      <ThemeProvider>
        <CssBaseline />
        <QueryClientProvider client={queryClient}>
          <BrowserRouter>
            <Routes />
          </BrowserRouter>
        </QueryClientProvider>
      </ThemeProvider>
    </React.StrictMode>
  );
}

export default App;
