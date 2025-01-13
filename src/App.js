import { createTheme, ThemeProvider } from '@mui/material';
import './App.css';
import Routing from './routers/Routing';
import { Toaster } from 'sonner';
function App() {
  // Define your custom theme colors here
  const theme = createTheme({
    palette: {
      primary: {
        main: '#fa5f16', // Custom primary color
      },
      secondary: {
        main: '#1976d2', // Custom secondary color
      },
    },
  });
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Routing />
        <Toaster />
      </div>
    </ThemeProvider>
  );
}

export default App;
