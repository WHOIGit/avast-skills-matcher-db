import * as React from "react";
import { Controller } from "react-hook-form";
import Box from "@mui/material/Box";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import FormGroup from "@mui/material/FormGroup";
// local imports
import Skills, { Skill } from "../containers/skillsContainer";

// pass in "control" argument from React Hook Form based form
export default function SkillsCheckboxes({ control }: any) {
  const skillsCtx = Skills.useContainer();

  const renderSkillsList = (skill: Skill, field: any) => {
    let hasChildren = false;
    if (skill.children.length) {
      hasChildren = true;
    }

    if (!field.value) {
      return null;
    }

    return (
      <>
        <FormControlLabel
          key={skill.id}
          label={skill.name}
          control={
            <Checkbox
              value={skill.id}
              checked={field.value.includes(skill.id)}
              onChange={(event, checked) => {
                if (checked) {
                  field.onChange([
                    ...field.value,
                    parseInt(event.target.value),
                  ]);
                } else {
                  field.onChange(
                    field.value.filter(
                      (value: number) => value !== parseInt(event.target.value)
                    )
                  );
                }
              }}
            />
          }
        />
        <Box sx={{ display: "flex", flexDirection: "column", ml: 3 }}>
          {hasChildren &&
            skill.children.map((child) => renderSkillsList(child, field))}
        </Box>
      </>
    );
  };

  return (
    <FormControl component="fieldset" variant="standard">
      <FormLabel component="legend">Skills</FormLabel>
      <FormGroup>
        <Controller
          name="skills"
          defaultValue={[]}
          control={control}
          //rules={{ required: true }}
          render={({ field }) => (
            <>
              {skillsCtx.skills &&
                skillsCtx.skills.map((skill: Skill) =>
                  renderSkillsList(skill, field)
                )}
            </>
          )}
        />
      </FormGroup>
    </FormControl>
  );
}
