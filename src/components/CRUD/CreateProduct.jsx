// import { Alert, Box, Button, Container, Grid, TextField, Typography, CircularProgress } from '@mui/material';
// import React, { useEffect } from 'react';
// import { useForm } from 'react-hook-form';
// import { useDispatch, useSelector } from 'react-redux';
// import { create } from '../redux/CrudSlice';
// import { toast } from 'sonner';
// import { useNavigate } from 'react-router-dom';

// export default function CreateProduct() {
//   const { register, handleSubmit, formState: { errors } } = useForm();
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const { isLoading, isCreated, isError } = useSelector((state) => state.crudKey);

//   const onSubmit = (data) => {
//     const formData = new FormData();
//     formData.append('title', data.title);
//     formData.append('description', data.description);
//     formData.append('image', data.file[0]);
//     dispatch(create(formData));
//     isCreated && toast('Product created successfully');
//   };

//   useEffect(() => {
//     if (isCreated) {
//       toast('Product created successfully');
//       navigate('/productlist');
//     }
//   }, [isCreated, navigate]);

//   return (
//     <>
//       <Container maxWidth="sm" sx={{ mt: 8, mb: 2 }}>
//         <Box
//           sx={{
//             p: 4,
//             borderRadius: 3,
//             boxShadow: 3,
//             backgroundColor: 'white',
//             display: 'flex',
//             flexDirection: 'column',
//             alignItems: 'center',
//           }}
//         >
//           <Typography variant="h4" align="center" sx={{ fontWeight: 'bold', color: 'primary.main', mb: 3, fontSize: {xs:'20px',sm:'30px', md:'50px'} }}>
//             Create Product
//           </Typography>

//           <form onSubmit={handleSubmit(onSubmit)} style={{ width: '100%' }}>
//             <Grid container spacing={3}>
//               <Grid item xs={12}>
//                 <TextField
//                   fullWidth
//                   label="Product Title"
//                   variant="outlined"
//                   error={!!errors.title}
//                   helperText={errors.title ? 'Title is required' : ''}
//                   {...register('title', { required: true })}
//                 />
//               </Grid>

//               <Grid item xs={12}>
//                 <TextField
//                   fullWidth
//                   label="Description"
//                   variant="outlined"
//                   multiline
//                   rows={4}
//                   error={!!errors.description}
//                   helperText={errors.description ? 'Description is required' : ''}
//                   {...register('description', { required: true })}
//                 />
//               </Grid>

//               <Grid item xs={12}>
//                 <TextField
//                   fullWidth
//                   type="file"
//                   variant="outlined"
//                   error={!!errors.file}
//                   helperText={errors.file ? 'File is required' : ''}
//                   {...register('file', { required: true })}
//                   InputLabelProps={{ shrink: true }}
//                 />
//               </Grid>

//               <Grid item xs={12}>
//                 <Button
//                   type="submit"
//                   variant="contained"
//                   color="primary"
//                   fullWidth
//                   sx={{
//                     py: 1.5,
//                     fontSize: '16px',
//                     fontWeight: 'bold',
//                     borderRadius: 2,
//                     boxShadow: 2,
//                     textTransform: 'none',
//                     position: 'relative',
//                     display: 'flex',
//                     justifyContent: 'center',
//                     alignItems: 'center',
//                   }}
//                   disabled={isLoading} // Disable button while loading
//                 >
//                   {isLoading ? (
//                     // Circular loader shown when loading
//                     <CircularProgress size={24} sx={{ color: 'white' }} />
//                   ) : (
//                     'Create Product'
//                   )}
//                 </Button>
//               </Grid>

//               {isError && (
//                 <Grid item xs={12}>
//                   <Alert severity="error" sx={{ mt: 2 }}>
//                     {isError}
//                   </Alert>
//                 </Grid>
//               )}
//             </Grid>
//           </form>
//         </Box>
//       </Container>
//     </>
//   );
// }


import { Alert, Box, Button, Container, Grid, TextField, Typography, CircularProgress } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { create } from '../redux/CrudSlice';
import { toast } from 'sonner';
import { useNavigate } from 'react-router-dom';

export default function CreateProduct() {
  const { register, handleSubmit, setValue, formState: { errors }, setError ,reset } = useForm();
  const [selectedFile, setSelectedFile] = useState(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isLoading, isCreated, isError } = useSelector((state) => state.crudKey);

  const validateImage = (file) => {
    const allowedFormats = ['image/jpeg', 'image/png', 'image/jpg'];
    if (!allowedFormats.includes(file.type)) {
      setError('file', {
        type: 'manual',
        message: 'Invalid file type. Please upload a JPG or PNG image.',
      });
      return false;
    }
    return true;
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file && validateImage(file)) {
      setSelectedFile(file);
      setValue('file', file); // Set the file in react-hook-form state
    }
  };

  const onSubmit = (data) => {
    const formData = new FormData();
    formData.append('title', data.title);
    formData.append('description', data.description);
    formData.append('image', data.file);
    dispatch(create(formData));
    reset();
  };

  useEffect(() => {
    if (isCreated) {
      toast.success('Product created successfully');
       navigate('/productlist');
    }
  }, [isCreated, navigate]);

  return (
    <>
      <Container maxWidth="sm" sx={{ mt: 8, mb: 2 }}>
        <Box
          sx={{
            p: 4,
            borderRadius: 3,
            boxShadow: 3,
            backgroundColor: 'white',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Typography variant="h4" align="center" sx={{ fontWeight: 'bold', color: 'primary.main', mb: 3, fontSize: { xs: '20px', sm: '30px', md: '50px' } }}>
            Create Product
          </Typography>

          <form onSubmit={handleSubmit(onSubmit)} style={{ width: '100%' }}>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Product Title"
                  variant="outlined"
                  error={!!errors.title}
                  helperText={errors.title ? 'Title is required' : ''}
                  {...register('title', { required: true })}
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Description"
                  variant="outlined"
                  multiline
                  rows={4}
                  error={!!errors.description}
                  helperText={errors.description ? 'Description is required' : ''}
                  {...register('description', { required: true })}
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  fullWidth
                  type="file"
                  variant="outlined"
                  error={!!errors.file}
                  helperText={errors.file?.message || 'Upload a JPG or PNG image'}
                  InputLabelProps={{ shrink: true }}
                  onChange={handleFileChange}
                />
              </Grid>

              <Grid item xs={12}>
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  fullWidth
                  sx={{
                    py: 1.5,
                    fontSize: '16px',
                    fontWeight: 'bold',
                    borderRadius: 2,
                    boxShadow: 2,
                    textTransform: 'none',
                    position: 'relative',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                  disabled={isLoading} // Disable button while loading
                >
                  {isLoading ? (
                    // Circular loader shown when loading
                    <CircularProgress size={24} sx={{ color: 'white' }} />
                  ) : (
                    'Create Product'
                  )}
                </Button>
              </Grid>

              {isError && (
                <Grid item xs={12}>
                  <Alert severity="error" sx={{ mt: 2 }}>
                    {isError}
                  </Alert>
                </Grid>
              )}
            </Grid>
          </form>
        </Box>
      </Container>
    </>
  );
}

