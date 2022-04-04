import * as React from "react";
import { useRouter } from "next/router";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import DeleteIcon from "@mui/icons-material/Delete";
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
// local imports
import useProjects, { Project } from "../hooks/useProjects";

type Props = {
  project: Project;
};

export default function ProjectDeleteDialog({ project }: Props) {
  const { deleteProject } = useProjects();
  const router = useRouter();
  const [open, setOpen] = React.useState(false);
  const [isDeleted, setIsDeleted] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setIsDeleted(false);
    setOpen(false);
    // redirect to user profile
    router.push("/profile/me?tabId=1");
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
