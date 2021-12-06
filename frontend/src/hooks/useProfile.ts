import { useState } from "react";
import useSWR from "swr";
import Auth, { User } from "../containers/authContainer";

const API_BASE = process.env.NEXT_PUBLIC_API_HOST;
const profileUrl = `${API_BASE}/api/users/me/`;

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
  editProfile: (
    firstName: string,
    lastName: string,
    email: string,
    title: string
  ) => Promise<Response>;
  uploadAvatar: (image: string) => Promise<Response>;
  editEngineerProfile: (experience: string, skills: []) => Promise<Response>;
};

const useProfile = (): HookData => {
  const authCtx = Auth.useContainer();

  // async fetcher function for useSWR hook using token from auth Context
  const fetcherWithToken = async (url: string) => {
    return fetch(url, {
      headers: {
        Authorization: `Bearer ${await authCtx.getToken()}`,
      },
    }).then((r) => r.json());
  };

  const { data, mutate, error } = useSWR(profileUrl, fetcherWithToken);
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
    if (resp.ok) {
      const data = await resp.json();
      console.log(data);
    } else {
      const error = await resp.json();
      console.log(error);
    }
    return resp;
  };

  const editProfile = async (
    firstName: string,
    lastName: string,
    email: string,
    title: string
  ): Promise<Response> => {
    const url = makeUrl(`/api/users/${authCtx.user?.id}/`);
    const resp = await fetch(url, {
      method: "PATCH",
      body: JSON.stringify({
        firstName,
        lastName,
        email,
        title,
      }),
      headers: {
        Authorization: `Bearer ${await authCtx.getToken()}`,
        "Content-Type": "application/json",
      },
    });

    if (resp.ok) {
      const data = await resp.json();
      // refresh the useSWR profile API data
      mutate(profileUrl);
      console.log(data);
    } else {
      const error = await resp.json();
      console.log(error);
    }
    return resp;
  };

  const editEngineerProfile = async (
    experience: string,
    skills: []
  ): Promise<Response> => {
    const payload = {
      experience: experience,
      skills: skills,
    };
    const url = makeUrl(
      `/api/users/${authCtx.user?.id}/update_engineer_profile/`
    );
    const resp = await fetch(url, {
      method: "PATCH",
      body: JSON.stringify(payload),
      headers: {
        Authorization: `Bearer ${await authCtx.getToken()}`,
        "Content-Type": "application/json",
      },
    });

    if (resp.ok) {
      const data = await resp.json();
      // refresh the useSWR profile API data
      mutate(profileUrl);
      console.log(data);
    } else {
      const error = await resp.json();
      console.log(error);
    }
    return resp;
  };

  const uploadAvatar = async (image: string): Promise<Response> => {
    const url = makeUrl(`/api/users/${authCtx.user?.id}/set_avatar/`);
    const body = new FormData();
    body.append("avatar", image);
    const resp = await fetch(url, {
      method: "PATCH",
      body,
      headers: {
        Authorization: `Bearer ${await authCtx.getToken()}`,
      },
    });

    if (resp.ok) {
      const data = await resp.json();
      // refresh the useSWR profile API data
      mutate(profileUrl);
      console.log(data);
    } else {
      const error = await resp.json();
      console.log(error);
    }
    return resp;
  };

  return {
    profile: data,
    createUser: createUser,
    editProfile: editProfile,
    uploadAvatar: uploadAvatar,
    editEngineerProfile: editEngineerProfile,
  };
};

export default useProfile;
