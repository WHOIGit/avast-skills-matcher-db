import * as React from "react";
import { createContainer } from "unstated-next";

type HookData = {
  lookingForPartTimeWork: boolean;
  setLookingForPartTimeWork: React.Dispatch<React.SetStateAction<boolean>>;
};

function usePartTimeWork(): HookData {
  const [lookingForPartTimeWork, setLookingForPartTimeWork] = React.useState(false);

  return {
    lookingForPartTimeWork: lookingForPartTimeWork,
    setLookingForPartTimeWork: setLookingForPartTimeWork,
  };
}

const PartTimeWork = createContainer(usePartTimeWork);
export default PartTimeWork;
