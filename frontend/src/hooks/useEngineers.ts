import * as React from "react";
import useSWR, { useSWRConfig } from "swr";
import Engineers from "../containers/engineersContainer";
import { User } from "../containers/authContainer";

const API_BASE = process.env.NEXT_PUBLIC_API_HOST;
const fetcher = (url: string) => fetch(url).then((r) => r.json());

type HookData = {
  engineer?: User;
  engineers: User[];
  isLoading: boolean;
  isError: any;
  reset: () => void;
};

const useEngineers = (pid?: any, searchTerms?: string): HookData => {
  let engineersCtx = Engineers.useContainer();
  let { mutate } = useSWRConfig();
  console.log(searchTerms);

  // get single Engineer by pid if requested
  let { data: dataEngineer, error: errorEngineer } = useSWR(
    pid ? `${API_BASE}/api/engineers/${pid}` : null,
    fetcher
  );

  // search Engineers by search term
  let { data: dataEngineerSearch, error: errorEngineerSearch } = useSWR(
    searchTerms ? `${API_BASE}/api/engineers/?q=${searchTerms}` : null,
    fetcher
  );
  console.log(dataEngineerSearch);

  if (dataEngineerSearch) {
    engineersCtx.setEngineers(dataEngineerSearch);
  }

  async function reset() {
    // reset to full list of Engineers
    try {
      let data = await mutate(`${API_BASE}/api/engineers/`);
      console.log(data);

      engineersCtx.setEngineers(data);
    } catch (error) {
      // Handle an error while updating the user here
    }
  }

  return {
    engineer: dataEngineer,
    engineers: engineersCtx.engineers,
    isLoading: !engineersCtx.isError && !engineersCtx.engineers,
    isError: engineersCtx.isError,
    reset: reset,
  };
};

export default useEngineers;
