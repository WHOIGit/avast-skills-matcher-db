import * as React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Copyright from "../src/components/Copyright";
import EngineersGrid from "../src/components/EngineersGrid";
import Container from "@mui/material/Container";
import { Button, Stack, Divider } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import useProfile from "../src/hooks/useProfile";
import { NextLinkComposed } from "../src/components/Link";

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
            {!profile?.userType?.includes("ENGINEER") && (
              <Box sx={{ textAlign: "center" }}>
                <Typography
                  variant="body1"
                  align="center"
                  color="text.secondary"
                  paragraph
                >
                  Want to make your skills available to the WHOI community?{" "}
                  Create an &quot;Engineer Profile&quot;, and you will be listed
                  in the Skills Matcher DB.
                </Typography>
                <Button
                  variant="contained"
                  startIcon={<AddIcon />}
                  component={NextLinkComposed}
                  to={{
                    pathname: "/signup",
                    query: { userTypeId: "ENGINEER" },
                  }}
                >
                  Create Engineer Profile
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
                  Want to contact an Engineer listed on our site? Create a
                  &quot;Project&quot; that you can request assistance with from
                  one of our users.
                </Typography>

                <Button
                  variant="outlined"
                  startIcon={<AddIcon />}
                  component={NextLinkComposed}
                  to={{
                    pathname: "/signup",
                    query: { userTypeId: "PROJECT OWNER" },
                  }}
                >
                  Create Project
                </Button>
              </Box>
            )}
          </Stack>
        </Container>
      </Box>
      <Box sx={{ my: 4 }}>
        <EngineersGrid />
      </Box>
    </>
  );
}
