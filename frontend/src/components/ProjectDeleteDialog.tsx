import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import DeleteIcon from "@mui/icons-material/Delete";
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";

import useProjects, { Project } from "../hooks/useProjects";

type Props = {
  project: Project;
};

export default function ProjectDeleteDialog({ project }: Props) {
  const { deleteProject } = useProjects();
  const textRef = React.useRef() as React.MutableRefObject<HTMLInputElement>;
  const [open, setOpen] = React.useState(false);
  const [checked, setChecked] = React.useState([0]);
  const [isDeleted, setIsDeleted] = React.useState(false);

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
    setIsDeleted(false);
    setOpen(false);
  };

  const handleDelete = () => {
    deleteProject(project.id);
    setIsDeleted(true);
    setTimeout(handleClose, 2000);
  };

  return (
    <div>
      <Tooltip title="Delete Project">
        <IconButton edge="end" aria-label="delete" onClick={handleClickOpen}>
          <DeleteIcon />
        </IconButton>
      </Tooltip>

      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Delete Project - {project.title}</DialogTitle>
        <DialogContent>
          {isDeleted ? (
            <div>
              <CheckCircleOutlineIcon color="success" sx={{ fontSize: 80 }} />
              <DialogContentText>Project Deleted</DialogContentText>
            </div>
          ) : (
            <div>
              <DialogContentText>
                You are about to delete the Project - {project.title}. Are you
                sure?
              </DialogContentText>
            </div>
          )}
        </DialogContent>

        {!isDeleted && (
          <DialogActions>
            <Button onClick={handleClose}>Cancel</Button>
            <Button color="error" onClick={handleDelete}>
              Confirm Delete
            </Button>
          </DialogActions>
        )}
      </Dialog>
    </div>
  );
}
