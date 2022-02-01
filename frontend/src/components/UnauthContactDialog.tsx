import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import SendIcon from "@mui/icons-material/Send";
import { NextLinkComposed } from "./Link";
import { User } from "../containers/authContainer";
import { Box, IconButton } from "@mui/material";

type Props = {
  engineer: User;
};
export default function UnauthContactDialog({ engineer }: Props) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <IconButton
        aria-label="contact SME"
        color="default"
        onClick={handleClickOpen}
      >
        <SendIcon />
      </IconButton>

      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>
          Contact {engineer.firstName} {engineer.lastName}
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            To contact this SME, please login to your account first.
            <Box sx={{ textAlign: "center", mt: 2 }}>
              <Button
                color="primary"
                variant="contained"
                component={NextLinkComposed}
                to={{
                  pathname: "/login",
                }}
              >
                Login
              </Button>
            </Box>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
