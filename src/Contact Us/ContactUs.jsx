import React, { useState } from 'react';
import {
  Container,
  TextField,
  Button,
  Typography,
  Box,
  Paper,
} from '@mui/material';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    email: '',
    feedback: '',
  });

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateEmail(formData.email)) {
      toast.error('Please enter a valid email address.', {
        position: "top-center", // Correct position usage
        autoClose: 3000,
      });
      return;
    }

    console.log('Form Data:', formData);

    toast.success('Feedback submitted successfully! Thank you.', {
      position: "top-center", // Correct position usage
      autoClose: 3000,
    });

    setFormData({ name: '', mobile: '', email: '', feedback: '' });
  };

  return (
    <>
      <ToastContainer />
      <Box
        sx={{
          backgroundColor: '#f9f9f9',
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          py: 8,
        }}
      >
        <Container maxWidth="sm">
          <Paper
            elevation={3}
            sx={{
              p: 4,
              borderRadius: 3,
              boxShadow: 3,
              backgroundColor: 'white',
            }}
          >
            <Typography
              variant="h4"
              align="center"
              gutterBottom
              sx={{
                fontWeight: 'bold',
                color: 'primary.main',
                fontSize: { xs: '20px', sm: '30px', md: '50px' },
              }}
            >
              Contact Us
            </Typography>
            <Typography align="center" sx={{ mb: 3, color: 'text.secondary' }}>
              We would love to hear your feedback!
            </Typography>
            <Box
              component="form"
              onSubmit={handleSubmit}
              sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}
            >
              <TextField
                label="Name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                fullWidth
                sx={{ mb: 2 }}
              />
              <TextField
                label="Mobile Number"
                name="mobile"
                value={formData.mobile}
                onChange={handleChange}
                required
                type="tel"
                fullWidth
                sx={{ mb: 2 }}
              />
              <TextField
                label="Email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                type="email"
                fullWidth
                sx={{ mb: 2 }}
              />
              <TextField
                label="Feedback"
                name="feedback"
                value={formData.feedback}
                onChange={handleChange}
                required
                multiline
                rows={4}
                fullWidth
                sx={{ mb: 3 }}
              />
              <Button
                type="submit"
                variant="contained"
                color="primary"
                fullWidth
                sx={{
                  py: 1.5,
                  fontSize: '16px',
                  fontWeight: 'bold',
                  textTransform: 'none',
                }}
              >
                Submit
              </Button>
            </Box>
          </Paper>
        </Container>
      </Box>
    </>
  );
}
