import useSWR from "swr";
import { User } from "../containers/authContainer";
const API_BASE = process.env.NEXT_PUBLIC_API_HOST;
const fetcher = (url: string) => fetch(url).then((r) => r.json());

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
