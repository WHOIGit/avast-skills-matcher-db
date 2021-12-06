import * as React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Copyright from "../src/components/Copyright";
import EngineersGrid from "../src/components/EngineersGrid";
import Container from "@mui/material/Container";
import { Button, Stack } from "@mui/material";
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
          pt: 4,
          pb: 4,
        }}
      >
        <Container maxWidth="sm">
          <Typography
            component="h1"
            variant="h4"
            align="center"
            color="text.primary"
            gutterBottom
          >
            Welcome to the AVAST Skills Matcher DB
          </Typography>
          <Box sx={{ alignItems: "center", maxWidth: 600, py: 2 }}>
            {!profile?.userType?.includes("ENGINEER") && (
              <Typography
                variant="body1"
                align="center"
                color="text.secondary"
                paragraph
              >
                Want to make your skills available to the WHOI community? <br />
                Create an &quot;Engineer Profile&quot;, and you will be listed
                in the Skills Matcher DB.
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
                Create a &quot;Project&quot; that you can request assistance
                with from one of our users.
              </Typography>
            )}
          </Box>
          <Stack
            sx={{ pt: 0 }}
            direction="row"
            spacing={2}
            justifyContent="center"
          >
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
            </Button>
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
          </Stack>
        </Container>
      </Box>
      <Box sx={{ my: 4 }}>
        <EngineersGrid />
      </Box>
    </>
  );
}
