import * as React from "react";
import { useEffect } from "react";

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
        <Stack
          sx={{ mt: 1 }}
          direction="row"
          spacing={2}
          justifyContent="center"
        >
          <Button
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

          <Button
            variant="contained"
            size="small"
            startIcon={
              profile?.engineerProfile?.experience ? <EditIcon /> : <AddIcon />
            }
            component={NextLinkComposed}
            to={{
              pathname: "/profile/edit_profile",
            }}
          >
            {profile?.engineerProfile?.experience ? "Edit" : "Create"} Engineer
            Profile
          </Button>
        </Stack>
      </Box>
      <Divider variant="middle" />
      <Box sx={{ alignItems: "center", maxWidth: 600, py: 2 }}>
        {profile?.userType?.includes("ENGINEER") &&
          !profile?.engineerProfile?.experience && (
            <Typography
              variant="body1"
              align="center"
              color="text.secondary"
              paragraph
            >
              Welcome to the AVAST Skills Matcher DB! You're now registered as
              an Engineer on our site. Complete your{" "}
              <NextLinkComposed
                to={{
                  pathname: "/profile/edit_profile",
                }}
              >
                Engineer Profile
              </NextLinkComposed>{" "}
              and you are all set.
            </Typography>
          )}
      </Box>

      <Box sx={{ mt: 1 }}>
        <ProfileTabs profile={profile} />
      </Box>

      {!profile?.userType?.includes("PROJECT OWNER") && (
        <Box sx={{ alignItems: "center", maxWidth: 600, py: 2 }}>
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

          <Button variant="outlined" startIcon={<AddIcon />}>
            Create Project
          </Button>
        </Box>
      )}
    </Box>
  );
};

export default Me;
