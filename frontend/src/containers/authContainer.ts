import React, { useState, useEffect } from "react";
import { createContainer } from "unstated-next";

const API_BASE = process.env.NEXT_PUBLIC_API_HOST;

type User = {
  id: string;
  email: string;
  name: string;
  username: string;
};

type TokenResponse = {
  access: string;
  access_expires: number;
};

const makeUrl = (endpoint: string): string => {
  return API_BASE + endpoint;
};

const fetchToken = (username: string, password: string): Promise<Response> => {
  const url = makeUrl("/token/");
  return fetch(url, {
    method: "POST",
    body: JSON.stringify({ username, password }),
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
  });
};

const fetchNewToken = (): Promise<Response> => {
  const url = makeUrl("/token/refresh/");
  return fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
  });
};

async function fetchUser(token: string): Promise<Response> {
  const url = makeUrl("/api/users/me/");
  return fetch(url, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
}

const fetchUserCreate = (
  firstName: string,
  lastName: string,
  email: string,
  password: string
): Promise<Response> => {
  const url = makeUrl("/api/engineers/");
  // default the Django username to use their email
  const username = email;

  return fetch(url, {
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
};

type AuthContainerProps = {
  isAuthenticated: boolean;
  loading: boolean;
  user: User | null;
  login: (username: string, password: string) => Promise<Response>;
  logout: () => void;
  getToken: () => Promise<string>;
  createUser: (
    firstName: string,
    lastName: string,
    email: string,
    password: string
  ) => Promise<Response>;
};

export const useAuth = (): AuthContainerProps => {
  const [loading, setLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState<User | null>(null);
  const [accessToken, setAccessToken] = useState<string>("");
  const [accessTokenExpiry, setAccessTokenExpiry] = useState<number | null>(
    null
  );

  const setNotAuthenticated = (): void => {
    setIsAuthenticated(false);
    setLoading(false);
    setUser(null);
  };

  const accessTokenIsValid = (): boolean => {
    if (accessToken === "") {
      return false;
    }
    const expiry = new Date(accessTokenExpiry);
    console.log("Checking token expiry:", expiry);
    return expiry.getTime() > Date.now();
  };

  const initAuth = async (): Promise<void> => {
    setLoading(true);
    if (!accessTokenIsValid()) {
      console.log("Invalid access token so refetching");
      await refreshToken();
    } else {
      setIsAuthenticated(true);
      setLoading(false);
    }
  };

  useEffect(() => {
    initAuth();
  }, []);

  const initUser = async (token: string): Promise<void> => {
    const resp = await fetchUser(token);
    const user = await resp.json();
    setUser(user);
  };

  const refreshToken = async (): Promise<string> => {
    setLoading(true);
    const resp = await fetchNewToken();
    if (!resp.ok) {
      setNotAuthenticated();
      return;
    }
    const tokenData = await resp.json();
    handleNewToken(tokenData);
    if (user === null) {
      console.log("No user loaded so loading from refreshed token");
      await initUser(tokenData.access);
    }
    return tokenData.access;
  };

  const handleNewToken = (data: TokenResponse): void => {
    setAccessToken(data.access);
    const expiryInt = data.access_expires * 1000;
    setAccessTokenExpiry(expiryInt);
    setIsAuthenticated(true);
    setLoading(false);
  };

  const createUser = async (
    firstName: string,
    lastName: string,
    email: string,
    password: string
  ): Promise<Response> => {
    const resp = await fetchUserCreate(firstName, lastName, email, password);

    if (resp.ok) {
      const data = await resp.json();
      console.log(data);
    } else {
      const error = await resp.json();
      console.log(error);
      setIsAuthenticated(false);
      setLoading(true);
      // Let the page handle the error
    }
    return resp;
  };

  const login = async (
    username: string,
    password: string
  ): Promise<Response> => {
    const resp = await fetchToken(username, password);
    if (resp.ok) {
      const tokenData = await resp.json();
      handleNewToken(tokenData);
      await initUser(tokenData.access);
    } else {
      setIsAuthenticated(false);
      setLoading(true);
      // Let the page handle the error
    }
    return resp;
  };

  const getToken = async (): Promise<string> => {
    // Returns an access token if there's one or refetches a new one
    console.log("Getting access token..");
    if (accessTokenIsValid()) {
      console.log("Getting access token.. existing token still valid");
      return Promise.resolve(accessToken);
    } else if (loading) {
      while (loading) {
        console.log("Getting access token.. waiting for token to be refreshed");
      }
      // Assume this means the token is in the middle of refreshing
      return Promise.resolve(accessToken);
    } else {
      console.log("Getting access token.. getting a new token");
      const token = await refreshToken();
      return token;
    }
  };

  const logout = (): void => {
    setAccessToken("");
    setAccessTokenExpiry(null);
    setNotAuthenticated();
    const url = makeUrl("/token/logout/");
    fetch(url, {
      method: "POST",
      credentials: "include",
    });
    // TODO: call endpoint to delete cookie
  };

  console.log(user);

  return {
    isAuthenticated,
    user,
    loading,
    login,
    logout,
    getToken,
    createUser,
  };
};

const Auth = createContainer(useAuth);
export default Auth;