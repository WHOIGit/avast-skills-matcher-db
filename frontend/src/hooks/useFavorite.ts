import * as React from "react";
import useSWR, { useSWRConfig } from "swr";
import Auth from "../containers/authContainer";
import { User } from "../containers/authContainer";

const API_BASE = process.env.NEXT_PUBLIC_API_HOST;
const profileUrl = `${API_BASE}/api/users/me/`;
const expertsUrl = `${API_BASE}/api/experts/`;

const makeUrl = (endpoint: string): string => {
  return API_BASE + endpoint;
};

type HookData = {
  isFavorite: boolean;
  toggleFavorite: () => void;
};

export default function useFavorite(expert: User): HookData {
  const authCtx = Auth.useContainer();
  const { mutate } = useSWRConfig();
  const [isFavorite, setIsFavorite] = React.useState(false);
  const [favoriteId, setFavoriteId] = React.useState(0);

  React.useEffect(() => {
    // check if current user lists this expert as a Favorite
    if (authCtx.user) {
      const favoredByList = expert.favoredBy.map((item) => item.user);
      const favoriteStatus = favoredByList.includes(authCtx.user?.id);
      setIsFavorite(favoriteStatus);

      // get the Favorite object ID if available
      if (favoriteStatus) {
        const favObj = expert.favoredBy.find(
          (item) => item.user === authCtx.user?.id
        );
        if (favObj) {
          setFavoriteId(favObj.id);
        }
      }
    }
  }, [authCtx.user, expert]);

  // favorite a user
  async function addFavorite() {
    const payload = {
      expert: expert.id,
    };

    const url = makeUrl(`/api/favorites/`);
    const resp = await fetch(url, {
      method: "POST",
      body: JSON.stringify(payload),
      headers: {
        Authorization: `Bearer ${await authCtx.getToken()}`,
        "Content-Type": "application/json",
      },
    });

    return resp;
  }

  // unfavorite a user
  async function deleteFavorite() {
    if (!favoriteId) return null;

    const url = makeUrl(`/api/favorites/${favoriteId}/`);
    const resp = await fetch(url, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${await authCtx.getToken()}`,
        "Content-Type": "application/json",
      },
    });

    return resp;
  }

  // toggle Favorites status through API
  async function toggleFavorite() {
    let resp;
    if (isFavorite) {
      resp = await deleteFavorite();
    } else {
      resp = await addFavorite();
    }
    console.log(resp);

    if (resp?.ok) {
      // refresh the useSWR profile API data
      mutate(profileUrl);
      mutate(expertsUrl);
    }
  }

  return {
    isFavorite: isFavorite,
    toggleFavorite: toggleFavorite,
  };
}
