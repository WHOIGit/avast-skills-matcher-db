import useSWR from "swr";
import { User } from "../containers/authContainer";
const API_BASE = process.env.NEXT_PUBLIC_API_HOST;
const fetcher = (url: string) => fetch(url).then((r) => r.json());

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
