// import { Box, Button, Container, Grid, Paper, TextField, Typography, CircularProgress } from '@mui/material';
// import React, { useState } from 'react';
// import { useMutation } from 'react-query';
// import { useDispatch } from 'react-redux';
// import { register } from '../redux/AuthSlice';
// import { useNavigate } from 'react-router-dom';

// function Registration() {
//   const [registrationData, setRegistrationData] = useState({
//     firstName: "",
//     lastName: "",
//     email: "",
//     password: "",
//     image: null,
//   });
//   const [error, setError] = useState(null);
//   const dispatch = useDispatch();
//   const navigation = useNavigate();

//   const registerMutation = useMutation({
//     mutationFn: (formData) => dispatch(register(formData)),
//     onSuccess: (data) => {
//       if (data?.payload?.token) {
//         navigation("/");
//       } else {
//         setError(data?.payload);
//       }
//     },
//     onError: (err) => {
//       console.log("Error", err);
//     },
//   });

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const formData = new FormData();
//     formData.append('first_name', registrationData.firstName);
//     formData.append('last_name', registrationData.lastName);
//     formData.append('email', registrationData.email);
//     formData.append('password', registrationData.password);
//     formData.append('profile_pic', registrationData.image);

//     registerMutation.mutate(formData);
//   };

//   return (
//     <Box sx={{ width: '100%', height: 'auto', justifyContent: 'center', alignItems: 'center' }}>
//       <Container component={Paper} maxWidth="md" sx={{ my: 5, backgroundColor: '#f5f5f5', height: 'auto', justifyContent: 'center', alignItems: 'center' }}>
//         <Typography
//           variant="h3"
//           sx={{
//             mt: 6,
//             mb: 3,
//             fontWeight: "bold",
//             color: "primary.main",
//             textAlign: "center",
//             fontSize: {xs:'20px',sm:'30px', md:'50px'},
//           }}
//         >
//           Register Now
//         </Typography>
//         <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3, display: 'flex', flexDirection: { xs: 'column', md: 'row' }, }}>
//           <Grid
//             container
//             spacing={4}
//             alignItems="center"
//             sx={{
//               display: 'flex',
//               flexDirection: { xs: 'column', md: 'row' },
//             }}
//           >

//             <Grid item xs={12} md={6}>
//               <Box
//                 component="img"
//                 sx={{
//                   width: "100%",
//                   height: { xs: 250, md: 400 },
//                   objectFit: "cover",
//                   borderRadius: 2,
//                   boxShadow: 3,
//                   transition: "transform 0.3s ease",
//                   "&:hover": { transform: "scale(1.05)" },
//                   marginBottom: '10',
//                 }}
//                 alt="Example Image"
//                 src="assets/image/registerimg.jpeg"
//               />
//             </Grid>

//             <Grid item xs={12} md={6} >
//               <Grid container spacing={2} sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'column', md: 'row' }, }}>
//                 <Grid item md={6} xs={12}>
//                   <TextField
//                     value={registrationData.firstName}
//                     onChange={(e) => setRegistrationData({ ...registrationData, firstName: e.target.value })}
//                     fullWidth
//                     label="First Name"
//                     variant="outlined"
//                     required
//                   />
//                 </Grid>
//                 <Grid item md={6} xs={12}>
//                   <TextField
//                     value={registrationData.lastName}
//                     onChange={(e) => setRegistrationData({ ...registrationData, lastName: e.target.value })}
//                     fullWidth
//                     label="Last Name"
//                     variant="outlined"
//                     required
//                   />
//                 </Grid>
//               </Grid>

//               <TextField
//                 value={registrationData.email}
//                 onChange={(e) => setRegistrationData({ ...registrationData, email: e.target.value })}
//                 fullWidth
//                 label="Email"
//                 variant="outlined"
//                 required
//                 sx={{ mt: 2 }}
//               />

//               <TextField
//                 value={registrationData.password}
//                 onChange={(e) => setRegistrationData({ ...registrationData, password: e.target.value })}
//                 fullWidth
//                 type="password"
//                 label="Password"
//                 variant="outlined"
//                 required
//                 sx={{ mt: 2 }}
//               />

//               <TextField
//                 fullWidth
//                 type="file"
//                 onChange={(e) => setRegistrationData({ ...registrationData, image: e.target.files[0] })}
//                 accept="image/*"
//                 variant="outlined"
//                 sx={{ mt: 2 }}
//               />

//               <Button
//                 fullWidth
//                 variant="contained"
//                 color="primary"
//                 type="submit"
//                 disabled={registerMutation.isLoading}
//                 sx={{
//                   py: 1.5,
//                   mt: 3,
//                   fontSize: "16px",
//                   fontWeight: "bold",
//                   position: 'relative', // Needed for overlaying the circular loader
//                 }}
//               >
//                 {registerMutation.isLoading ? (
//                   // Display circular loader when submitting
//                   <CircularProgress size={32} sx={{ position: 'absolute', left: '50%', top: '50%', marginLeft: '-12px', marginTop: '-12px' }} />
//                 ) : "Register Now"}
//               </Button>

//               {error && (
//                 <Typography color="error" sx={{ mt: 2, textAlign: "center" }}>
//                   {error.message}
//                 </Typography>
//               )}
//               {registerMutation.isError && (
//                 <Typography color="error" sx={{ mt: 2, textAlign: "center" }}>
//                   Registration failed. Please try again.
//                 </Typography>
//               )}
//             </Grid>

//           </Grid>
//         </Box>
//       </Container>
//     </Box>
//   );
// }

// export default Registration;



import { Box, Button, Container, Grid, Paper, TextField, Typography, CircularProgress } from '@mui/material';
import React, { useState } from 'react';
import { useMutation } from 'react-query';
import { useDispatch } from 'react-redux';
import { register } from '../redux/AuthSlice';
import { useNavigate } from 'react-router-dom';

function Registration() {
  const [registrationData, setRegistrationData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    image: null,
  });
  const [error, setError] = useState(null);
  const dispatch = useDispatch();
  const navigation = useNavigate();

  const registerMutation = useMutation({
    mutationFn: (formData) => dispatch(register(formData)),
    onSuccess: (data) => {
      if (data?.payload?.token) {
        navigation("/");
      } else {
        setError(data?.payload);
      }
    },
    onError: (err) => {
      console.log("Error", err);
    },
  });

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validateImage = (file) => {
    const allowedTypes = ["image/jpeg", "image/png", "image/jpg"];
    return file && allowedTypes.includes(file.type);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateEmail(registrationData.email)) {
      setError({ message: "Invalid email format." });
      return;
    }

    if (!validateImage(registrationData.image)) {
      setError({ message: "Invalid image type. Only JPG, PNG, and JPEG are allowed." });
      return;
    }

    const formData = new FormData();
    formData.append("first_name", registrationData.firstName);
    formData.append("last_name", registrationData.lastName);
    formData.append("email", registrationData.email);
    formData.append("password", registrationData.password);
    formData.append("profile_pic", registrationData.image);

    registerMutation.mutate(formData);
  };

  return (
    <Box sx={{ width: '100%', height: 'auto', justifyContent: 'center', alignItems: 'center' }}>
      <Container
        component={Paper}
        maxWidth="md"
        sx={{
          my: 5,
          backgroundColor: '#f5f5f5',
          height: 'auto',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Typography
          variant="h3"
          sx={{
            mt: 6,
            mb: 3,
            fontWeight: "bold",
            color: "primary.main",
            textAlign: "center",
            fontSize: { xs: '20px', sm: '30px', md: '50px' },
          }}
        >
          Register Now
        </Typography>
        <Box
          component="form"
          onSubmit={handleSubmit}
          sx={{
            mt: 3,
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
          }}
        >
          <Grid
            container
            spacing={4}
            alignItems="center"
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', md: 'row' },
            }}
          >
            <Grid item xs={12} md={6}>
              <Box
                component="img"
                sx={{
                  width: "100%",
                  height: { xs: 250, md: 400 },
                  objectFit: "cover",
                  borderRadius: 2,
                  boxShadow: 3,
                  transition: "transform 0.3s ease",
                  "&:hover": { transform: "scale(1.05)" },
                  marginBottom: '10',
                }}
                alt="Example Image"
                src="assets/image/registerimg.jpeg"
              />
            </Grid>

            <Grid item xs={12} md={6}>
              <Grid
                container
                spacing={2}
                sx={{
                  display: 'flex',
                  flexDirection: { xs: 'column', sm: 'column', md: 'row' },
                }}
              >
                <Grid item md={6} xs={12}>
                  <TextField
                    value={registrationData.firstName}
                    onChange={(e) =>
                      setRegistrationData({ ...registrationData, firstName: e.target.value })
                    }
                    fullWidth
                    label="First Name"
                    variant="outlined"
                    required
                  />
                </Grid>
                <Grid item md={6} xs={12}>
                  <TextField
                    value={registrationData.lastName}
                    onChange={(e) =>
                      setRegistrationData({ ...registrationData, lastName: e.target.value })
                    }
                    fullWidth
                    label="Last Name"
                    variant="outlined"
                    required
                  />
                </Grid>
              </Grid>

              <TextField
                value={registrationData.email}
                onChange={(e) =>
                  setRegistrationData({ ...registrationData, email: e.target.value })
                }
                fullWidth
                label="Email"
                variant="outlined"
                required
                sx={{ mt: 2 }}
              />

              <TextField
                value={registrationData.password}
                onChange={(e) =>
                  setRegistrationData({ ...registrationData, password: e.target.value })
                }
                fullWidth
                type="password"
                label="Password"
                variant="outlined"
                required
                sx={{ mt: 2 }}
              />

              <TextField
                fullWidth
                type="file"
                onChange={(e) =>
                  setRegistrationData({ ...registrationData, image: e.target.files[0] })
                }
                accept="image/*"
                variant="outlined"
                sx={{ mt: 2 }}
              />

              <Button
                fullWidth
                variant="contained"
                color="primary"
                type="submit"
                disabled={registerMutation.isLoading}
                sx={{
                  py: 1.5,
                  mt: 3,
                  fontSize: "16px",
                  fontWeight: "bold",
                  position: 'relative',
                }}
              >
                {registerMutation.isLoading ? (
                  <CircularProgress
                    size={32}
                    sx={{
                      position: 'absolute',
                      left: '50%',
                      top: '50%',
                      marginLeft: '-16px',
                      marginTop: '-16px',
                    }}
                  />
                ) : (
                  "Register Now"
                )}
              </Button>

              {error && (
                <Typography color="error" sx={{ mt: 2, textAlign: "center" }}>
                  {error.message}
                </Typography>
              )}
              {registerMutation.isError && (
                <Typography color="error" sx={{ mt: 2, textAlign: "center" }}>
                  Registration failed. Please try again.
                </Typography>
              )}
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
}

export default Registration;










