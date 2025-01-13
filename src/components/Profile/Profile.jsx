import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { profile } from "../redux/AuthSlice";
import {
  Box,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { getProfileImage } from "../../helper/Helper";

function Profile() {
  const { profileData, isLoading } = useSelector((state) => state.authKey);
  console.log(profileData);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(profile());
  }, []);
  return (
    <>
      <Box sx={{
        height:'65vh',
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}>
        <Box
          sx={{
            width: "100%",
            maxWidth: "300px",
            margin: "25px auto",
           
          }}
        >
          {!isLoading && profileData && (
            <Card sx={{ minWidth: 275 }}>
              <CardContent>
                <CardMedia
                  sx={{
                    height: 140,
                    width: 140,
                    margin: "auto",
                    borderRadius: 200,
                    border: "5px solid #134B70",
                  }}
                  image={getProfileImage(profileData?.profile_pic)}
                  title={profileData?.first_name}
                />

                <Typography variant="h5" component="div">
                  {profileData?.first_name} {profileData.last_name}
                </Typography>
                <Typography sx={{ color: "text.secondary", mb: 1.5 }}>
                  {profileData.email}
                </Typography>
              </CardContent>
            </Card>
          )}
        </Box>
      </Box>
    </>
  );
}

export default Profile;
