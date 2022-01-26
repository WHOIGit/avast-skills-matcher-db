import * as React from "react";
import useSWR from "swr";
import { createContainer } from "unstated-next";
import { User } from "../containers/authContainer";
const API_BASE = process.env.NEXT_PUBLIC_API_HOST;
const fetcher = (url: string) => fetch(url).then((r) => r.json());

type HookData = {
  engineers: User[];
  setEngineers: React.Dispatch<React.SetStateAction<never[]>>;
  isLoading: boolean;
  isError: any;
};

const useEngineers = (): HookData => {
  let [engineerList, setEngineerList] = React.useState([]);
  // get array of all Engineers
  let { data: dataEngineers, error: errorEngineers } = useSWR(
    `${API_BASE}/api/engineers/`,
    fetcher
  );

  React.useEffect(() => {
    setEngineerList(dataEngineers);
  }, [dataEngineers]);

  return {
    engineers: engineerList,
    setEngineers: setEngineerList,
    isLoading: !dataEngineers,
    isError: errorEngineers,
  };
};

const Engineers = createContainer(useEngineers);
export default Engineers;
