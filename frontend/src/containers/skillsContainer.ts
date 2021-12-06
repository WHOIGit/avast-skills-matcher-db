import { useState } from "react";
import useSWR from "swr";
import { createContainer } from "unstated-next";

const API_BASE = process.env.NEXT_PUBLIC_API_HOST;
const fetcher = (url: string) => fetch(url).then((r) => r.json());

export type Skill = {
  id: number;
  name: string;
  url: string;
  parent: string;
  children: [];
  isSelected?: boolean;
};

type HookData = {
  skills: any;
  selectedSkills: Skill[];
  changeSelectStatus: (skill: Skill, checked: boolean) => void;
  isLoading: boolean;
  isError: any;
};

const useSkills = (): HookData => {
  const { data, error } = useSWR(`${API_BASE}/api/skills/`, fetcher);
  //const [skills, setSkills] = useState<Skill[]>([]);
  const [selectedSkills, setSelectedSkills] = useState<Skill[]>([]);
  console.log(selectedSkills);

  const changeSelectStatus = (skill: Skill, checked: boolean): void => {
    const skillList = selectedSkills;
    if (checked) {
      setSelectedSkills([...skillList, skill]);
    } else if (!checked) {
      setSelectedSkills(skillList.filter((item) => item.id !== skill.id));
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
