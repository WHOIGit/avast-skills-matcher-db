import * as React from "react";
import { Grid } from "@mui/material";
// local imports
import { User } from "../containers/authContainer";
import Skills, { Skill } from "../containers/skillsContainer";
import Search from "../containers/searchContainer";
import useExperts from "../hooks/useExperts";
import useExpertSearch from "../hooks/useExpertSearch";
import ExpertCard from "./ExpertCard";

export default function ExpertsGrid() {
  const search = Search.useContainer();
  const { experts, isLoading, isError } = useExperts();
  const { results } = useExpertSearch(search.searchTerms);
  const skillsCtx = Skills.useContainer();
  if (search.searchTerms) {
    console.log("RESULTS HERE", results);
  }

  const [matchingEngineers, setMatchingEngineers] = React.useState(experts);

  React.useEffect(() => {
    // filter all Engineers against the selected skills
    if (experts) {
      if (!skillsCtx.selectedSkills.length) {
        // return all Engineers if no skills selected
        setMatchingEngineers(experts);
      } else {
        // use selected skill IDs to filter Engineers
        // get flat array of just IDs
        const skillList = skillsCtx.selectedSkills.map(
          (skill: Skill) => skill.id
        ) as number[];

        const engineerList = experts.filter((item: User) => {
          if (skillsCtx.filterInclusive) {
            return skillList.some((id) =>
              item.expertProfile.skills.includes(id)
            );
          } else {
            return skillList.every((id) =>
              item.expertProfile.skills.includes(id)
            );
          }
        }) as User[];

        setMatchingEngineers(engineerList);
      }
    }
  }, [experts, skillsCtx.filterInclusive, skillsCtx.selectedSkills]);

  if (!matchingEngineers) {
    return null;
  }

  return (
    <Grid container spacing={2}>
      {matchingEngineers.map((expert: User) => {
        return (
          <Grid item xs={4} key={expert.id}>
            <ExpertCard expert={expert} />
          </Grid>
        );
      })}
    </Grid>
  );
}
