import useSWR from "swr";

const API_BASE = process.env.NEXT_PUBLIC_API_HOST;
const fetcher = (url: string) => fetch(url).then((r) => r.json());

export interface Skill {
  id: string;
  name: string;
  url: string;
  parent: string;
  children: [];
}

export interface Data {
  skills: Skill[];
  isLoading: boolean;
  isError: string;
}

const useSkills = (): Data => {
  const { data, error } = useSWR(`${API_BASE}/api/skills/`, fetcher);

  return {
    skills: data,
    isLoading: !error && !data,
    isError: error,
  };
};

export default useSkills;
