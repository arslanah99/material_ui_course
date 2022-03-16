import { AppBar, Button,  Divider,  Drawer, IconButton,  List,  ListItem,  ListItemIcon,  ListItemText,  Menu, MenuItem, Toolbar, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react";
import LenneyFace from "./assets/LennyFace.jpeg";
import MenuIcon from '@mui/icons-material/Menu';
import AirlineSeatFlatIcon from '@mui/icons-material/AirlineSeatFlat';
import AgricultureIcon from '@mui/icons-material/Agriculture';
import { styled, useTheme } from '@mui/material/styles';
import { Air, ListAlt } from "@mui/icons-material";

const pages = ["Cards", "Carousel", "Table"];

const DrawerHeader = styled('div')((({theme}) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end'
})))

const drawerWidth = 241;

function AppBarExample() {
    const theme = useTheme()
    const [open, setOpen] = useState(false);

    const handleDrawerOpen = () => {
      setOpen(true)
    }
    
    const handleDrawerClose = () => {
      setOpen(false)
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
              onClick={handleDrawerOpen}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
                </Box>
                <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {page}
              </Button>
            ))}
          </Box>
            </Toolbar>
        </AppBar>
     </Box>

        <Drawer
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            '& .MuiDrawer-paper': {
              width: drawerWidth,
              boxSizing: 'border-box'
            },
          }}
          variant="temporary"
          anchor="left"
          onClose={() => {
            handleDrawerClose()
          }}
          open={open}
        >
          <DrawerHeader>
            <IconButton onClick={handleDrawerClose}>
              {theme.direction === "ltr" ? <AgricultureIcon /> : <AirlineSeatFlatIcon />}
            </IconButton>
          </DrawerHeader>
          <Divider />
          <List>
            {pages.map((link, index) => {
              return(
                <ListItem button key={index}>
                  <ListItemIcon>
                    {index % 2 === 0 ? <AgricultureIcon /> : <AirlineSeatFlatIcon />}
                  </ListItemIcon>
                  <ListItemText primary={link}/>
                </ListItem>
              )
            })}
          </List>
        </Drawer>

    </div>
  );
}

export default AppBarExample;
