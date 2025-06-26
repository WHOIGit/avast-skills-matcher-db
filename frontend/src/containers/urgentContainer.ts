import * as React from "react";
import { createContainer } from "unstated-next";

type HookData = {
  urgentProjectSeek: boolean;
  setUrgentProjectSeek: React.Dispatch<React.SetStateAction<boolean>>;
};

function useUrgent(): HookData {
  const [urgentProjectSeek, setUrgentProjectSeek] = React.useState(false);

  return {
    urgentProjectSeek: urgentProjectSeek,
    setUrgentProjectSeek: setUrgentProjectSeek,
  };
}

const Urgent = createContainer(useUrgent);
export default Urgent;
