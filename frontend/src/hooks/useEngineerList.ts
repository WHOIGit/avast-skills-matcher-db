import * as React from "react";
import useSWR from "swr";
import { User } from "../containers/authContainer";
const API_BASE = process.env.NEXT_PUBLIC_API_HOST;
const fetcher = (url: string) => fetch(url).then((r) => r.json());

type HookData = {
  engineers: User[];
  isLoading: boolean;
  isError: any;
};

export default function useEngineerList(): HookData {
  // get array of all Engineers
  let { data: dataEngineers, error: errorEngineers } = useSWR(
    `${API_BASE}/api/engineers/`,
    fetcher
  );

  return {
    engineers: dataEngineers,
    isLoading: !dataEngineers,
    isError: errorEngineers,
  };
}
