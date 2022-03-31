import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import SendIcon from "@mui/icons-material/Send";
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";

import useProjects, { Project } from "../hooks/useProjects";

type Props = {
  project: Project;
  buttonType: string;
};

export default function ContactProjectDialog({
  project,
  buttonType = "standard",
}: Props) {
  const { contactProjectOwner } = useProjects();
  const textRef = React.useRef() as React.MutableRefObject<HTMLInputElement>;
  const [open, setOpen] = React.useState(false);
  const [checked, setChecked] = React.useState([0]);
  const [messageSent, setMessageSent] = React.useState(false);

  const handleToggle = (value: number) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setMessageSent(false);
    setOpen(false);
  };

  const handleSend = () => {
    console.log(textRef.current.value);
    contactProjectOwner(project.id, textRef.current.value);
    setMessageSent(true);
    setTimeout(handleClose, 2000);
  };

  return (
    <div>
      {buttonType === "standard" && (
        <Button
          sx={{ my: 2 }}
          variant="contained"
          onClick={handleClickOpen}
          size="small"
          startIcon={<SendIcon />}
        >
          Contact SME
        </Button>
      )}

      {buttonType === "icon" && (
        <Tooltip title="Contact Project Owner">
          <IconButton
            aria-label="contact Project Owner"
            color="default"
            onClick={handleClickOpen}
          >
            <SendIcon />
          </IconButton>
        </Tooltip>
      )}

      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Contact Project Owner of {project.title}</DialogTitle>
        <DialogContent>
          {messageSent ? (
            <div>
              <CheckCircleOutlineIcon color="success" sx={{ fontSize: 80 }} />
              <DialogContentText>Message sent!</DialogContentText>
            </div>
          ) : (
            <div>
              <DialogContentText>
                To contact the owner of this Project, enter an optional message
                and click &ldquo;Send Request&rdquo;. We will send them your
                Profile and contact details and notify you if they&rsquo;re
                interested in your help.
              </DialogContentText>

              <TextField
                fullWidth
                multiline
                rows={6}
                label={"Message"}
                variant="outlined"
                inputRef={textRef}
              />
            </div>
          )}
        </DialogContent>

        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleSend}>Send Request</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
