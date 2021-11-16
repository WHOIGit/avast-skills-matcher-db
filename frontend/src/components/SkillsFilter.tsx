import * as React from "react";
import { Box } from "@mui/material";
import useSkills from "../hooks/useSkills";
import { Data } from "../hooks/useSkills";

const SkillsFilter: React.FC = () => {
  const { skills, isLoading, isError } = useSkills();
  console.log(skills);

  return <Box>TExt</Box>;
};

export default SkillsFilter;
