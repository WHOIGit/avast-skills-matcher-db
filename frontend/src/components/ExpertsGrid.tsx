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
  const skillsCtx = Skills.useContainer();
  const { experts, isLoading, isError } = useExperts();
  const { results } = useExpertSearch(search.searchTerms);

  const [matchingEngineers, setMatchingEngineers] = React.useState(experts);

  React.useEffect(() => {
    // if search is active, set the base array of available experts to search results,
    // else use the full expert list
    let expertList;
    if (results) {
      expertList = results;
    } else {
      expertList = experts;
    }
    // filter all Engineers against the selected skills
    if (expertList) {
      if (!skillsCtx.selectedSkills.length) {
        // return all Engineers if no skills selected
        setMatchingEngineers(expertList);
      } else {
        // use selected skill IDs to filter Engineers
        // get flat array of just IDs
        const skillList = skillsCtx.selectedSkills.map(
          (skill: Skill) => skill.id
        ) as number[];

        const filteredList = expertList.filter((item: User) => {
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

        setMatchingEngineers(filteredList);
      }
    }
  }, [experts, results, skillsCtx.filterInclusive, skillsCtx.selectedSkills]);

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
