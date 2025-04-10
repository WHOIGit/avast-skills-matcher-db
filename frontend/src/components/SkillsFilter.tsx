import * as React from "react";
import { Box, Checkbox, FormControlLabel, Button } from "@mui/material";
import FormLabel from "@mui/material/FormLabel";
import FormControl from "@mui/material/FormControl";
import FormGroup from "@mui/material/FormGroup";
import Switch from "@mui/material/Switch";
import ClearAllIcon from "@mui/icons-material/ClearAll";
//import useSkills, { Skill } from "../hooks/useSkills";
import Skills, { Skill } from "../containers/skillsContainer";
import {Typography} from "@mui/material";

const SkillsFilter: React.FC = () => {
  const skillsCtx = Skills.useContainer();
  const selectedIDs = skillsCtx.selectedSkills.map((skill) => skill.id);

  const renderSkillsList = (skill: Skill) => {
    let hasChildren = false;
    if (skill.children.length) {
      hasChildren = true;
    }
    return (
      <div key={skill.id}>
        <FormControlLabel
          label={<Typography variant="body2" color="textSecondary">{skill.name}</Typography>}
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
      </div>
    );
  };

  return (
    <Box sx={{ px: 2 }}>
      <FormControl component="fieldset" variant="standard" sx={{ my: 2 }}>
        <FormLabel component="legend">Filter by Skills</FormLabel>
        <FormGroup>
          {skillsCtx.skills &&
            skillsCtx.skills.map((skill: Skill) => renderSkillsList(skill))}
        </FormGroup>
      </FormControl>
      <FormControl component="fieldset" variant="standard" sx={{ my: 2 }}>
        <FormLabel component="legend">Filter Type</FormLabel>
        <FormGroup>
          <FormControlLabel
            control={
              <Switch
                checked={skillsCtx.filterInclusive}
                onChange={(event) =>
                  skillsCtx.setFilterInclusive(event.target.checked)
                }
                name="filterType"
              />
            }
            label="Inclusive"
          />
        </FormGroup>
      </FormControl>

      <Button
        variant="contained"
        sx={{ mb: 2 }}
        size="small"
        startIcon={<ClearAllIcon />}
        onClick={skillsCtx.clearSelectStatus}
      >
        Clear Filter
      </Button>
    </Box>
  );
};

export default SkillsFilter;
