import * as React from "react";
import { createContainer } from "unstated-next";

type HookData = {
  availableForSeagoing: boolean;
  setAvailableForSeagoing: React.Dispatch<React.SetStateAction<boolean>>;
};

function useSeagoing(): HookData {
  const [availableForSeagoing, setAvailableForSeagoing] = React.useState(false);

  return {
    availableForSeagoing: availableForSeagoing,
    setAvailableForSeagoing: setAvailableForSeagoing,
  };
}

const Seagoing = createContainer(useSeagoing);
export default Seagoing;
