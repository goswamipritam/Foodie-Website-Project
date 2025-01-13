import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { handleLogout, profile } from "../../components/redux/AuthSlice";
import { getProfileImage } from "../../helper/Helper";

function Header() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const dispatch = useDispatch();
  const { isLoggedIn, profileData } = useSelector((state) => state.authKey);
  console.log(isLoggedIn);
  React.useEffect(() => {
    dispatch(profile());
  }, [isLoggedIn, dispatch]);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const pages = isLoggedIn
    ? [
        { name: "Home", path: "/home" },
        { name: "Contact Us", path: "/contact" },
        { name: "Create", path: "/createproduct" },
        { name: "list", path: "/productlist" },
      ]
    : [
        { name: "Home", path: "/home" },
        { name: "Contact Us", path: "/contact" },
        { name: "Create", path: "/createproduct" },
      ];

  const settings = [{ name: "Profile", path: "/profile" }];

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box
            component="img"
            sx={{
              height: {
                xs: "20px",
                sm: "20px",
                md: "50px",
                lg: "50px",
                xl: "50px",
              },
              width: {
                xs: "20px",
                sm: "20px",
                md: "50px",
                lg: "50px",
                xl: "50px",
              },
            }}
            alt="Logo"
            src="https://png.pngtree.com/png-clipart/20190515/original/pngtree-food-icons-png-image_3543850.jpg"
          />

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{ display: { xs: "block", md: "none" } }}
            >
              {pages.map((page) => (
                <MenuItem key={page.path} onClick={handleCloseNavMenu}>
                  <Link
                    to={page.path}
                    style={{ textDecoration: "none", color: "inherit" }}
                  >
                    <Typography sx={{ textAlign: "center" }}>
                      {page.name}
                    </Typography>
                  </Link>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <Link
                to={page.path}
                key={page.path}
                style={{ textDecoration: "none" }}
              >
                <Button
                  // key={page}
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: "white", display: "block" }}
                >
                  {page.name}
                </Button>
              </Link>
            ))}
          </Box>

          <Box sx={{ display: "flex" }}>
            {isLoggedIn ? (
              <MenuItem onClick={() => dispatch(handleLogout())}>
                <Typography sx={{ textAlign: "center" }}>LOG OUT</Typography>
              </MenuItem>
            ) : (
              <>
                <Link to={"/registration"} style={{ textDecoration: "none" }}>
                  <MenuItem sx={{ paddingRight: "2px" }}>
                    <Typography
                      sx={{
                        textAlign: "center",
                        color: "white",
                        textDecoration: "none",
                        listStyle: "none",
                      }}
                    >
                      REGISTER
                    </Typography>
                  </MenuItem>
                </Link>
                <Link to={"/"} style={{ textDecoration: "none" }}>
                  <MenuItem>
                    <Typography sx={{ textAlign: "center", color: "white" }}>
                      LOGIN
                    </Typography>
                  </MenuItem>
                </Link>
              </>
            )}
          </Box>
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar
                  alt="Remy Sharp"
                  src={getProfileImage(profileData?.profile_pic)}
                />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <Link
                  to={setting.path}
                  key={setting.path}
                  underline="none"
                  style={{ textDecoration: "none" }}
                >
                  <MenuItem key={setting.path} onClick={handleCloseUserMenu}>
                    <Typography sx={{ textAlign: "center" }}>
                      {setting.name}
                    </Typography>
                  </MenuItem>
                </Link>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Header;
