import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";
import MenuIcon from "@mui/icons-material/Menu";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { useState } from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElConfig, setAnchorElConfig] = useState(null);

  const handleOpenNavMenu = (event) => setAnchorElNav(event.currentTarget);
  const handleCloseNavMenu = () => setAnchorElNav(null);

  const handleOpenConfigMenu = (event) => setAnchorElConfig(event.currentTarget);
  const handleCloseConfigMenu = () => setAnchorElConfig(null);

  return (
    <AppBar
      position="static"
      sx={{
        background: "linear-gradient(90deg, #ff8a00, #e52e71)",
        fontFamily: "Poppins, sans-serif",
        boxShadow: "0 4px 12px rgba(88, 88, 88, 0.15)",
      }}
    >
      <Toolbar>

        {/* Mobile Menu Button */}
        <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
          <IconButton size="large" onClick={handleOpenNavMenu} sx={{ color: "#fff" }}>
            <MenuIcon />
          </IconButton>

          <Menu anchorEl={anchorElNav} open={Boolean(anchorElNav)} onClose={handleCloseNavMenu}>
            <MenuItem component={Link} to="/" onClick={handleCloseNavMenu}>Home</MenuItem>

            <MenuItem component={Link} to="/students" onClick={handleCloseNavMenu}>Students</MenuItem>
            <MenuItem component={Link} to="/teachers" onClick={handleCloseNavMenu}>Teachers</MenuItem>
            <MenuItem component={Link} to="/subjects" onClick={handleCloseNavMenu}>Subjects</MenuItem>
          </Menu>
        </Box>

        {/* Logo / Title */}
        <Typography
          variant="h5"
          sx={{
            display: "flex",
            alignItems: "center",
            flexGrow: 1,
          }}
        >
          <Button
            component={Link}
            to="/"
            sx={{
              fontWeight: 800,
              color: "#fff",
              fontSize: "1.8rem",
              letterSpacing: "1px",
              fontFamily: "Poppins, sans-serif",
              textTransform: "none",
            }}
          >
            🎓 Grading System
          </Button>
        </Typography>

        {/* Desktop Menu */}
        <Box sx={{ display: { xs: "none", md: "flex" }, gap: 2 }}>
          <Button component={Link} to="/" sx={{ color: "#fff", fontWeight: 800, fontSize: "1.05rem" }}>Home</Button>

          <Button component={Link} to="/students" sx={{ color: "#fff", fontWeight: 800, fontSize: "1.05rem" }}>Students</Button>

          <Button component={Link} to="/teachers" sx={{ color: "#fff", fontWeight: 800, fontSize: "1.05rem" }}>Teachers</Button>

          <Button component={Link} to="/subjects" sx={{ color: "#fff", fontWeight: 800, fontSize: "1.05rem" }}>Subjects</Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
