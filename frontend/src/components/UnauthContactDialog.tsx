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
import { Project } from "../hooks/useProjects";

type Props = {
  item: User | Project;
};

function isUser(obj: any): obj is User {
  return obj.lastName !== undefined;
}

export default function UnauthContactDialog({ item }: Props) {
  const [open, setOpen] = React.useState(false);

  let title;
  if (isUser(item)) {
    title = `${item.firstName} ${item.lastName}`;
  } else {
    title = item.title;
  }

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
        <DialogTitle>Contact {title}</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To contact this SME or Project Owner, please login to your account
            first.
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
