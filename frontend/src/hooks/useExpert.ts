import useSWR from "swr";
import { User } from "./useProfile";
import { fetcher, API_BASE } from "../utils/apiUtils";

type HookData = {
  expert: User;
  isLoading: boolean;
  isError: any;
};

export default function useExpert(pid: any): HookData {
  // get array of all Engineers
  let { data, error } = useSWR(
    pid ? `${API_BASE}/api/experts/${pid}` : null,
    fetcher
  );

  return {
    expert: data,
    isLoading: !data && !error,
    isError: error,
  };
}
