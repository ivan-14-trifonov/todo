import React from 'react';
import { Provider } from 'react-redux';
import { store } from './app/store';
import MainPage from './pages/MainPage';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const theme = createTheme();

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <MainPage />
      </ThemeProvider>
    </Provider>
  );
};

export default App;
