import * as React from "react";
import { Box, List, ListItem, Checkbox, FormControlLabel } from "@mui/material";
//import useSkills, { Skill } from "../hooks/useSkills";
import Skills, { Skill } from "../containers/skillsContainer";

const SkillsFilter: React.FC = () => {
  const skillsCtx = Skills.useContainer();
  const selectedIDs = skillsCtx.selectedSkills.map((skill) => skill.id);
  console.log(selectedIDs);

  const renderSkillsList = (skill: Skill) => {
    let hasChildren = false;
    if (skill.children.length) {
      hasChildren = true;
    }
    return (
      <>
        <FormControlLabel
          label={skill.name}
          key={skill.id}
          control={
            <Checkbox
              checked={selectedIDs.includes(skill.id)}
              onChange={(e) =>
                skillsCtx.changeSelectStatus(skill, e.target.checked)
              }
            />
          }
        />

        <Box sx={{ display: "flex", flexDirection: "column", ml: 3 }}>
          {hasChildren &&
            skill.children.map((child) => renderSkillsList(child))}
        </Box>
      </>
    );
  };

  return (
    <Box>
      {skillsCtx.skills &&
        skillsCtx.skills.map((skill: Skill) => renderSkillsList(skill))}
    </Box>
  );
};

export default SkillsFilter;
