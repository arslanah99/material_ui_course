import { AppBar, Button, IconButton, Menu, MenuItem, Toolbar, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react";
import LenneyFace from "./assets/LennyFace.jpeg";
import MenuIcon from '@mui/icons-material/Menu';

const pages = ["Cards", "Carousel", "Table"];

function AppBarExample() {

    const [anchorElNav, setAnchorElNav]= useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    }

    const handleCloseNavMenu = () => {
        setAnchorElNav(null)
    }

  return (
    <div className="App">
     <Box sx={{flexGrow: 1, marginBottom: 3}}>
        <AppBar position="static">
            <Toolbar>
                <Typography
                    noWrap
                    component="div"
                    sx={{mr: 2, display: {xs: "none", md: "flex"}}}
                >  
                    <img src={LenneyFace} style={{width: 120, height: 40}} alt="LENNY FACE"/>
                </Typography>
                <Box sx={{flexGrow: 1, display: {xs: "flex", md: "none"}}}>
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
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
                
                </Box>
                <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {page}
              </Button>
            ))}
          </Box>
            </Toolbar>
        </AppBar>
     </Box>
    </div>
  );
}

export default AppBarExample;
