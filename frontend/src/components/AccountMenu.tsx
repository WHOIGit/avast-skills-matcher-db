import * as React from "react";
import { useRouter } from "next/router";
import Avatar from "@mui/material/Avatar";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import Divider from "@mui/material/Divider";
import { Button } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import AccountCircle from "@mui/icons-material/AccountCircle";
import Logout from "@mui/icons-material/Logout";
import useProfile from "../../src/hooks/useProfile";
import { SignOutButton } from "./AuthUi";

export default function AccountMenu() {
  const router = useRouter();
  const { profile } = useProfile();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleMenuClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLink = (link: string) => {
    router.push(link);
  };

  if (!profile) {
    return null;
  }

  return (
    <React.Fragment>
      <Tooltip title="Account settings">
        <Button
          variant="text"
          aria-label="account of current user"
          onClick={handleMenuClick}
          color="inherit"
          endIcon={<Avatar alt={profile.firstName} src={profile.avatar} />}
        >
          Welcome {profile.firstName}
        </Button>
      </Tooltip>
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: "visible",
            filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
            mt: 1.5,
            "& .MuiSvgIcon-root": {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            "&:before": {
              content: '""',
              display: "block",
              position: "absolute",
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: "background.paper",
              transform: "translateY(-50%) rotate(45deg)",
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        <MenuItem onClick={() => handleLink("/profile/me")}>
          <AccountCircle /> My account
        </MenuItem>

        <Divider />
        <SignOutButton />
      </Menu>
    </React.Fragment>
  );
}
