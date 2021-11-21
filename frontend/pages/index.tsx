import * as React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Link from "../src/components/Link";
import Copyright from "../src/components/Copyright";
import EngineersGrid from "../src/components/EngineersGrid";

const Index = () => {
  return (
    <Box sx={{ my: 4 }}>
      <EngineersGrid />
    </Box>
  );
};

export default Index;
