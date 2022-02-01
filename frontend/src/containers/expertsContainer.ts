import * as React from "react";
import { createContainer } from "unstated-next";
import { User } from "../containers/authContainer";
import useExperts from "../hooks/useExperts";
type HookData = {
  experts: User[];
  setExperts: React.Dispatch<React.SetStateAction<User[]>>;
};

function useExpertsContainer(): HookData {
  const { experts } = useExperts();
  let [expertList, setExpertList] = React.useState(experts);

  React.useEffect(() => {
    setExpertList(experts);
  }, [experts]);

  return {
    experts: expertList,
    setExperts: setExpertList,
  };
}

const Experts = createContainer(useExpertsContainer);
export default Experts;
