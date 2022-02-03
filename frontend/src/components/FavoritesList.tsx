import * as React from "react";
import { useRouter } from "next/router";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { Box, Typography } from "@mui/material";
import StarsIcon from "@mui/icons-material/Stars";
import useProfile from "../hooks/useProfile";
import { Favorite } from "../containers/authContainer";

export default function FavoritesList() {
  const { profile } = useProfile();
  const router = useRouter();

  function handleLink(expertId: number) {
    router.push("/experts/" + expertId);
  }

  function renderFavoritesList(favorite: Favorite) {
    return (
      <ListItem key={favorite.id} disablePadding>
        <ListItemButton onClick={() => handleLink(favorite.expert)} dense>
          <ListItemIcon>
            <StarsIcon />
          </ListItemIcon>
          <ListItemText
            id={favorite.id.toString()}
            primary={`${favorite.expertFirstName} ${favorite.expertLastName}`}
          />
        </ListItemButton>
      </ListItem>
    );
  }

  if (!profile?.favorites) return null;

  return (
    <Box>
      <Typography component="h6" variant="subtitle1" sx={{ pl: 2, mt: 2 }}>
        Your Favorites
      </Typography>

      <List>
        {profile.favorites?.map((item) => {
          return renderFavoritesList(item);
        })}
      </List>
    </Box>
  );
}
