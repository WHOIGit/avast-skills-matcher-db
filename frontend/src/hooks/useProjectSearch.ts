import useSWR from "swr";
import { Project } from "./useProjects";
import { fetcher, API_BASE } from "../utils/apiUtils";

type HookData = {
  results: Project[];
  isLoading: boolean;
  isError: any;
};

export default function useProjectSearch(searchTerms?: string): HookData {
  let params;
  if (searchTerms) {
    params = new URLSearchParams({ q: searchTerms });
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
