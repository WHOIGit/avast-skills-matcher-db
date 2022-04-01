import useSWR, { useSWRConfig } from "swr";
import { useMsal } from "@azure/msal-react";
import { fetcherWithToken, getMsToken } from "../utils/azureAuth";
import { makeUrl, fetcher, API_BASE } from "../utils/apiUtils";
const profileUrl = `${API_BASE}/api/users/me/`;

type ProjectFormData = {
  title: string;
  description: string;
  skills: number[];
};

export interface Project extends ProjectFormData {
  id: number;
  projectOwner?: number;
  projectOwnerDisplay: string;
}

type HookData = {
  projects: Project[];
  project?: Project;
  createProject: (data: ProjectFormData) => Promise<Response>;
  editProject: (pid: number, data: ProjectFormData) => Promise<Response>;
  deleteProject: (pid: number) => Promise<Response>;
  isLoading: boolean;
  isError: boolean;
  contactProjectOwner: (
    projectId: number,
    message: string
  ) => Promise<Response>;
};

const useProjects = (pid?: any): HookData => {
  const { instance, inProgress } = useMsal();
  const { mutate } = useSWRConfig();
  const {
    data: dataProjects,
    mutate: mutateProject,
    error: errorProjects,
  } = useSWR(`${API_BASE}/api/projects/`, fetcher);

  const { data: dataProject, error: errorProject } = useSWR(
    pid ? `${API_BASE}/api/projects/${pid}/` : null,
    fetcher
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

  const contactProjectOwner = async (
    projectId: number,
    message: string
  ): Promise<Response> => {
    const payload = {
      projectId,
      message,
    };

    const url = makeUrl(`/api/users/contact_project_owner/`);
    const resp = await fetch(url, {
      method: "POST",
      body: JSON.stringify(payload),
      headers: {
        Authorization: `Bearer ${await getMsToken(instance)}`,
        "Content-Type": "application/json",
      },
    });

    return resp;
  };

  return {
    projects: dataProjects,
    project: dataProject,
    createProject: createProject,
    editProject: editProject,
    deleteProject: deleteProject,
    isLoading: !dataProjects && !errorProjects,
    isError: errorProjects,
    contactProjectOwner: contactProjectOwner,
  };
};

export default useProjects;
