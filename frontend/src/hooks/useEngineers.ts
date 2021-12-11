import useSWR from "swr";
import { createContainer } from "unstated-next";
import { User } from "../containers/authContainer";
const API_BASE = process.env.NEXT_PUBLIC_API_HOST;
const fetcher = (url: string) => fetch(url).then((r) => r.json());

type HookData = {
  engineer?: User;
  engineers: User[];
  isLoading: boolean;
  isError: any;
};

const useEngineers = (pid?: any): HookData => {
  // get array of all Engineers
  const { data: dataEngineers, error: errorEngineers } = useSWR(
    `${API_BASE}/api/engineers/`,
    fetcher
  );

  // get single Engineer by pid if requested
  const { data: dataEngineer, error: errorEngineer } = useSWR(
    pid ? `${API_BASE}/api/engineers/${pid}` : null,
    fetcher
  );
  console.log(dataEngineer);

  return {
    engineer: dataEngineer,
    engineers: dataEngineers,
    isLoading: !dataEngineers && !dataEngineers,
    isError: errorEngineers,
  };
};

export default useEngineers;
