import React from 'react';
import Footer from './share module/Footer/Footer';  // Adjust the path as needed
import { Box } from '@mui/material';

const AppLayout = ({ children }) => {
  return (
    <Box
      sx={{
        minHeight: '100vh',      // Full viewport height
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <Box component="main" sx={{ flexGrow: 1 }}>
        {children}  {/* Main content goes here */}
      </Box>
      <Footer />  {/* Footer remains at the bottom */}
    </Box>
  );
};

export default AppLayout;
