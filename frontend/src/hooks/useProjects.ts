import useSWR from "swr";
import Auth, { User } from "../containers/authContainer";

const API_BASE = process.env.NEXT_PUBLIC_API_HOST;
const profileUrl = `${API_BASE}/api/users/me/`;

const makeUrl = (endpoint: string): string => {
  return API_BASE + endpoint;
};

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

const useProfile = (pid?: any): HookData => {
  const authCtx = Auth.useContainer();
  // standard no Auth fetcher
  const fetcher = (url: string) => fetch(url).then((r) => r.json());
  // async fetcher function for useSWR hook using token from auth Context
  const fetcherWithToken = async (url: string) => {
    return fetch(url, {
      headers: {
        Authorization: `Bearer ${await authCtx.getToken()}`,
      },
    }).then((r) => r.json());
  };

  const {
    data: dataProjects,
    mutate,
    error: errorProjects,
  } = useSWR(`${API_BASE}/api/projects/`, fetcherWithToken);

  const { data: dataProject, error: errorProject } = useSWR(
    pid ? `${API_BASE}/api/projects/${pid}` : null,
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
        Authorization: `Bearer ${await authCtx.getToken()}`,
        "Content-Type": "application/json",
      },
    });
    if (resp.ok) {
      // const data = await resp.json();
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
        Authorization: `Bearer ${await authCtx.getToken()}`,
        "Content-Type": "application/json",
      },
    });

    if (resp.ok) {
      // const data = await resp.json();
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

export default useProfile;
