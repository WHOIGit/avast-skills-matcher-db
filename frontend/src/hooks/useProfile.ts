import useSWR, { useSWRConfig } from "swr";
import { useMsal, useAccount } from "@azure/msal-react";
import { Project } from "./useProjects";

const API_BASE = process.env.NEXT_PUBLIC_API_HOST;
const AZURE_SCOPE_ID = process.env.NEXT_PUBLIC_AZURE_SCOPE_ID;

const profileUrl = `${API_BASE}/api/users/me/`;
const expertsUrl = `${API_BASE}/api/experts/`;

export type Profile = {
  experience: string;
  skills: number[];
  availability: string[] | null;
  availabilityDisplay?: string[] | null;
  orcidId: string | null;
};

export type Favorite = {
  id: number;
  user: number;
  expert: number;
  expertFirstName?: string;
  expertLastName?: string;
};

export type User = {
  id: number;
  email: string;
  firstName: string;
  lastName: string;
  username: string;
  avatar: string;
  title: string;
  userType: string[];
  expertProfile: Profile;
  projectsOwned: Project[];
  favorites: Favorite[];
  favoredBy: Favorite[];
};

const makeUrl = (endpoint: string): string => {
  return API_BASE + endpoint;
};

type HookData = {
  profile: User;
  createUser: (
    firstName: string,
    lastName: string,
    email: string,
    password: string,
    userTypeId: string
  ) => Promise<Response>;
  editProfile: (title: string) => Promise<Response>;
  uploadAvatar: (image: string) => Promise<Response>;
  editExpertProfile: (data: Profile) => Promise<Response>;
  createProject: (title: string, description: string) => Promise<Response>;
  contactExpert: (
    expertId: number,
    message: string,
    projects: number[]
  ) => Promise<Response>;
};

const useProfile = (): HookData => {
  const { instance, accounts, inProgress } = useMsal();
  const account = useAccount(accounts[0] || {});
  // use global mutate function for multiple SWR endpoints
  const { mutate } = useSWRConfig();

  async function getMsToken() {
    let accessToken;

    if (!account) {
      throw Error("No active account! Verify a user has been signed in.");
    }
    // get token from Azure AD for backen API
    // required scope format: "<backend_applicationid>/read" (DON'T USE "api://" starter from MS docs)
    const response = await instance.acquireTokenSilent({
      scopes: [`${AZURE_SCOPE_ID}/read`],
    });
    accessToken = response.accessToken;
    return accessToken;
  }

  // async fetcher function for useSWR hook using token from auth Context
  async function fetcherWithToken(url: string) {
    return fetch(url, {
      headers: {
        Authorization: `Bearer ${await getMsToken()}`,
      },
    }).then((r) => r.json());
  }

  const { data, error } = useSWR(profileUrl, fetcherWithToken);
  console.log(data);

  const createUser = async (
    firstName: string,
    lastName: string,
    email: string,
    password: string,
    userTypeId: string
  ): Promise<Response> => {
    const url = makeUrl("/api/users/");
    // default the Django username to use their email
    const username = email;
    // convert userType to array to match backend API field
    const userType = [userTypeId];
    const resp = await fetch(url, {
      method: "POST",
      body: JSON.stringify({
        firstName,
        lastName,
        username,
        password,
        email,
        userType,
      }),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });

    return resp;
  };

  const editProfile = async (title: string): Promise<Response> => {
    const url = makeUrl(`/api/users/update_profile/`);
    const resp = await fetch(url, {
      method: "PATCH",
      body: JSON.stringify({
        title,
      }),
      headers: {
        Authorization: `Bearer ${await getMsToken()}`,
        "Content-Type": "application/json",
      },
    });

    if (resp.ok) {
      // const data = await resp.json();
      // refresh the useSWR profile API data
      mutate(profileUrl);
      mutate(expertsUrl);
    }
    return resp;
  };

  const editExpertProfile = async (data: Profile): Promise<Response> => {
    const payload = {
      experience: data.experience,
      skills: data.skills,
      orcidId: data.orcidId,
      availability: data.availability,
    };
    const url = makeUrl(`/api/users/update_expert_profile/`);
    const resp = await fetch(url, {
      method: "PATCH",
      body: JSON.stringify(payload),
      headers: {
        Authorization: `Bearer ${await getMsToken()}`,
        "Content-Type": "application/json",
      },
    });

    if (resp.ok) {
      // refresh the useSWR profile API data
      mutate(profileUrl);
      mutate(expertsUrl);
    }
    return resp;
  };

  const uploadAvatar = async (image: string): Promise<Response> => {
    const url = makeUrl(`/api/users/set_avatar/`);
    const body = new FormData();
    body.append("avatar", image);
    const resp = await fetch(url, {
      method: "PATCH",
      body,
      headers: {
        Authorization: `Bearer ${await getMsToken()}`,
      },
    });

    if (resp.ok) {
      // refresh the useSWR profile API data
      mutate(profileUrl);
      mutate(expertsUrl);
    }
    return resp;
  };

  const createProject = async (
    title: string,
    description: string
  ): Promise<Response> => {
    const url = makeUrl(`/api/projects/`);
    const resp = await fetch(url, {
      method: "POST",
      body: JSON.stringify({
        title,
        description,
      }),
      headers: {
        Authorization: `Bearer ${await getMsToken()}`,
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

  const contactExpert = async (
    expertId: number,
    message: string,
    projects: number[]
  ): Promise<Response> => {
    const payload = {
      expertId,
      message,
      projects,
    };

    const url = makeUrl(`/api/users/contact_expert/`);
    const resp = await fetch(url, {
      method: "POST",
      body: JSON.stringify(payload),
      headers: {
        Authorization: `Bearer ${await getMsToken()}`,
        "Content-Type": "application/json",
      },
    });

    return resp;
  };

  return {
    profile: data,
    createUser: createUser,
    editProfile: editProfile,
    uploadAvatar: uploadAvatar,
    editExpertProfile: editExpertProfile,
    createProject: createProject,
    contactExpert: contactExpert,
  };
};

export default useProfile;
