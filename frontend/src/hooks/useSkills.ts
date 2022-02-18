import useSWR from "swr";
import { fetcher, API_BASE } from "../utils/apiUtils";

export type Skill = {
  id: number;
  name: string;
  url: string;
  parent: string;
  children: [];
};

export interface Data {
  skills: Skill[];
  isLoading: boolean;
  isError: string;
}

const useSkills = (pid?: number): Data => {
  const { data: skillsData, error } = useSWR(
    `${API_BASE}/api/skills/`,
    fetcher
  );

  return {
    skills: skillsData,
    isLoading: !error && !skillsData,
    isError: error,
  };
};

export default useSkills;
