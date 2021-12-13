import * as React from "react";
import Box from "@mui/material/Box";
import Fab from "@mui/material/Fab";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

export default function InnerNav() {
  const handleClick = () => {
    history.back();
  };

  return (
    <Box sx={{ "& > :not(style)": { m: 1 } }}>
      <Fab
        color="primary"
        aria-label="back"
        size="medium"
        onClick={handleClick}
      >
        <ArrowBackIcon />
      </Fab>
    </Box>
  );
}
