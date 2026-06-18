import * as React from "react";
import { createContainer } from "unstated-next";

type HookData = {
  lookingForFieldWork: boolean;
  setLookingForFieldWork: React.Dispatch<React.SetStateAction<boolean>>;
};

function useFieldWork(): HookData {
  const [lookingForFieldWork, setLookingForFieldWork] = React.useState(false);

  return {
    lookingForFieldWork: lookingForFieldWork,
    setLookingForFieldWork: setLookingForFieldWork,
  };
}

const FieldWork = createContainer(useFieldWork);
export default FieldWork;
