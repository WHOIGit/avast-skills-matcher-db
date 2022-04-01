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
    <Container maxWidth="md">
      <InnerNav />
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          About the AVAST Skills Matcher DB
        </Typography>

        <Typography component="p" gutterBottom>
          The AVAST Skills Matcher DB is a web application that allows WHOI
          community members to connect with each other based on their expertise
          and projects. You can use the Skills Matcher in multiple ways:
          <List>
            <ListItem>
              <ListItemIcon>
                <DoubleArrowIcon />
              </ListItemIcon>
              <ListItemText primary="Share your Skills with others" />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <DoubleArrowIcon />
              </ListItemIcon>
              <ListItemText primary="Find someone that has the Skills you need" />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <DoubleArrowIcon />
              </ListItemIcon>
              <ListItemText primary="Share your Project that needs assistance" />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <DoubleArrowIcon />
              </ListItemIcon>
              <ListItemText primary="Find a Project that you&rsquo;d like to work on" />
            </ListItem>
          </List>
        </Typography>

        <Typography variant="h5" component="h2" gutterBottom>
          How to Use It
        </Typography>

        <Typography component="p" gutterBottom>
          <strong>
            Do you want to share your skills with the WHOI community?
          </strong>
        </Typography>

        <Typography component="p" gutterBottom sx={{ mb: 2 }}>
          Login to the application and create a{" "}
          <Link href="/profile/me">SME Profile</Link> (Subject Matter Expert).
          Once you set up your profile, your information will be displayed in
          our <Link href="/">SME database</Link>. If another user wants to work
          with you, you&rsquo;ll receive an email from AVAST with the option to
          accept or decline the offer.
        </Typography>

        <Typography component="p" gutterBottom>
          <strong>
            Do you want to find a SME (Subject Matter Expert) to help you?
          </strong>
        </Typography>

        <Typography component="p" gutterBottom sx={{ mb: 2 }}>
          Login to the application, create a{" "}
          <Link href="/profile/me">Project</Link> if you have a specific project
          that you&rsquo;d like to request help with, then search the SME
          database for the skills you need. You can save multiple SMEs as
          Favorites as you browse the DB. Once you find a SME that you&rsquo;d
          like to connect with, just click on the Send Message button, add an
          optional personal message, and we&rsquo;ll contact them on your
          behalf. Once they respond to your request, we&rsquo;ll email you their
          response and then if they accept, you can get started!
        </Typography>

        <Typography component="p" gutterBottom>
          <strong>
            Do you want to list a Project you&rsquo;d like help with?
          </strong>
        </Typography>

        <Typography component="p" gutterBottom sx={{ mb: 2 }}>
          Login to the application, and create a{" "}
          <Link href="/profile/me">Project</Link> in your account. Once your
          Project is saved, it will be listed in our{" "}
          <Link href="/projects">Project database</Link>. If another user would
          like to assist your Project, we&rsquo;ll send you an email with their
          Profile information and the option to accept or decline their offer.
          If you accept, we&rsquo;ll let the SME know and you can start working
          together.
        </Typography>

        <Typography component="p" gutterBottom>
          <strong>Do you want to find a new Project to work on?</strong>
        </Typography>

        <Typography component="p" gutterBottom sx={{ mb: 2 }}>
          Login to the application and create a{" "}
          <Link href="/profile/me">SME Profile</Link> (Subject Matter Expert) to
          detail your skills and experience. Then search our{" "}
          <Link href="/projects">Project database</Link>
          for avaiable Projects that match your skills. Once you find a Project
          that interests you, just click on the Send Message button, and
          we&rsquo;ll send an email to the Project Owner with your profile
          details. If they accept your offer to help, we&rsquo;ll let you know
          and you can start working together.
        </Typography>

        <Copyright />
      </Box>
    </Container>
  );
}
