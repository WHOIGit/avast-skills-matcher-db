import * as React from "react";
import { Grid } from "@mui/material";
// local imports
import Skills, { Skill } from "../containers/skillsContainer";
import Engineers, { Engineer } from "../containers/engineersContainer";
import EngineerCard from "./EngineerCard";

const EngineersGrid = () => {
  const engineersCtx = Engineers.useContainer();
  const skillsCtx = Skills.useContainer();

  const [matchingEngineers, setMatchingEngineers] = React.useState(
    engineersCtx.engineers
  );
  console.log(matchingEngineers);

  React.useEffect(() => {
    // filter all Engineers against the selected skills
    if (engineersCtx.engineers) {
      if (!skillsCtx.selectedSkills.length) {
        // return all Engineers if no skills selected
        setMatchingEngineers(engineersCtx.engineers);
      } else {
        // use selected skill IDs to filter Engineers
        // get flat array of just IDs
        const skillList = skillsCtx.selectedSkills.map(
          (skill: Skill) => skill.id
        ) as string[];

        const engineerList = engineersCtx.engineers.filter(
          (engineer: Engineer) => {
            return skillList.some((id: string) =>
              engineer.profile.skills.includes(id)
            );
          }
        ) as Engineer[];

        setMatchingEngineers(engineerList);
      }
    }
  }, [engineersCtx.engineers, skillsCtx.selectedSkills]);

  if (!matchingEngineers) {
    return null;
  }

  return (
    <Grid container spacing={2}>
      {matchingEngineers.map((engineer: Engineer) => {
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
