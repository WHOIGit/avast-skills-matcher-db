import * as React from "react";
import Stack from "@mui/material/Stack";
import { Avatar } from "@mui/material";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import EditIcon from "@mui/icons-material/Edit";
import AddIcon from "@mui/icons-material/Add";
// local imports
import { NextLinkComposed } from "../../src/components/Link";
import Auth from "../../src/containers/authContainer";
import useProfile from "../../src/hooks/useProfile";
import ProfileTabs from "../../src/components/ProfileTabs";

function Me(): React.ReactElement {
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
          {profile?.userType?.includes("EXPERT") && (
            <Button
              variant="contained"
              size="small"
              startIcon={
                profile?.expertProfile?.experience ? <EditIcon /> : <AddIcon />
              }
              component={NextLinkComposed}
              to={{
                pathname: "/profile/edit_profile",
              }}
            >
              {profile?.expertProfile?.experience ? "Edit" : "Create"} SME
              Profile
            </Button>
          )}
        </Stack>
      </Box>

      <Box sx={{ alignItems: "center", maxWidth: 600, py: 2 }}>
        {profile?.userType?.includes("EXPERT") &&
          !profile?.expertProfile?.experience && (
            <Typography
              variant="body1"
              align="center"
              color="text.secondary"
              paragraph
            >
              Welcome to the AVAST Skills Matcher DB! You&rsquo;re now
              registered as a SME on our site. Complete your{" "}
              <NextLinkComposed
                to={{
                  pathname: "/profile/edit_profile",
                }}
              >
                SME Profile
              </NextLinkComposed>{" "}
              and you are all set.
            </Typography>
          )}
      </Box>

      <Box sx={{ mt: 1, width: "100%" }}>
        {profile && <ProfileTabs profile={profile} />}
      </Box>

      {!profile?.userType?.includes("PROJECT_OWNER") && (
        <Box
          sx={{
            maxWidth: 600,
            py: 2,
            textAlign: "center",
          }}
        >
          <Typography
            variant="body1"
            align="center"
            color="text.secondary"
            paragraph
          >
            Want to contact a SME listed on our site? <br />
            Create a &quot;Project&quot; that you can request assistance with
            from one of our users.
          </Typography>

          <Button variant="outlined" startIcon={<AddIcon />}>
            Create Project
          </Button>
        </Box>
      )}

      {!profile?.userType?.includes("EXPERT") && (
        <Box
          sx={{
            maxWidth: 600,
            py: 2,
            textAlign: "center",
          }}
        >
          <Typography
            variant="body1"
            align="center"
            color="text.secondary"
            paragraph
          >
            Want to make your skills available to the WHOI community? Create a
            &quot;SME Profile&quot;, and you will be listed in the Skills
            Matcher DB.
          </Typography>

          <Button
            variant="outlined"
            startIcon={<AddIcon />}
            component={NextLinkComposed}
            to={{
              pathname: "/profile/edit_profile",
            }}
          >
            Create SME Profile
          </Button>
        </Box>
      )}
    </Box>
  );
}

export default Me;
