import * as React from "react";
import { useEffect } from "react";
import { useRouter } from "next/router";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Skills from "../containers/skillsContainer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import IconButton from "@mui/material/IconButton";
import CommentIcon from "@mui/icons-material/Comment";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";
import { NextLinkComposed } from "./Link";
import { User } from "../containers/authContainer";
import SkillChip from "./SkillChip";

type TabPanelProps = {
  children?: React.ReactNode;
  index: number;
  value: number;
};

type ComponentProps = {
  profile: User;
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

export default function ProfileTabs({ profile }: ComponentProps) {
  const router = useRouter();
  const skillsCtx = Skills.useContainer();
  //const [value, setValue] = React.useState(0);
  const [value, setValue] = React.useState(
    profile.userType?.includes("PROJECT_OWNER") ? 1 : 0
  );
  console.log(profile);

  console.log(value);
  useEffect(() => {
    setValue(profile.userType?.includes("PROJECT_OWNER") ? 1 : 0);
  }, [profile]);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const handleEdit = (pid: number) => {
    router.push(`/profile/projects/edit/${pid}`);
  };

  const renderProjectList = (project) => {
    return (
      <ListItem
        key={project.id}
        secondaryAction={
          <IconButton edge="end" aria-label="delete">
            <DeleteIcon />
          </IconButton>
        }
        disablePadding
      >
        <ListItemButton onClick={() => handleEdit(project.id)} dense>
          <ListItemIcon>
            <CommentIcon />
          </ListItemIcon>
          <ListItemText id={project.id} primary={project.title} />
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
            label="Engineer Profile"
            {...a11yProps(0)}
            sx={{
              display: profile.userType?.includes("ENGINEER")
                ? "block"
                : "none",
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
        <Box sx={{ mb: 2 }}>
          <Typography component="h6" variant="h6">
            Your Skills
          </Typography>
          <Stack direction="row" spacing={2}>
            {profile.engineerProfile?.skills.map((id: number) => {
              return <SkillChip key={id} skillId={id} />;
            })}
          </Stack>
        </Box>
        <Typography component="h6" variant="h6">
          Experience
        </Typography>
        <Typography component="p" variant="body1" paragraph>
          {profile.engineerProfile?.experience}
        </Typography>
      </TabPanel>

      <TabPanel value={value} index={1}>
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
