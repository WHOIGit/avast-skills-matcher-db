import * as React from "react";
import Chip, { ChipProps } from "@mui/material/Chip";
import Skills, { Skill } from "../containers/skillsContainer";

type Props = {
  skillId: number;
  size?: ChipProps["size"];
};
export default function SkillChip({ skillId, size = "medium" }: Props) {
  const skillsCtx = Skills.useContainer();

  // recursive search through the Skills array of nested objects to match the ID
  function getSkillDataById(skillId: number): Skill | null {
    function searchByDepth(obj: Skill, targetId: number): Skill | null {
      if (obj.id === targetId) {
        return obj;
      }
      if (obj.children) {
        for (let item of obj.children) {
          let check = searchByDepth(item, targetId);
          if (check) {
            return check;
          }
        }
      }
      return null;
    }

    let result = null;
    if (skillsCtx.skills) {
      for (let obj of skillsCtx.skills) {
        result = searchByDepth(obj, skillId);
        if (result) {
          break;
        }
      }
    }

    return result;
  }

  const skill = getSkillDataById(skillId);

  if (!skillsCtx.skills) return null;

  return <Chip label={skill?.name} size={size} />;
}
