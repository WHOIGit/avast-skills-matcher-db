import * as React from "react";
import { useEffect } from "react";
import { useRouter } from "next/router";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import SendIcon from "@mui/icons-material/Send";
import { NextLinkComposed } from "../../src/components/Link";
import Auth from "../../src/containers/authContainer";
import Skills, { Skill } from "../../src/containers/skillsContainer";
import useEngineers from "../../src/hooks/useEngineers";
import useSkills from "../../src/hooks/useSkills";
import Stack from "@mui/material/Stack";
import { Avatar, Chip } from "@mui/material";
import SkillChip from "../../src/components/SkillChip";

export default function EngineerDetail() {
  const router = useRouter();
  const { pid } = router.query;
  const authCtx = Auth.useContainer();
  const skillsCtx = Skills.useContainer();
  const { engineer } = useEngineers(pid);

  const renderSelectedSkills = (id: number) => {
    console.log(authCtx.isAuthenticated);
    return <SkillChip skillId={id} />;
  };

  if (!engineer) {
    return null;
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
        alt={engineer?.firstName}
        src={engineer?.avatar}
      />
      <Box sx={{ textAlign: "center" }}>
        <Typography component="h1" variant="h4">
          {engineer?.firstName} {engineer?.lastName}
        </Typography>

        <Typography component="div" variant="subtitle1">
          {engineer?.title}
        </Typography>
      </Box>

      {authCtx.isAuthenticated &&
        authCtx.user?.userType.includes("PROJECT_OWNER") && (
          <Button
            sx={{ my: 2 }}
            variant="contained"
            size="small"
            startIcon={<SendIcon />}
          >
            Contact Engineer
          </Button>
        )}
      <Box sx={{ mt: 1, width: "100%" }}>
        {skillsCtx.skills && (
          <Box sx={{ mb: 2 }}>
            <Typography component="h6" variant="h6">
              Skills
            </Typography>
            <Stack direction="row" spacing={2}>
              {engineer.engineerProfile?.skills?.map((id: number) => {
                return renderSelectedSkills(id);
              })}
            </Stack>
          </Box>
        )}

        <Typography component="h6" variant="h6">
          Experience
        </Typography>
        <Typography variant="body1" paragraph>
          {engineer.engineerProfile?.experience}
        </Typography>
      </Box>

      {!authCtx.isAuthenticated && (
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
            Want to contact an Engineer listed on our site? <br />
            Create a &quot;Project&quot; that you can request assistance with
            from one of our users.
          </Typography>

          <Button
            variant="outlined"
            component={NextLinkComposed}
            startIcon={<AddIcon />}
            to={{
              pathname: "/signup",
              query: { userTypeId: "PROJECT OWNER" },
            }}
          >
            Create Project
          </Button>
        </Box>
      )}
    </Box>
  );
}
