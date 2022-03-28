import useSWR, { useSWRConfig } from "swr";
import { useMsal } from "@azure/msal-react";
import { fetcherWithToken, getMsToken } from "../utils/azureAuth";
import { makeUrl, API_BASE } from "../utils/apiUtils";
const profileUrl = `${API_BASE}/api/users/me/`;

type ProjectFormData = {
  title: string;
  description: string;
  skills: number[];
};

export interface Project extends ProjectFormData {
  id: number;
  project_owner?: number;
}

type HookData = {
  projects: Project[];
  project?: Project;
  createProject: (data: ProjectFormData) => Promise<Response>;
  editProject: (pid: number, data: ProjectFormData) => Promise<Response>;
  deleteProject: (pid: number) => Promise<Response>;
};

const useProjects = (pid?: any): HookData => {
  const { instance, inProgress } = useMsal();
  const { mutate } = useSWRConfig();
  const {
    data: dataProjects,
    mutate: mutateProject,
    error: errorProjects,
  } = useSWR([`${API_BASE}/api/projects/`, instance], fetcherWithToken);

  const { data: dataProject, error: errorProject } = useSWR(
    pid ? [`${API_BASE}/api/projects/${pid}/`, instance] : null,
    fetcherWithToken
  );

  const createProject = async (data: ProjectFormData): Promise<Response> => {
    const url = makeUrl("/api/projects/");
    const payload = {
      title: data.title,
      description: data.description,
      skills: data.skills,
    };

    const resp = await fetch(url, {
      method: "POST",
      body: JSON.stringify(payload),
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
    data: ProjectFormData
  ): Promise<Response> => {
    const url = makeUrl(`/api/projects/${pid}/`);
    const payload = {
      title: data.title,
      description: data.description,
      skills: data.skills,
    };
    const resp = await fetch(url, {
      method: "PATCH",
      body: JSON.stringify(payload),
      headers: {
        Authorization: `Bearer ${await getMsToken(instance)}`,
        "Content-Type": "application/json",
      },
    });

    if (resp.ok) {
      // refresh the useSWR profile API data
      mutateProject();
      mutate(profileUrl);
    }
    return resp;
  };

  const deleteProject = async (pid: number): Promise<Response> => {
    const url = makeUrl(`/api/projects/${pid}/`);
    const resp = await fetch(url, {
      method: "DELETE",
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
    deleteProject: deleteProject,
  };
};

export default useProjects;
