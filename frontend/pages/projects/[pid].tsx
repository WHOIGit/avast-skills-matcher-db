import * as React from "react";
import { useRouter } from "next/router";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import Stack from "@mui/material/Stack";
// local imports
import SkillChip from "../../src/components/SkillChip";
import InnerNav from "../../src/components/InnerNav";
import { NextLinkComposed } from "../../src/components/Link";
import useProjects from "../../src/hooks/useProjects";
import useProfile from "../../src/hooks/useProfile";
import ContactProjectDialog from "../../src/components/ContactProjectDialog";

export default function ProjectDetail() {
  const router = useRouter();
  const { pid } = router.query;
  const { project } = useProjects(pid);
  const { profile } = useProfile();

  if (!project) {
    return null;
  }

  return (
    <>
      <InnerNav />
      <Box
        sx={{
          marginTop: 1,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Box sx={{ textAlign: "center" }}>
          <Typography component="h1" variant="h4">
            {project?.title}
          </Typography>

          <Typography component="div" variant="subtitle1">
            Project Owner: {project?.projectOwnerDisplay}
          </Typography>
        </Box>

        {project && (
          <ContactProjectDialog project={project} buttonType="standard" />
        )}

        <Box sx={{ mt: 1, width: "100%" }}>
          <Box sx={{ mb: 2 }}>
            <Typography component="h6" variant="h6">
              Skills
            </Typography>
            <Stack direction="row" spacing={2}>
              {project.skills?.map((id: number) => {
                return <SkillChip key={id} skillId={id} size="medium" />;
              })}
            </Stack>
          </Box>

          <Typography component="h6" variant="h6">
            Description
          </Typography>
          <Typography variant="body1" paragraph>
            {project.description}
          </Typography>
        </Box>

        {!profile || !profile.userType?.includes("EXPERT") ? (
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
              Want to join a Project listed on our site? <br />
              Create a &quot;SME Profile&quot; that you can send to the Project
              Owner.
            </Typography>

            <Button
              variant="outlined"
              component={NextLinkComposed}
              startIcon={<AddIcon />}
              to={{
                pathname: "/profile/me",
              }}
            >
              Create SME Profile
            </Button>
          </Box>
        ) : null}
      </Box>
    </>
  );
}
