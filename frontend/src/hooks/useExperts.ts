import useSWR from "swr";
import { User } from "./useProfile";
import { fetcher, API_BASE } from "../utils/apiUtils";

type HookData = {
  experts: User[];
  isLoading: boolean;
  isError: any;
};

export default function useExperts(): HookData {
  // get array of all Engineers
  let { data, error } = useSWR(`${API_BASE}/api/experts/`, fetcher);

  return {
    experts: data,
    isLoading: !data && !error,
    isError: error,
  };
}
