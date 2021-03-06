import * as React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { Button, Stack, Divider } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
// local import
import { NextLinkComposed } from "../../src/components/Link";
import Copyright from "../../src/components/Copyright";
import useProfile from "../../src/hooks/useProfile";
import ProjectsGrid from "../../src/components/ProjectsGrid";

export default function Index() {
  const { profile } = useProfile();

  return (
    <>
      <Box
        sx={{
          bgcolor: "background.paper",
          pt: 3,
          pb: 3,
        }}
      >
        <Container maxWidth="md">
          <Typography
            component="h1"
            variant="h4"
            align="center"
            color="text.primary"
            gutterBottom
          >
            Welcome to the AVAST Skills Matcher DB
          </Typography>

          <Stack
            sx={{ mt: 3 }}
            direction="row"
            spacing={6}
            justifyContent="center"
            divider={<Divider orientation="vertical" flexItem />}
          >
            {!profile?.userType?.includes("EXPERT") && (
              <Box sx={{ textAlign: "center" }}>
                <Typography
                  variant="body1"
                  align="center"
                  color="text.secondary"
                  paragraph
                >
                  Want to offer your assistance on a Project? Create a &quot;SME
                  Profile&quot; to highlight your skills, and then send a
                  messasge to the Project Owner.
                </Typography>
                <Button
                  variant="contained"
                  startIcon={<AddIcon />}
                  component={NextLinkComposed}
                  to={{
                    pathname: "/profile/me",
                  }}
                >
                  Create SME Profile
                </Button>{" "}
              </Box>
            )}

            {!profile?.userType?.includes("PROJECT_OWNER") && (
              <Box sx={{ textAlign: "center" }}>
                <Typography
                  variant="body1"
                  align="center"
                  color="text.secondary"
                  paragraph
                >
                  Have a project you need assistance with? Create a
                  &quot;Project&quot; in your accoutn and it will be listed in
                  the Project database for WHOI SMEs to discover.
                </Typography>

                <Button
                  variant="outlined"
                  startIcon={<AddIcon />}
                  component={NextLinkComposed}
                  to={{
                    pathname: "/profile/me",
                  }}
                >
                  Create Project
                </Button>
              </Box>
            )}
          </Stack>
        </Container>
      </Box>

      <Box sx={{ my: 2 }}>
        <Typography variant="body1" color="text.secondary" paragraph>
          The following <strong>Projects</strong> are looking for assistance:
        </Typography>
      </Box>

      <Box sx={{ my: 4 }}>
        <ProjectsGrid />
      </Box>
    </>
  );
}
