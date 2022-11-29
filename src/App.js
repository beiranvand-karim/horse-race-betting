import { environmentVariables, EnvironmentVariables } from './environmentVariables';
import { GlobalStyles } from './styles';
import Router from './Router';
import { ThemeProvider } from '@mui/material/styles';
import theme from './styles/theme';
import CssBaseline from '@mui/material/CssBaseline';

const App = () => {
  return (
    <EnvironmentVariables.Provider value={environmentVariables}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <GlobalStyles />
        <Router />
      </ThemeProvider>
    </EnvironmentVariables.Provider>
  );
};

export default App;
