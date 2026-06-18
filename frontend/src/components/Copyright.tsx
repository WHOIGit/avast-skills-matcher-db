import * as React from "react";
import Typography from "@mui/material/Typography";
import MuiLink from "@mui/material/Link";

export default function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {"Copyright © "}
      <MuiLink
        color="inherit"
        href="https://intranet.whoi.edu/deeptech/"
        target="_blank"
      >
        WHOI DeepTech
      </MuiLink> and IS {" "}
      {new Date().getFullYear()}.
    </Typography>
  );
}
