import React, { useState, useEffect } from "react";
import { useIsAuthenticated, useMsal } from "@azure/msal-react";
import { InteractionStatus } from "@azure/msal-browser";
import { loginRequest } from "../authConfig";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import Logout from "@mui/icons-material/Logout";
import AccountMenu from "./AccountMenu";

const SignInButton = () => {
  const { instance } = useMsal();
  console.log(instance);

  const handleLogin = (loginType: string) => {
    instance.loginPopup(loginRequest);
  };

  return (
    <div>
      <Button color="inherit" onClick={() => handleLogin("popup")}>
        Login
      </Button>
    </div>
  );
};

export const SignOutButton = () => {
  const { instance } = useMsal();

  const handleLogout = (logoutType: string) => {
    if (logoutType === "popup") {
      instance.logoutPopup();
    } else if (logoutType === "redirect") {
      instance.logoutRedirect();
    }
  };

  return (
    <MenuItem onClick={() => handleLogout("popup")}>
      <ListItemIcon>
        <Logout fontSize="small" />
      </ListItemIcon>
      Logout
    </MenuItem>
  );
};

export const SignInSignOutButton = () => {
  const { inProgress } = useMsal();
  const isAuthenticated = useIsAuthenticated();

  if (isAuthenticated) {
    return <AccountMenu />;
  } else if (
    inProgress !== InteractionStatus.Startup &&
    inProgress !== InteractionStatus.HandleRedirect
  ) {
    // inProgress check prevents sign-in button from being displayed briefly after returning from a redirect sign-in. Processing the server response takes a render cycle or two
    return <SignInButton />;
  } else {
    return null;
  }
};

export const WelcomeName = () => {
  const { accounts } = useMsal();
  const [name, setName] = useState<null | string | undefined>(null);
  console.log(accounts[0]);

  useEffect(() => {
    if (accounts.length > 0) {
      setName(accounts[0].name?.split(" ")[0]);
    } else {
      setName(null);
    }
  }, [accounts]);

  if (name) {
    return <Typography variant="body1">Welcome, {name}</Typography>;
  } else {
    return null;
  }
};
