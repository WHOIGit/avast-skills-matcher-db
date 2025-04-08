import * as React from "react";
import { createContainer } from "unstated-next";

type HookData = {
  internationalTravel: boolean;
  setInternationalTravel: React.Dispatch<React.SetStateAction<boolean>>;
};

function useIntlTravel(): HookData {
  const [internationalTravel, setInternationalTravel] = React.useState(false);

  return {
    internationalTravel: internationalTravel,
    setInternationalTravel: setInternationalTravel,
  };
}

const IntlTravel = createContainer(useIntlTravel);
export default IntlTravel;
