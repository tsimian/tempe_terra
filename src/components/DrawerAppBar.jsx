import * as React from "react";
import {
  AppBar,
  Box,
  CssBaseline,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Toolbar,
  Typography,
  Button,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { ImRocket } from "react-icons/im";

const drawerWidth = 240;
const navItems = ["Home", "Pricing", "About", "Contact"];

function DrawerAppBar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box
      onClick={handleDrawerToggle}
      sx={{
        textAlign: "center",
        backgroundColor: "primary.main",
        color: "#f4f4f4",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          height: "50%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-evenly",
        }}
      >
        <Typography variant="h6" sx={{ my: 2, fontWeight: 600 }}>
          Tempe Terra
        </Typography>
        {navItems.map((item) => (
          <Button key={item} sx={{ color: "#fff" }} className="menu-btn">
            <a href={`#${item}`.toLowerCase()}>{item}</a>
          </Button>
        ))}
      </Box>
      <Box sx={{ padding: "1rem" }}>
        <Box sx={{ marginBottom: "16px" }}>
          <ImRocket size={24} />
        </Box>
        <Typography variant="body2">
          &copy; {new Date().getFullYear()}
        </Typography>
      </Box>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex", color: "primary.main" }}>
      <CssBaseline />
      <AppBar component="nav">
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Box
            sx={{ display: { xs: "none", sm: "flex" }, marginRight: "14px" }}
          >
            <ImRocket size={24} />
          </Box>
          <Typography
            variant="h6"
            component="div"
            sx={{
              flexGrow: 1,
              display: { xs: "none", sm: "block" },
              fontWeight: "600",
            }}
          >
            Tempe Terra
          </Typography>
          <Box sx={{ display: { sm: "none" }, margin: "0 auto" }}>
            <ImRocket size={24} />
          </Box>
          <Box
            sx={{
              display: { xs: "none", sm: "flex" },
              justifyContent: "space-between",
              alignItems: "center",
              width: "50%",
            }}
          >
            {navItems.map((item) => (
              <Button key={item} sx={{ color: "#fff" }} className="menu-btn">
                <a href={`#${item}`.toLowerCase()}>{item}</a>
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
      <Box component="main">
        <Toolbar />
      </Box>
    </Box>
  );
}

export default DrawerAppBar;
