import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import SendIcon from "@mui/icons-material/Send";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Checkbox from "@mui/material/Checkbox";
import IconButton from "@mui/material/IconButton";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";

import useProfile, { User } from "../hooks/useProfile";

type Props = {
  expert: User;
  buttonType: string;
};
export default function ContactDialog({
  expert,
  buttonType = "standard",
}: Props) {
  const { profile, contactExpert } = useProfile();
  const projects = profile?.projectsOwned;
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
    setOpen(false);
  };

  const handleSend = () => {
    console.log(textRef.current.value);
    contactExpert(expert.id, textRef.current.value, checked);
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
        <IconButton
          aria-label="contact SME"
          color="default"
          onClick={handleClickOpen}
        >
          <SendIcon />
        </IconButton>
      )}

      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>
          Contact {expert.firstName} {expert.lastName}
        </DialogTitle>
        <DialogContent>
          {messageSent ? (
            <div>
              <CheckCircleOutlineIcon color="success" sx={{ fontSize: 80 }} />
              <DialogContentText>Message sent!</DialogContentText>
            </div>
          ) : (
            <div>
              <DialogContentText>
                To contact this SME, you can select one of your Projects that
                you&rsquo;d like to work with them on, or just send a direct
                message. We will send them your Project and contact details and
                notify you if they&rsquo;re interested.
              </DialogContentText>

              <List
                sx={{
                  width: "100%",
                  maxWidth: 360,
                  bgcolor: "background.paper",
                }}
              >
                {projects?.map((project) => {
                  console.log(project);

                  const labelId = `checkbox-list-label-${project.id}`;

                  return (
                    <ListItem key={project.id} disablePadding>
                      <ListItemButton
                        role={undefined}
                        onClick={handleToggle(project.id)}
                        dense
                      >
                        <ListItemIcon>
                          <Checkbox
                            edge="start"
                            checked={checked.indexOf(project.id) !== -1}
                            tabIndex={-1}
                            disableRipple
                            inputProps={{ "aria-labelledby": labelId }}
                          />
                        </ListItemIcon>
                        <ListItemText id={labelId} primary={project.title} />
                      </ListItemButton>
                    </ListItem>
                  );
                })}
              </List>

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
