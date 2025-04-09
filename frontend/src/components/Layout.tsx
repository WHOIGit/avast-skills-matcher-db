import * as React from "react";
import Image from "next/image";
import { styled, useTheme } from "@mui/material/styles";
import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import { Button } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

import Link, { NextLinkComposed } from "./Link";
import SkillsFilter from "./SkillsFilter";
import AccountMenu from "./AccountMenu";
import logoImg from "../../public/WHOI-logo-notext.png";
import SearchField from "./SearchField";
import FavoritesList from "./FavoritesList";
import { SignInSignOutButton, WelcomeName } from "./AuthUi";
import IntlTravelFilter from "./IntlTravelFilter";

const drawerWidth = 240;

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })<{
  open?: boolean;
}>(({ theme, open }) => ({
  flexGrow: 1,
  padding: theme.spacing(3),
  transition: theme.transitions.create("margin", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  marginLeft: `-${drawerWidth}px`,
  ...(open && {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  }),
}));

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})<AppBarProps>(({ theme, open }) => ({
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

interface LayoutProps {
  children?: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const theme = useTheme();
  const [open, setOpen] = React.useState(true);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <AppBar position="fixed" open={open}>
        <Toolbar sx={{ bgcolor: "primary.dark" }}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ mr: 2, ...(open && { display: "none" }) }}
          >
            <MenuIcon />
          </IconButton>

          <Box sx={{ px: 2, mt: 0.5 }}>
            <Link href="/">
              <Image src={logoImg} alt="WHOI Logo" />
            </Link>
          </Box>
          <Box sx={{ px: 2, mt: 0.5 }}>
            <Link href="/" underline="none" sx={{ color: "white" }}>
              <Typography variant="h6" noWrap component="div">
                WHOI Skills Matcher DB
              </Typography>
              <Typography variant="subtitle2">
                Created by AVAST and IS
              </Typography>
            </Link>
          </Box>
          <SearchField />
          <Box
            sx={{
              display: "flex",
              flexGrow: 1,
              alignItems: "center",
              textAlign: "center",
            }}
          >
            <Link
              href="/"
              underline="hover"
              sx={{ color: "white", minWidth: 100 }}
            >
              <Typography>SMEs</Typography>
            </Link>

            <Link
              href="/projects"
              underline="hover"
              sx={{ color: "white", minWidth: 100 }}
            >
              <Typography>Projects</Typography>
            </Link>

            <Link
              href="/about"
              underline="hover"
              sx={{ color: "white", minWidth: 100 }}
            >
              <Typography>About</Typography>
            </Link>
          </Box>
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            <SignInSignOutButton />
          </Box>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "ltr" ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <IntlTravelFilter />
        <Divider />
        <SkillsFilter />
        <Divider />
        <FavoritesList />
      </Drawer>

      <Main open={open}>
        <DrawerHeader />
        {children}
      </Main>
    </Box>
  );
};

export default Layout;
