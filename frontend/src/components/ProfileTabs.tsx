import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Skills from "../containers/skillsContainer";
import Chip from "@mui/material/Chip";
import { User } from "../containers/authContainer";
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
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
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
  const skillsCtx = Skills.useContainer();
  const [value, setValue] = React.useState(0);
  console.log(skillsCtx);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const renderSelectedSkills = (id: number) => {
    console.log(id);
    const skill = skillsCtx.skills.find((skill) => skill.id == id);
    return <Chip key={id} label={skill.name} />;
  };

  if (!profile) {
    return null;
  }

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab label="Engineer Profile" {...a11yProps(0)} />
          {profile.projects && <Tab label="Your Projects" {...a11yProps(1)} />}
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <Box sx={{ mb: 2 }}>
          <Typography component="h6" variant="h6">
            Skills Selected
          </Typography>
          <Stack direction="row" spacing={2}>
            {profile.engineerProfile?.skills.map((id: number) => {
              return renderSelectedSkills(id);
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
        Item Two
      </TabPanel>
    </Box>
  );
}
