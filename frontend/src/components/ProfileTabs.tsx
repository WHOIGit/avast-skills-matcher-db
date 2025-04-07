import * as React from "react";
import { useRouter } from "next/router";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import IconButton from "@mui/material/IconButton";
import CommentIcon from "@mui/icons-material/Comment";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
// local imports
import Link, { NextLinkComposed } from "./Link";
import { User } from "../hooks/useProfile";
import SkillChip from "./SkillChip";
import useProjects, { Project } from "../hooks/useProjects";
import ProjectDeleteDialog from "./ProjectDeleteDialog";
import Divider from "@mui/material/Divider";
import CardTravelIcon from '@mui/icons-material/CardTravel';
import Chip from '@mui/material/Chip';
import { log } from "console";

type TabPanelProps = {
  children?: React.ReactNode;
  index: number;
  value: number;
};

type ComponentProps = {
  profile: User;
  showTab: number;
};

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`profile-tabpanel-${index}`}
      aria-labelledby={`profile-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `profile-tab-${index}`,
    "aria-controls": `profile-tabpanel-${index}`,
  };
}

export default function ProfileTabs({ profile, showTab }: ComponentProps) {
  
  const router = useRouter();
  const [value, setValue] = React.useState(
    profile.userType?.includes("EXPERT") ? 0 : 1
  );

  React.useEffect(() => {
    setValue(showTab);
  }, [showTab]);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const handleEdit = (pid: number) => {
    router.push(`/profile/projects/edit/${pid}`);
  };

  const renderProjectList = (project: Project) => {
    return (
      <ListItem
        key={project.id}
        secondaryAction={<ProjectDeleteDialog project={project} />}
        disablePadding
      >
        <ListItemButton onClick={() => handleEdit(project.id)} dense>
          <ListItemIcon>
            <CommentIcon />
          </ListItemIcon>
          <ListItemText id={project.id.toString()} primary={project.title} />
        </ListItemButton>
      </ListItem>
    );
  };

  if (!profile) {
    return null;
  }

  return (
    <Box
      sx={{
        width: "100%",
      }}
    >
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs value={value} onChange={handleChange} aria-label="profile tabs">
          <Tab
            label="SME Profile"
            {...a11yProps(0)}
            sx={{
              display: profile.userType?.includes("EXPERT") ? "block" : "none",
            }}
          />

          <Tab
            label="Your Projects"
            {...a11yProps(1)}
            sx={{
              display: profile.userType?.includes("PROJECT_OWNER")
                ? "block"
                : "none",
            }}
          />
        </Tabs>
      </Box>

      <TabPanel value={value} index={0}>
        <Box
          sx={{
            display: profile.userType?.includes("EXPERT") ? "block" : "none",
          }}
        >
          <Box sx={{ mb: 2 }}>
            <Typography component="p" variant="body1" paragraph>
              This is the profile information that will be publicly displayed in
              our searchable SME database.
            </Typography>

            <Typography component="h6" variant="h6">
              Your Skills
            </Typography>
            <Stack direction="row" spacing={2}>
              {profile.expertProfile?.skills.map((id: number) => {
                return <SkillChip key={id} skillId={id} />;
              })}
            </Stack>
          </Box>

          {profile.expertProfile?.internationalTravel && 
            <Chip sx={{mt:1}} icon={<CardTravelIcon />} label="Available for International Travel" variant="outlined" color="primary" />
          }

          {profile.expertProfile?.orcidId && (
            <>
              <Typography component="h6" variant="h6">
                ORCID ID
              </Typography>
              <Typography component="p" variant="body1" paragraph>
                <Link href={profile.expertProfile?.orcidId} target="_blank">
                  {profile.expertProfile?.orcidId}
                  <OpenInNewIcon />
                </Link>
              </Typography>
            </>
          )}

          <Typography component="h6" variant="h6">
            Availability
          </Typography>
          <Typography component="p" variant="body1" paragraph>
            {profile.expertProfile?.availabilityDisplay?.join(", ")}
          </Typography>

          <Typography component="h6" variant="h6">
            Experience
          </Typography>
          <Typography component="p" variant="body1" paragraph>
            {profile.expertProfile?.experience}
          </Typography>

          <Divider variant="middle" sx={{ my: 2 }} />

          <Button
            variant="contained"
            color="error"
            size="small"
            startIcon={<DeleteIcon />}
            component={NextLinkComposed}
            to={{
              pathname: "/profile/delete_profile",
            }}
          >
            Delete SME Profile
          </Button>
        </Box>
      </TabPanel>

      <TabPanel value={value} index={1}>
        <Typography component="p" variant="body1" paragraph>
          This is where you can create and manage Projects that you&rsquo;re
          looking to get assistance with from a SME on the site.
        </Typography>
        <Button
          variant="contained"
          size="small"
          startIcon={<AddIcon />}
          component={NextLinkComposed}
          to={{
            pathname: "/profile/projects/add",
          }}
        >
          Add Project
        </Button>

        <List>
          {profile.projectsOwned?.map((project) => {
            return renderProjectList(project);
          })}
        </List>
      </TabPanel>
    </Box>
  );
}
