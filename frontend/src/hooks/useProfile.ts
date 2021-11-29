const API_BASE = process.env.NEXT_PUBLIC_API_HOST;
import Auth from "../containers/authContainer";

const makeUrl = (endpoint: string): string => {
  return API_BASE + endpoint;
};

const useProfile = () => {
  const authCtx = Auth.useContainer();

  const createUser = async (
    firstName: string,
    lastName: string,
    email: string,
    password: string
  ): Promise<Response> => {
    const url = makeUrl("/api/users/");
    // default the Django username to use their email
    const username = email;

    const resp = await fetch(url, {
      method: "POST",
      body: JSON.stringify({
        firstName,
        lastName,
        username,
        password,
        email,
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
    email: string
  ): Promise<Response> => {
    const url = makeUrl(`/api/users/${authCtx.user?.id}/`);
    const resp = await fetch(url, {
      method: "PATCH",
      body: JSON.stringify({
        firstName,
        lastName,
        email,
      }),
      headers: {
        Authorization: `Bearer ${await authCtx.getToken()}`,
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
      console.log(data);
    } else {
      const error = await resp.json();
      console.log(error);
    }
    return resp;
  };

  return {
    profile: authCtx.user,
    createUser: createUser,
    editProfile: editProfile,
    uploadAvatar: uploadAvatar,
  };
};

export default useProfile;
