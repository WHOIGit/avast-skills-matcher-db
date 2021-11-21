import * as React from "react";
import { Grid } from "@mui/material";
// local imports
import Engineers, { Engineer } from "../containers/engineersContainer";
import EngineerCard from "./EngineerCard";

const EngineersGrid: React.FC = () => {
  const engineersCtx = Engineers.useContainer();
  console.log(engineersCtx);

  if (!engineersCtx.engineers) {
    return null;
  }

  return (
    <Grid container spacing={2}>
      {engineersCtx.engineers.map((engineer: Engineer) => {
        return (
          <Grid item xs={4} key={engineer.id}>
            <EngineerCard engineer={engineer} />
          </Grid>
        );
      })}
    </Grid>
  );
};

export default EngineersGrid;
