import * as React from "react";
import { useEffect } from "react";
import { useRouter } from "next/router";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import EditIcon from "@mui/icons-material/Edit";
import AddIcon from "@mui/icons-material/Add";
import { NextLinkComposed } from "../../src/components/Link";
import Auth from "../../src/containers/authContainer";
import useProfile from "../../src/hooks/useProfile";
import Stack from "@mui/material/Stack";
import { Divider, Avatar } from "@mui/material";
import ProfileTabs from "../../src/components/ProfileTabs";

const Me = (): React.ReactElement => {
  const router = useRouter();
  const authCtx = Auth.useContainer();
  const { profile } = useProfile();

  if (!authCtx.isAuthenticated) {
    return (
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <p>Sign In</p>
      </Box>
    );
  }

  return (
    <Box
      sx={{
        marginTop: 8,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Avatar
        sx={{ m: 1, bgcolor: "secondary.main", width: 112, height: 112 }}
        alt={profile?.firstName}
        src={profile?.avatar}
      />
      <Box sx={{ textAlign: "center" }}>
        <Typography component="h1" variant="h4">
          {profile?.firstName} {profile?.lastName}
        </Typography>

        <Typography component="div" variant="subtitle1">
          {profile?.email}
        </Typography>

        <Typography component="div" variant="subtitle1">
          {profile?.title}
        </Typography>

        <Button
          sx={{ mt: 1 }}
          variant="contained"
          size="small"
          startIcon={<EditIcon />}
          component={NextLinkComposed}
          to={{
            pathname: "/profile/edit",
          }}
        >
          Edit Account
        </Button>
      </Box>
      <Divider variant="middle" />
      <Box sx={{ alignItems: "center", maxWidth: 600, py: 2 }}>
        {!profile?.userType?.includes("ENGINEER") && (
          <Typography
            variant="body1"
            align="center"
            color="text.secondary"
            paragraph
          >
            Want to make your skills available to the WHOI community? <br />
            Create an &quot;Engineer Profile&quot;, and you will be listed in
            the Skills Matcher DB.
          </Typography>
        )}

        {!profile?.userType?.includes("PROJECT OWNER") && (
          <Typography
            variant="body1"
            align="center"
            color="text.secondary"
            paragraph
          >
            Want to contact an Engineer listed on our site? <br />
            Create a &quot;Project&quot; that you can request assistance with
            from one of our users.
          </Typography>
        )}
      </Box>
      <Stack sx={{ pt: 0 }} direction="row" spacing={2} justifyContent="center">
        <Button
          variant="contained"
          startIcon={
            profile?.userType?.includes("ENGINEER") ? <EditIcon /> : <AddIcon />
          }
          component={NextLinkComposed}
          to={{
            pathname: "/profile/edit_profile",
          }}
        >
          {profile?.userType?.includes("ENGINEER") ? "Edit" : "Create"} Engineer
          Profile
        </Button>
        <Button variant="outlined" startIcon={<AddIcon />}>
          Create Project
        </Button>
      </Stack>
      <Box sx={{ mt: 2 }}>
        <ProfileTabs profile={profile} />
      </Box>
    </Box>
  );
};

export default Me;
