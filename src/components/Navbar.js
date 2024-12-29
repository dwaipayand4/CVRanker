import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import AdbIcon from "@mui/icons-material/Adb";
import { Link } from "react-router-dom";

const pages = ["Home", "About"];
const dropdown = [
  { name: "Action1", path: "/Action1" },
  { name: "Action2", path: "/Action2" },
];

const settings = [
  { name: "Profile", path: "/profile" },
  { name: "Account", path: "/account" },
  { name: "Dashboard", path: "/dashboard" },
  { name: "Logout", path: "/logout" },
];

function Navbar() {
  const [anchorElDropdown, setAnchorElDropdown] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  // Open and close for dropdown
  const handleOpenDropdown = (event) => {
    setAnchorElDropdown(event.currentTarget);
  };

  const handleCloseDropdown = () => {
    setAnchorElDropdown(null);
  };

  // Open and close for user settings
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static">
      <Container maxWidth="false">
        <Toolbar disableGutters>
          {/* Left Aligned Section */}
          <Box sx={{ display: "flex", alignItems: "center", gap: "20px" }}>
            {/* Logo */}
            <AdbIcon sx={{ mr: 1 }} />
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="#"
              sx={{
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              CV Builder
            </Typography>

            {/* Navigation Links */}
            {pages.map((page) => (
              <Button
                key={page}
                sx={{
                  color: "inherit",
                  textTransform: "none",
                }}
              >
                <Link
                  to={`/${page}`}
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  {page}
                </Link>
              </Button>
            ))}

            {/* Dropdown Menu */}
            <Button
              sx={{ color: "inherit", textTransform: "none" }}
              onClick={handleOpenDropdown}
            >
              Dropdown
            </Button>
            <Menu
              id="dropdown-menu"
              anchorEl={anchorElDropdown}
              open={Boolean(anchorElDropdown)}
              onClose={handleCloseDropdown}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
            >
              {dropdown.map((item) => (
                <MenuItem
                  key={item.name}
                  component={Link}
                  to={item.path}
                  onClick={handleCloseDropdown}
                  sx={{ textDecoration: "none", color: "inherit" }}
                >
                  {item.name}
                </MenuItem>
              ))}
            </Menu>
          </Box>

          {/* Right Aligned Section */}
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="User Avatar" />
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
                <MenuItem
                  key={setting.name}
                  onClick={handleCloseUserMenu}
                  component={Link}
                  to={setting.path}
                  sx={{ textDecoration: "none", color: "inherit" }}
                >
                  {setting.name}
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Navbar;