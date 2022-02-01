import useSWR from "swr";
import { User } from "../containers/authContainer";
const API_BASE = process.env.NEXT_PUBLIC_API_HOST;
const fetcher = (url: string) => fetch(url).then((r) => r.json());

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

  function searchExperts(terms: string) {}

  return {
    results: data,
    isLoading: !data && !error,
    isError: error,
  };
}
