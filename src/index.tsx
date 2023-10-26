import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from './contexts/themeContext';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ShowableContextProvider } from './contexts/showableContext';
import { NavigationContextProvider } from './contexts/navigationContex';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
const queryClient = new QueryClient();
root.render(
  <React.StrictMode>
    <ThemeProvider>
      <CssBaseline />
      <QueryClientProvider client={queryClient}>
        <ShowableContextProvider>
          <NavigationContextProvider>
            <App />
          </NavigationContextProvider>
        </ShowableContextProvider>
      </QueryClientProvider>
    </ThemeProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
