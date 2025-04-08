import * as React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { Button, Stack, Divider } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
// local import
import { NextLinkComposed } from "../src/components/Link";
import Copyright from "../src/components/Copyright";
import ExpertsGrid from "../src/components/ExpertsGrid";
import useProfile from "../src/hooks/useProfile";

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
            Welcome to the WHOI Skills Matcher DB
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
                  Want to make your skills available to the WHOI community?
                  Create a &quot;SME Profile&quot;, and you will be listed in
                  the Skills Matcher DB.
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
                  Want to recruit help for your research or project? Create a
                  &quot;Project&quot; that you can request assistance with from
                  one of our users.
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
          The following <strong>SMEs (Subject Matter Experts)</strong> are
          available to contact for assistance:
        </Typography>
      </Box>
      <Box sx={{ my: 4 }}>
        <ExpertsGrid />
      </Box>
    </>
  );
}
