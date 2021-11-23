import useSWR from "swr";
import { createContainer } from "unstated-next";

const API_BASE = process.env.NEXT_PUBLIC_API_HOST;
const fetcher = (url: string) => fetch(url).then((r) => r.json());

type Profile = {
  experience: string;
  skills: string[];
};
export type Engineer = {
  id: string;
  username: string;
  firstName: string;
  lastName: string;
  url: string;
  profile: Profile;
};

type HookData = {
  engineers: any;
  isLoading: boolean;
  isError: any;
};

const useEngineers = (): HookData => {
  const { data, error } = useSWR(`${API_BASE}/api/engineers/`, fetcher);
  console.log(data);

  return {
    engineers: data,
    isLoading: !error && !data,
    isError: error,
  };
};

const Engineers = createContainer(useEngineers);
export default Engineers;
