import useSWR from "swr";
import { User } from "./useProfile";
import { fetcher, API_BASE } from "../utils/apiUtils";

type HookData = {
  results: User[];
  isLoading: boolean;
  isError: any;
};

export default function useExpertSearch(searchTerms?: string): HookData {
  let params;
  if (searchTerms) {
    params = new URLSearchParams({ q: searchTerms });
  }

  // search Experts by search term
  const { data, error } = useSWR(
    params ? `${API_BASE}/api/experts/?${params}` : null,
    fetcher
  );

  return {
    results: data,
    isLoading: !data && !error,
    isError: error,
  };
}
