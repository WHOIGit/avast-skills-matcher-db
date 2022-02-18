import useSWR from "swr";
import { useMsal } from "@azure/msal-react";
import { fetcherWithToken, getMsToken } from "../utils/azureAuth";
import { makeUrl, API_BASE } from "../utils/apiUtils";
const profileUrl = `${API_BASE}/api/users/me/`;

export type Project = {
  id: number;
  title: string;
  description: string;
  project_owner: number;
};

type HookData = {
  projects: Project[];
  project?: Project;
  createProject: (title: string, description: string) => Promise<Response>;
  editProject: (
    pid: number,
    title: string,
    description: string
  ) => Promise<Response>;
};

const useProjects = (pid?: any): HookData => {
  const { instance, inProgress } = useMsal();
  const {
    data: dataProjects,
    mutate,
    error: errorProjects,
  } = useSWR([`${API_BASE}/api/projects/`, instance], fetcherWithToken);

  const { data: dataProject, error: errorProject } = useSWR(
    pid ? [`${API_BASE}/api/projects/${pid}`, instance] : null,
    fetcherWithToken
  );

  const createProject = async (
    title: string,
    description: string
  ): Promise<Response> => {
    const url = makeUrl("/api/projects/");

    const resp = await fetch(url, {
      method: "POST",
      body: JSON.stringify({
        title,
        description,
      }),
      headers: {
        Authorization: `Bearer ${await getMsToken(instance)}`,
        "Content-Type": "application/json",
      },
    });
    if (resp.ok) {
      // refresh the useSWR profile API data
      mutate(profileUrl);
    }
    return resp;
  };

  const editProject = async (
    pid: number,
    title: string,
    description: string
  ): Promise<Response> => {
    const url = makeUrl(`/api/projects/${pid}/`);
    const resp = await fetch(url, {
      method: "PATCH",
      body: JSON.stringify({
        title,
        description,
      }),
      headers: {
        Authorization: `Bearer ${await getMsToken(instance)}`,
        "Content-Type": "application/json",
      },
    });

    if (resp.ok) {
      // refresh the useSWR profile API data
      mutate(profileUrl);
    }
    return resp;
  };

  return {
    projects: dataProjects,
    project: dataProject,
    createProject: createProject,
    editProject: editProject,
  };
};

export default useProjects;
