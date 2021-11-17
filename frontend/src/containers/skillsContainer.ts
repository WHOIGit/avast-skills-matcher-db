import { useEffect, useState } from "react";
import useSWR from "swr";
import { createContainer } from "unstated-next";

const API_BASE = process.env.NEXT_PUBLIC_API_HOST;
const fetcher = (url: string) => fetch(url).then((r) => r.json());

export type Skill = {
  id: string;
  name: string;
  url: string;
  parent: string;
  children: [];
  isSelected?: boolean;
};

type HookData = {
  skills: Skill[];
  changeSelectStatus: (skill: Skill, checked: boolean) => void;
  isLoading: boolean;
  isError: any;
};

const useSkills = () => {
  const { data, error } = useSWR(`${API_BASE}/api/skills/`, fetcher);
  //const [skills, setSkills] = useState<Skill[]>([]);
  const [selectedSkills, setSelectedSkills] = useState<Skill[]>([]);
  console.log(selectedSkills);

  const changeSelectStatus = (skill: Skill, checked: boolean): void => {
    console.log(skill, checked);
    const skillList = selectedSkills;
    if (checked) {
      setSelectedSkills([...skillList, skill]);
    }
  };

  return {
    skills: data,
    selectedSkills: selectedSkills,
    changeSelectStatus: changeSelectStatus,
    isLoading: !error && !data,
    isError: error,
  };
};

const Skills = createContainer(useSkills);
export default Skills;
