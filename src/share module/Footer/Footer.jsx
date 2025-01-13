import React from 'react';
import { Box, Container, Grid, Typography, IconButton } from '@mui/material';
import { Facebook, Twitter, Instagram, LinkedIn } from '@mui/icons-material';
import './Footer.css'

const Footer = () => {
  return (
    <Box component="footer" sx={{ bgcolor: 'primary.main', color: 'white', py: 4 }}>
      <Container maxWidth="lg">
        <Grid container spacing={2}>
          <Grid item xs={12} md={4}>
            <Typography variant="h6">Foodie Website</Typography>
            <Typography variant="body2">Address: 123 Street, City, Kolkata</Typography>
            <Typography variant="body2">Email: contact@company.com</Typography>
            <Typography variant="body2">Phone: (123) 456-7890</Typography>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography variant="h6">Links</Typography>
            <Typography variant="body2">About Us</Typography>
            <Typography variant="body2">Services</Typography>
            <Typography variant="body2">Contact</Typography>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography variant="h6">Follow Us</Typography>
            <IconButton sx={{color:'white'}} href="https://facebook.com">
              <Facebook />
            </IconButton>
            <IconButton sx={{color:'white'}} href="https://twitter.com">
              <Twitter />
            </IconButton>
            <IconButton sx={{color:'white'}} href="https://instagram.com">
              <Instagram />
            </IconButton>
            <IconButton sx={{color:'white'}} href="https://linkedin.com">
              <LinkedIn />
            </IconButton>
          </Grid>
        </Grid>
        <Typography variant="body2" sx={{ textAlign: 'center', mt: 4 }}>
          © {new Date().getFullYear()} Foodie Website. All rights reserved.
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;







