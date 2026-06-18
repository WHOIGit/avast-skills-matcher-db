import * as React from "react";
import { Grid } from "@mui/material";
// local imports
import { User } from "../containers/authContainer";
import Skills, { Skill } from "../containers/skillsContainer";
import Search from "../containers/searchContainer";
import useExperts from "../hooks/useExperts";
import useExpertSearch from "../hooks/useExpertSearch";
import ExpertCard from "./ExpertCard";
import IntlTravel from "../containers/intlTravelContainer";
import Urgent from "../containers/urgentContainer";
import FieldWork from "../containers/fieldWorkContainer";
import PartTimeWork from "../containers/partTimeWorkContainer";
import Seagoing from "../containers/seagoingContainer";

export default function ExpertsGrid() {
  const search = Search.useContainer();
  const skillsCtx = Skills.useContainer();
  const IntlTravelCtx = IntlTravel.useContainer();
  const urgentCtx = Urgent.useContainer();
  const fieldWorkCtx = FieldWork.useContainer();
  const partTimeWorkCtx = PartTimeWork.useContainer();
  const seagoingCtx = Seagoing.useContainer();

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
    console.log(expertList);
    
    // filter all Experts against international travel
    if (expertList && IntlTravelCtx.internationalTravel) {
      const intlTravelList = expertList.filter((item: User) => {
        return item.expertProfile.internationalTravel
      }) as User[];
      expertList = intlTravelList   
    }

    // filter all Experts against Urgently Seeking
    if (expertList && urgentCtx.urgentProjectSeek) {
      const urgentList = expertList.filter((item: User) => {
        return item.expertProfile.urgentProjectSeek
      }) as User[];
      expertList = urgentList   
    }

    // filter all Experts against Looking for Field Work
    if (expertList && fieldWorkCtx.lookingForFieldWork) {
      const fieldWorkList = expertList.filter((item: User) => {
        return item.expertProfile.lookingForFieldWork
      }) as User[];
      console.log("field work list", fieldWorkList);
      expertList = fieldWorkList   
    }

    // filter all Experts against Looking for Part Time Work
    if (expertList && partTimeWorkCtx.lookingForPartTimeWork) {
      const partTimeWorkList = expertList.filter((item: User) => {
        return item.expertProfile.lookingForPartTimeWork
      }) as User[];
      expertList = partTimeWorkList   
    }

    // filter all Experts against Available for Seagoing
    if (expertList && seagoingCtx.availableForSeagoing) {
      const seagoingList = expertList.filter((item: User) => {
        return item.expertProfile.availableForSeagoing
      }) as User[];
      expertList = seagoingList   
    }

    // filter all Experts against the selected skills
    if (expertList) {
      if (!skillsCtx.selectedSkills.length) {
        // return all Engineers if no skills selected
        setMatchingEngineers(expertList);
      } else {
        // use selected skill IDs to filter Experts
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
  }, [experts, results, skillsCtx.filterInclusive, skillsCtx.selectedSkills, IntlTravelCtx.internationalTravel, urgentCtx.urgentProjectSeek, fieldWorkCtx.lookingForFieldWork, partTimeWorkCtx.lookingForPartTimeWork, seagoingCtx.availableForSeagoing]);

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
