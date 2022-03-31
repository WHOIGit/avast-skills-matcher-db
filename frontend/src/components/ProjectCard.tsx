import * as React from "react";
import { useIsAuthenticated } from "@azure/msal-react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Avatar from "@mui/material/Avatar";
import IconButton, { IconButtonProps } from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import ReadMoreIcon from "@mui/icons-material/ReadMore";
import StarsIcon from "@mui/icons-material/Stars";
import TextTruncate from "react-text-truncate";
// local imports
import Link, { NextLinkComposed } from "./Link";
import SkillChip from "./SkillChip";
import { Project } from "../hooks/useProjects";
import ContactDialog from "./ContactDialog";
import UnauthContactDialog from "./UnauthContactDialog";
import ContactProjectDialog from "./ContactProjectDialog";

type CardProps = {
  project: Project;
};

const SkillChipsList = styled("ul")(({ theme }) => ({
  display: "flex",
  flexWrap: "wrap",
  listStyle: "none",
  padding: 0,
  margin: 0,
  "& > li": {
    padding: theme.spacing(0.5),
  },
}));

export default function ProjectCard({ project }: CardProps) {
  const isAuthenticated = useIsAuthenticated();

  return (
    <Card sx={{ height: 400 }}>
      <CardHeader
        action={
          <IconButton
            component={NextLinkComposed}
            to={{
              pathname: `/projects/${project.id}`,
            }}
          >
            <ReadMoreIcon />
          </IconButton>
        }
        title={
          <Link href={`/projects/${project.id}`} underline="hover">
            {project.title}
          </Link>
        }
        subheader={`{Project owner: ${project.projectOwnerDisplay}`}
      />

      <CardContent sx={{ pt: 0 }}>
        <SkillChipsList>
          {project.skills?.map((id: number) => {
            return (
              <li key={id}>
                <SkillChip key={id} skillId={id} size="small" />
              </li>
            );
          })}
        </SkillChipsList>

        <Typography variant="body2" color="text.secondary" sx={{ mt: 2 }}>
          <TextTruncate
            line={4}
            element="span"
            truncateText="..."
            text={project.description}
            //textTruncateChild={<a href="#">Read on</a>}
          />
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        {isAuthenticated ? (
          <ContactProjectDialog project={project} buttonType="icon" />
        ) : (
          <UnauthContactDialog item={project} />
        )}
      </CardActions>
    </Card>
  );
}
