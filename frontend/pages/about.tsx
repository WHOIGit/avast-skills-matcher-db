import * as React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import DoubleArrowIcon from "@mui/icons-material/DoubleArrow";
import { List, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import Button from "@mui/material/Button";
import Link from "../src/components/Link";
import Copyright from "../src/components/Copyright";
import InnerNav from "../src/components/InnerNav";

export default function About() {
  return (
    <>
      <InnerNav />
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          About the WHOI Skills Matcher Database
        </Typography>

        <Typography component="p" gutterBottom>
          The Skills Matcher DB is a web application that allows WHOI&rsquo;s
          community to connect with each other to share technical
          expertise. You can use the Skills Matcher in multiple ways:
          <List>
            <ListItem>
              <ListItemIcon>
                <DoubleArrowIcon />
              </ListItemIcon>
              <ListItemText primary="To tell the WHOI community about your skill set and expertise" />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <DoubleArrowIcon />
              </ListItemIcon>
              <ListItemText primary="To find an expert in the WHOI community who has a specific skill set or expertise" />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <DoubleArrowIcon />
              </ListItemIcon>
              <ListItemText primary="To advertise a project or problem in search of a specific skill set or expertise" />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <DoubleArrowIcon />
              </ListItemIcon>
              <ListItemText primary="To learn about projects or problems seeking help from the WHOI community" />
            </ListItem>
          </List>
        </Typography>

        <Typography variant="h5" component="h2" gutterBottom>
          How to Use It
        </Typography>

        <Typography component="p" gutterBottom>
          <strong>
            Share your expertise and skills with the WHOI community
          </strong>
        </Typography>

        <Typography component="p" gutterBottom sx={{ mb: 2 }}>
          Using the Skills Matcher DB requires an{" "}
          <Link href="/profile/me">SME Profile</Link> (Subject Matter Expert).
          Login to the application using your WHOI credentials and create a{" "}
          <Link href="/profile/me">SME Profile</Link> with whatever information
          you feel is valuable for the WHOI community to know. Once
          you&rsquo;ve saved your profile this information will be displayed in
          our <Link href="/">SME database</Link>. If another user wants to
          connect with you through the DB, you&rsquo;ll receive an email from
          WHOI with the option to start a discussion. Set your availability
          preference in your profile to indicate what level of interaction you
          currently have bandwidth for. If appropriate, include your
          supervisor&rsquo;s email for cc&rsquo;s on these messages.
        </Typography>

        <Typography component="p" gutterBottom>
          <strong>
            Find an SME (Subject Matter Expert) for advice or help
          </strong>
        </Typography>

        <Typography component="p" gutterBottom sx={{ mb: 2 }}>
          Login to the application and create a{" "}
          <Link href="/profile/me">Project</Link> that describes the knowledge
          or skills you need help with. Then, search the SME database for
          individuals with matching skills or expertise. You can save multiple
          SMEs as Favorites as you browse through the DB. Once you find a SME
          that you&lsquo;d like to connect with, just click on the Send Message
          button, add an optional personal message, and the DB will contact them
          on your behalf. Once they respond to your request, the DB emails you
          their response and you can follow up from there!
        </Typography>

        <Typography component="p" gutterBottom>
          <strong>Post the details of a Project you need help with</strong>
        </Typography>

        <Typography component="p" gutterBottom sx={{ mb: 2 }}>
          Login to the application with your account and create a{" "}
          <Link href="/profile/me">Project</Link>. Once your Project is saved it
          will be listed in our <Link href="/projects">Project database</Link>.
          If another user sees a Project they want to help with, they can
          connect with you through the DB. This sends you an email with their
          Profile information and the option to start a discussion. If you
          accept, the DB will let the SME know and you can start working
          together.
        </Typography>

        <Typography component="p" gutterBottom>
          <strong>
            See what Projects are in need of specific skills or expertise
          </strong>
        </Typography>

        <Typography component="p" gutterBottom sx={{ mb: 2 }}>
          Log into the application and then search the{" "}
          <Link href="/projects">Project database</Link> for available Projects
          that you might contribute to. Once you find a Project that interests
          you, just click on the Send Message button and the DB will send an
          email to the Project Owner with your profile details. If they want to
          follow up with you, the DB will let you know and you can start working
          together.
        </Typography>

        <Typography component="p" gutterBottom sx={{ mb: 2 }}>
          The Skills Matcher DB was created by AVAST and the Information Services S&E team.
        </Typography>

        <Copyright />
      </Box>
    </>
  );
}
