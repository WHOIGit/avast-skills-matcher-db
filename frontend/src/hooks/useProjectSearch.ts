import useSWR from "swr";
import { Project } from "./useProjects";
import { fetcher, API_BASE } from "../utils/apiUtils";
import { log } from "console";

type HookData = {
  results: Project[];
  isLoading: boolean;
  isError: any;
};

// Returns date portion only: "2026-07-10"
const today = new Date().toISOString().split('T')[0]; 

export default function useProjectSearch(searchTerms?: string): HookData {
  let params;
  if (searchTerms) {
    params = new URLSearchParams({ q: searchTerms, date_after: today });
  }

  // search Experts by search term
  const { data, error } = useSWR(
    params ? `${API_BASE}/api/projects/?${params}` : null,
    fetcher
  );

  return {
    results: data,
    isLoading: !data && !error,
    isError: error,
  };
}
