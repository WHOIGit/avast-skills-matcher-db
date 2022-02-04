import * as React from "react";
import { useRouter } from "next/router";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import Stack from "@mui/material/Stack";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import { Avatar, Link } from "@mui/material";
// local imports
import SkillChip from "../../src/components/SkillChip";
import InnerNav from "../../src/components/InnerNav";
import ContactDialog from "../../src/components/ContactDialog";
import { NextLinkComposed } from "../../src/components/Link";
import Auth from "../../src/containers/authContainer";
import useExpert from "../../src/hooks/useExpert";

export default function ExpertDetail() {
  const router = useRouter();
  const { pid } = router.query;
  const authCtx = Auth.useContainer();
  const { expert } = useExpert(pid);

  if (!expert) {
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
        <Avatar
          sx={{ m: 1, bgcolor: "secondary.main", width: 112, height: 112 }}
          alt={expert?.firstName}
          src={expert?.avatar}
        />
        <Box sx={{ textAlign: "center" }}>
          <Typography component="h1" variant="h4">
            {expert?.firstName} {expert?.lastName}
          </Typography>

          <Typography component="div" variant="subtitle1">
            {expert?.title}
          </Typography>
        </Box>
        {expert?.expertProfile?.orcidId && (
          <Link href={expert.expertProfile?.orcidId} target="_blank">
            {expert.expertProfile?.orcidId}
            <OpenInNewIcon />
          </Link>
        )}
        {authCtx.isAuthenticated && <ContactDialog expert={expert} />}

        <Box sx={{ mt: 1, width: "100%" }}>
          <Box sx={{ mb: 2 }}>
            <Typography component="h6" variant="h6">
              Skills
            </Typography>
            <Stack direction="row" spacing={2}>
              {expert.expertProfile?.skills?.map((id: number) => {
                return <SkillChip key={id} skillId={id} size="medium" />;
              })}
            </Stack>
          </Box>

          <Typography component="h6" variant="h6">
            Availability
          </Typography>
          <Typography component="p" variant="body1" paragraph>
            {expert.expertProfile?.availabilityDisplay?.join(", ")}
          </Typography>

          <Typography component="h6" variant="h6">
            Experience
          </Typography>
          <Typography variant="body1" paragraph>
            {expert.expertProfile?.experience}
          </Typography>
        </Box>

        {!authCtx.isAuthenticated ||
        !authCtx.user?.userType.includes("PROJECT_OWNER") ? (
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
        ) : null}
      </Box>
    </>
  );
}
