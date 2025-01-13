import React from 'react';
import { Box, Typography, Grid, Button, Paper, TextField } from '@mui/material';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Card, CardMedia, CardContent, Container } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const Home = () => {
  const foodImages = [
    { src: 'https://images.pexels.com/photos/3682837/pexels-photo-3682837.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', alt: 'Food 1' },
    { src: 'https://cdn.britannica.com/08/177308-050-94D9D6BE/Food-Pizza-Basil-Tomato.jpg', alt: 'Food 2' },
    { src: 'https://images.pexels.com/photos/2983101/pexels-photo-2983101.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', alt: 'Food 3' },
    { src: 'https://images.pexels.com/photos/1132558/pexels-photo-1132558.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', alt: 'Food 4' },
  ];
  const foodItems = [
    {
      title: 'Pizza',
      description: 'Delicious cheese pizza with fresh toppings.',
      image: 'https://www.indianhealthyrecipes.com/wp-content/uploads/2015/10/pizza-recipe-1.jpg',
    },
    {
      title: 'Sushi',
      description: 'Fresh sushi rolls with seafood and vegetables.',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtReFXVuWbieVJPZc3ayhFSDFF35oF4M8XIQ&s',
    },
    {
      title: 'Burger',
      description: 'Juicy burger with lettuce, tomato, and cheese.',
      image: 'https://static.vecteezy.com/system/resources/thumbnails/023/809/530/small_2x/a-flying-burger-with-all-the-layers-ai-generative-free-photo.jpg',
    },
    {
      title: 'Pasta',
      description: 'Creamy pasta with garlic and herbs.',
      image: 'https://www.yummytummyaarthi.com/wp-content/uploads/2022/11/red-sauce-pasta-1.jpg',
    },
    {
      title: 'Salad',
      description: 'Fresh garden salad with a variety of veggies.',
      image: 'https://www.licious.in/blog/wp-content/uploads/2020/12/3-Step-Chicken-Salad.jpg',
    },
    {
      title: 'Tacos',
      description: 'Spicy tacos filled with meat and toppings.',
      image: 'https://www.allrecipes.com/thmb/vG-of0Xa0W0eodSXPWV1KXD009U=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/70935-taqueria-style-tacos-mfs-3x2-35-9145991a0ef94ceb8be05ae8d6be4f0f.jpg',
    },
    {
      title: 'Ice Cream',
      description: 'Cool and creamy ice cream in various flavors.',
      image: 'https://media.gettyimages.com/id/157472912/photo/ice-cream-composition-on-a-bowl.jpg?s=612x612&w=gi&k=20&c=AniWX1OhaarUxCkgjUoKiA3bKVllK0upCylW6Z0PCMQ=',
    },
    {
      title: 'Momo',
      description: 'Grilled momo cooked to perfection.',
      image: 'https://junifoods.com/wp-content/uploads/2023/03/Chicken-Momo-Restaurant-Style-Kukhura-ko-Momo-%E0%A4%95%E0%A5%81%E0%A4%96%E0%A5%81%E0%A4%B0%E0%A4%BE%E0%A4%95%E0%A5%8B-%E0%A4%AE%E0%A4%AE-2.jpg',
    },
  ];

  const chefs = [
    { name: "Chef Alice", jobTitle: "Head Chef", image: "https://t4.ftcdn.net/jpg/06/41/88/25/360_F_641882588_QayqH5oM7zcnBBGRwK7TWsCJTM0shfKX.jpg" },
    { name: "Chef Bob", jobTitle: "Sous Chef", image: "https://www.shutterstock.com/image-photo/young-beautiful-asian-woman-chef-600nw-2317761803.jpg" },
    { name: "Chef Charlie", jobTitle: "Pastry Chef", image: "https://www.escoffier.edu/wp-content/uploads/2021/07/Smiling-male-chef-with-white-coat-and-hat-768.jpg" },
    { name: "Chef Dana", jobTitle: "Line Cook", image: "https://media.istockphoto.com/id/1298088270/photo/young-beautiful-smiling-woman-chef-with-arms-crossed-at-kitchen.jpg?s=612x612&w=0&k=20&c=ZtYaFLtiRkuA6mQ8HK05xjZNvpb4ev2BS9g2Uc6mdww=" },
  ];

  const reasons = [
    { title: "Fresh Ingredients", description: "We source the finest local ingredients to ensure quality in every bite." },
    { title: "Expert Chefs", description: "Our team of skilled chefs brings years of experience and passion to the kitchen." },
    { title: "Customized Menus", description: "We offer tailored menus to fit your dietary needs and preferences." },
    { title: "Exceptional Service", description: "Our staff is dedicated to providing an unforgettable dining experience." },
  ]; 

  const {
    register: feedbackRegister,
    handleSubmit: handleFeedbackSubmit,
    formState: { errors: feedbackErrors },
    reset: resetFeedback,
  } = useForm();

  const {
    register: tableRegister,
    handleSubmit: handleTableSubmit,
    formState: { errors: tableErrors },
    reset: resetTable,
  } = useForm();

  const onFeedbackSubmit = (data) => {
    console.log("Feedback Data:", data);
    toast.success("Thank you for your feedback!");
    resetFeedback();
  };

  const onTableSubmit = (data) => {
    console.log("Table Booking Data:", data);
    toast.success("Table booked successfully!");
    resetTable();
  };

  return (
    <>
      
      <Box sx={{ display: 'flex', height: 'auto', position: 'relative' }}>
        <Box sx={{ flex: 1 }}>
          <Carousel
            showThumbs={false}
            showStatus={false}
            infiniteLoop
            autoPlay
            interval={1500}
          >
            {foodImages.map((image, index) => (
              <Box key={index} sx={{ position: 'relative' }}>
                <CardMedia
                component='img'
                  src={image.src}
                  alt={image.alt}
                  style={{
                    width: '100%',
                    objectFit: 'cover',
                  }}
                  sx={{height: {xs:'350px',sm:'400px',md:'500px',lg:'750px'}}}
                />
                <Box
                  sx={{
                    padding: '25px',
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    width :{xs:'100%', sm: '100%', md:'100%', lg:'100%',xl:'100%'}
                  }}
                >
                  <Typography
                    variant="h1"
                    color="white"
                    sx={{
                      width:'100%',
                      fontWeight: 'bold',
                      fontFamily: 'Poppins',
                      fontSize: {
                        xs: '30px', sm: '40px', md: '60px',lg: '95px',xl: '110px' }}}
                    >
                    Special Food Menu
                  </Typography>
                  <Typography
                    variant="h5"
                    color="white"
                    fontWeight={800}
                    sx={{
                      textAlign: 'center',
                      fontSize: {
                        xs: '14px', sm: '24px', md: '32px', lg: '40px', xl: '48px'  
                      },
                      fontFamily: 'cursive',
                    }}
                  >
                    Get it while it's hot
                  </Typography>
                  <Typography
                    variant="h5"
                    color="white"
                    fontWeight={800}
                    sx={{
                      fontSize: {
                        xs: '14px', sm: '20px', md: '20px', lg: '30px', xl: '36px'  
                      },
                      fontFamily: 'cursive',
                    }}
                  >
                    Free Delivery
                  </Typography>
                  <Button
                    variant="contained"
                    sx={{
                      marginTop: '15px',
                      width: {
                        xs: '150px', sm: '250px', md: '250px', lg: '250px', xl: '350px'  
                      },
                      // height:{xs: '30px', sm: '30px', md: '80px', lg: '80px', xl: '70px' },
                      borderRadius: 2,
                      fontSize: {
                        xs: '10px', sm: '16px', md: '16px', lg: '18px', xl: '20px'  
                      },
                      px: 2,
                      py: 1.5,
                      color: 'white',
                    }}
                  >
                    Make a reservation
                  </Button>
                </Box>
              </Box>
            ))}
          </Carousel>
        </Box>
      </Box>



      <Container>
        <Typography variant="h3" margin="18px 0" textAlign="center" color="primary" sx={{fontSize: {xs:'22px',sm:'32px', md:'50px'}}}>
          Our Popular Dishes
        </Typography>
        <Grid container spacing={4}>
          {foodItems.map((item, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Card
                sx={{
                  position: 'relative',
                  overflow: 'hidden',
                  ':hover': {
                    boxShadow: 10,
                    transform: 'scale(1.05)',
                    transition: 'transform 0.3s ease-in-out',
                  },
                }}
              >
                <CardMedia
                  component="img"
                  alt={item.title}
                  height="180"
                  image={item.image}
                  sx={{
                    objectFit: 'cover',
                    filter: 'brightness(0.8)',
                    transition: '0.3s ease-in-out',
                    ':hover': { filter: 'brightness(1)' },
                  }}
                />
                <Box
                  sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    bgcolor: 'rgba(0, 0, 0, 0.3)',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    opacity: 0,
                    transition: 'opacity 0.3s ease-in-out',
                    ':hover': { opacity: 1 },
                  }}
                >
                  <CardContent sx={{ color: '#fff', textAlign: 'center' }}>
                    <Typography variant="h5">{item.title}</Typography>
                    <Typography variant="body2">{item.description}</Typography>
                  </CardContent>
                </Box>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>


      <Container>
        <Typography variant="h3" margin="30px 0" textAlign="center" color="primary" sx={{fontSize: {xs:'22px',sm:'32px', md:'50px'}}}>
          Meet Our Chefs
        </Typography>
        <Grid container spacing={4} justifyContent="center">
          {chefs.map((chef, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Card
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  padding: 2,
                  borderRadius: 4,
                  boxShadow: 3,
                  transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
                  ':hover': {
                    transform: 'scale(1.05)',
                    boxShadow: 6,
                  },
                }}
              >
                <Box
                  sx={{
                    width: 120,
                    height: 120,
                    borderRadius: '50%',
                    overflow: 'hidden',
                    marginBottom: 2,
                    boxShadow: 3,
                    transition: 'transform 0.3s ease-in-out',
                  }}
                >
                  <CardMedia
                    component="img"
                    image={chef.image}
                    alt={chef.name}
                    sx={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                </Box>
                <CardContent sx={{ textAlign: 'center', padding: 0 }}>
                  <Typography variant="h5" color="text.primary">
                    {chef.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" mt={1}>
                    {chef.jobTitle}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>


      <Container>
        <Typography variant="h3" margin="40px 0px 10px 0px" textAlign="center" color="primary" sx={{fontSize: {xs:'20px',sm:'30px', md:'50px'}}}>
          Why Choose Us
        </Typography>
        <Typography variant="body1" paragraph align="center" color="text.secondary">
          Discover the unique advantages that set us apart in the culinary world.
        </Typography>
        <Grid container spacing={4} justifyContent="center">
          {reasons.map((reason, index) => (
            <Grid item xs={12} sm={6} md={3} key={index} >
              <Card
                sx={{
                  mt: 4,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  padding: 2,
                  borderRadius: 4,
                  textAlign: 'center',
                  boxShadow: 3,
                  height:{xs:'200px',sm:'200px',md:'250px',lg:'250px',xl:'250px'},
                  transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
                  ':hover': {
                    transform: 'scale(1.05)',
                    boxShadow: 6,
                    border: '2px solid #3f51b5',
                  },
                }}
              >
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                  <StarIcon sx={{ fontSize: 40, color: '#3f51b5' }} />
                </Box>
                <CardContent>
                  <Typography variant="h6" color="text.primary" mb={1}>
                    {reason.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {reason.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>


      <Container maxWidth="lg" sx={{ mt: 4 }}>
        <Typography variant="h3" align="center" marginBottom="10px" color="primary" sx={{fontSize: {xs:'22px',sm:'32px', md:'50px'}}}>
          About Us
        </Typography>
        <Typography variant="h6" align="center" paragraph color="text.secondary" mb={4}>
          Welcome to Foodie Website, where culinary passion meets quality ingredients!
        </Typography>
        <Grid container spacing={4} justifyContent="center">
          {[
            {
              title: "Our Mission",
              description:
                "Our mission is to bring people together through delicious, high-quality food. We believe that every meal should be an experience worth sharing.",
              image: "https://static.wixstatic.com/media/29f05a_dc85a5ceb86c4334b887430dc9d9bc9b~mv2.jpg/v1/fill/w_1470,h_635,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/29f05a_dc85a5ceb86c4334b887430dc9d9bc9b~mv2.jpg",
            },
            {
              title: "Our Story",
              description:
                "Founded in [Year] by [Founder Names], we started as a small family kitchen and have grown into a beloved community staple. Our passion for food drives us to create memorable dishes that tell a story.",
              image: "https://templately.com/_next/image?url=https%3A%2F%2Fitems.templately.com%2Fitem-2aea8484d13fc05d0daeeaf005f30009%2Fget-pizza-our-story-section-for-gutenberg-banner-kOVrEoS.jpg&w=2048&q=75",
            },
            {
              title: "Our Values",
              description:
                "We value quality, sustainability, and community. We source our ingredients locally and are committed to environmentally friendly practices to nourish both our customers and the planet.",
              image: "https://kmphitech.com/wp-content/uploads/2023/01/Banner-32.png",
            },
            {
              title: "Join Us",
              description:
                "We invite you to explore our menu and join our food-loving community. Whether you’re dining in or ordering out, we’re here to make every meal special.",
              image: "https://www.shropshirefoodanddrink.co.uk/assets/Zm9vZGFuZGRyaW5r/images/screen_capture/join-us.jpg",
              button: true,
            },
          ].map((card, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Card
                sx={{
                  ':hover': {
                    boxShadow: 20,
                    transform: 'scale(1.05)',
                  },
                  transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
                  borderRadius: 3,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  textAlign: 'center',
                  height:{xs:'280px',sm:'280px',md:'350px',lg:'350px',xl:'350px'},

                }}
              >
                <Box sx={{ overflow: 'hidden', borderRadius: 3 }}>
                  <CardMedia
                    component="img"
                    alt={card.title}
                    height="200"
                    image={card.image}
                    sx={{
                      objectFit: 'cover',
                      transition: 'transform 0.3s ease-in-out',
                      ':hover': { transform: 'scale(1.1)' },
                    }}
                  />
                </Box>
                <CardContent>
                  <Typography variant="h5" gutterBottom color="text.primary">
                    {card.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {card.description}
                  </Typography>
                  {card.button && (
                    <Box mt={2}>
                      <Button variant="contained" color="primary">
                        Explore Our Menu
                      </Button>
                    </Box>
                  )}
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      <Container
        maxWidth="lg"
        sx={{
          mt: 6,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Grid
          container
          spacing={3}
          sx={{
            justifyContent: "center",
            alignItems: "center",
            flexDirection: { xs: "column", md: "row" },
          }}
        >
          {/* Google Map Section */}
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                width: "100%",
                height: 400,
                borderRadius: 2,
                overflow: "hidden",
                boxShadow: 3,
              }}
            >
              <iframe
                title="Google Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.835434507148!2d144.96305771537734!3d-37.81362787975152!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0x5045675218ce6e0!2sMelbourne%20VIC%2C%20Australia!5e0!3m2!1sen!2sus!4v1604563552783!5m2!1sen!2us"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
              ></iframe>
            </Box>
          </Grid>

          {/* Book a Table Form */}
          <Grid item xs={12} md={6}>
            <Paper elevation={5} sx={{ p: 4, borderRadius: 3 }}>
              <Typography variant="h4" align="center" color="primary" gutterBottom>
                Book a Table
              </Typography>
              <form onSubmit={handleTableSubmit(onTableSubmit)}>
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <TextField
                      label="Name"
                      fullWidth
                      {...tableRegister("name", { required: "Name is required" })}
                      error={!!tableErrors.name}
                      helperText={tableErrors.name?.message}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      label="Email"
                      type="email"
                      fullWidth
                      {...tableRegister("email", {
                        required: "Email is required",
                        pattern: {
                          value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                          message: "Invalid email format",
                        },
                      })}
                      error={!!tableErrors.email}
                      helperText={tableErrors.email?.message}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      label="Date"
                      type="date"
                      fullWidth
                      InputLabelProps={{ shrink: true }}
                      {...tableRegister("date", { required: "Date is required" })}
                      error={!!tableErrors.date}
                      helperText={tableErrors.date?.message}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      label="Time"
                      type="time"
                      fullWidth
                      InputLabelProps={{ shrink: true }}
                      {...tableRegister("time", { required: "Time is required" })}
                      error={!!tableErrors.time}
                      helperText={tableErrors.time?.message}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      label="Number of Guests"
                      type="number"
                      fullWidth
                      inputProps={{ min: 1 }}
                      {...tableRegister("guests", { required: "Number of guests is required" })}
                      error={!!tableErrors.guests}
                      helperText={tableErrors.guests?.message}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Button type="submit" variant="contained" color="primary" fullWidth>
                      Book Table
                    </Button>
                  </Grid>
                </Grid>
              </form>
            </Paper>
          </Grid>
        </Grid>
      </Container>

      {/* Customer Feedback Section */}
      <Container component={Paper} elevation={3} sx={{ mt: 4, p: 3 }}>
        <Typography variant="h4" align="center" color="primary" gutterBottom>
          Customer Feedback
        </Typography>
        <Typography variant="body1" align="center" gutterBottom>
          We value your feedback! Please let us know your thoughts.
        </Typography>
        <form onSubmit={handleFeedbackSubmit(onFeedbackSubmit)}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Name"
                fullWidth
                {...feedbackRegister("name", { required: "Name is required" })}
                error={!!feedbackErrors.name}
                helperText={feedbackErrors.name?.message}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Email"
                type="email"
                fullWidth
                {...feedbackRegister("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                    message: "Invalid email format",
                  },
                })}
                error={!!feedbackErrors.email}
                helperText={feedbackErrors.email?.message}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Message"
                multiline
                rows={4}
                fullWidth
                {...feedbackRegister("message", { required: "Message is required" })}
                error={!!feedbackErrors.message}
                helperText={feedbackErrors.message?.message}
              />
            </Grid>
            <Grid item xs={12}>
              <Button type="submit" variant="contained" color="primary" fullWidth>
                Submit Feedback
              </Button>
            </Grid>
          </Grid>
        </form>
      </Container>

      {/* Toast Notifications */}
      <ToastContainer position="top-center" autoClose={3000} />

    </>
  );
};

export default Home;





