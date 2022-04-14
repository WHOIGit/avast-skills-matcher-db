import * as React from "react";
import { Box, Grid, Typography } from "@mui/material";
// local imports
import Skills, { Skill } from "../containers/skillsContainer";
import Search from "../containers/searchContainer";
import useProjects, { Project } from "../hooks/useProjects";
import useProjectSearch from "../hooks/useProjectSearch";
import ProjectCard from "./ProjectCard";

export default function ProjectsGrid() {
  const search = Search.useContainer();
  const skillsCtx = Skills.useContainer();
  const { projects, isLoading, isError } = useProjects();
  const { results } = useProjectSearch(search.searchTerms);

  const [matchingProjects, setMatchingProjects] = React.useState(projects);

  React.useEffect(() => {
    // if search is active, set the base array of available experts to search results,
    // else use the full expert list
    let projectList;
    if (results) {
      projectList = results;
    } else {
      projectList = projects;
    }
    // filter all Engineers against the selected skills
    if (projectList) {
      if (!skillsCtx.selectedSkills.length) {
        // return all Engineers if no skills selected
        setMatchingProjects(projectList);
      } else {
        // use selected skill IDs to filter Engineers
        // get flat array of just IDs
        const skillList = skillsCtx.selectedSkills.map(
          (skill: Skill) => skill.id
        ) as number[];

        const filteredList = projectList.filter((item: Project) => {
          if (skillsCtx.filterInclusive) {
            return skillList.some((id) => item.skills.includes(id));
          } else {
            return skillList.every((id) => item.skills.includes(id));
          }
        }) as Project[];

        setMatchingProjects(filteredList);
      }
    }
  }, [projects, results, skillsCtx.filterInclusive, skillsCtx.selectedSkills]);

  if (!matchingProjects || !matchingProjects?.length) {
    return (
      <Box>
        <Typography component="p" gutterBottom sx={{ mb: 2 }}>
          No Projects found.
        </Typography>
      </Box>
    );
  }

  return (
    <Grid container spacing={2}>
      {matchingProjects.map((project: Project) => {
        return (
          <Grid item xs={4} key={project.id}>
            <ProjectCard project={project} />
          </Grid>
        );
      })}
    </Grid>
  );
}
