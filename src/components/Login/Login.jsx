import React, { useState } from 'react';
import { Alert, Box, Button, Container, Grid, Paper, TextField, Typography, CircularProgress } from '@mui/material';
import { useMutation } from 'react-query';
import { useDispatch, useSelector } from 'react-redux';
import { login, handleLogin } from '../redux/AuthSlice';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Login() {
    const [loginData, setLoginData] = useState({
        email: "",
        password: "",
    });
    const [error, setError] = useState(null);
    const { isLoggedIn } = useSelector((state) => state.authKey);
    const navigation = useNavigate();
    const dispatch = useDispatch();

    const loginMutation = useMutation({
        mutationFn: (data) => dispatch(login(data)),
        onSuccess: (data) => {
            if (data?.payload?.token) {
                localStorage.setItem("token", data?.payload?.token);
                localStorage.setItem("name", data?.payload?.data.first_name);
                localStorage.setItem("email", data?.payload?.data.email);
                dispatch(handleLogin());
                toast.success('Login successful!');
                navigation("/home");
            } else {
                setError(data?.payload);
                toast.error('Login failed. Please check your credentials.');
            }
        },
        onError: (err) => {
            console.log("Error", err);
            toast.error('An error occurred during login.');
        },
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        loginMutation.mutate(loginData);
    };

    return (
        <>
            <ToastContainer position="top-right" autoClose={3000} />
            <Box
                sx={{
                    minHeight: '100vh',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundImage: `url(https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    p: 3,
                }}
            >
                <Container component={Paper} maxWidth="sm" sx={{ p: 4, borderRadius: 2, bgcolor: 'rgba(255, 255, 255, 0.6)', backdropFilter: 'blur(5px)' }}>
                    <Typography variant="h3" color="primary" sx={{ mb: 3, fontWeight: 'bold', textAlign: 'center', fontSize: {xs:'20px',sm:'30px', md:'50px'} }}>
                        Login Now
                    </Typography>
                    <Box component="form" onSubmit={handleSubmit}>
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <TextField
                                    value={loginData.email}
                                    onChange={(e) => setLoginData({ ...loginData, email: e.target.value })}
                                    fullWidth
                                    label="Email"
                                    variant="outlined"
                                    required
                                    sx={{ mb: 2 }}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    value={loginData.password}
                                    onChange={(e) => setLoginData({ ...loginData, password: e.target.value })}
                                    fullWidth
                                    type="password"
                                    label="Password"
                                    variant="outlined"
                                    required
                                    sx={{ mb: 2 }}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <Button
                                    fullWidth
                                    variant="contained"
                                    color="primary"
                                    type="submit"
                                    disabled={loginMutation.isLoading}
                                    sx={{ py: 1.5, fontSize: '16px', fontWeight: 'bold', position: 'relative' }}
                                >
                                    {loginMutation.isLoading ? (
                                        <CircularProgress size={32} sx={{
                                            position: 'absolute', 
                                            left: '50%', 
                                            top: '50%', 
                                            marginLeft: '-12px', 
                                            marginTop: '-12px'
                                        }} />
                                    ) : 'Login Now'}
                                </Button>
                                {error && <Alert severity="error" sx={{ mt: 2 }}>{error.message}</Alert>}
                            </Grid>
                        </Grid>
                    </Box>
                </Container>
            </Box>
        </>
    );
}

export default Login;




