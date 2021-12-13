import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton, { IconButtonProps } from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import ReadMoreIcon from "@mui/icons-material/ReadMore";
import StarsIcon from "@mui/icons-material/Stars";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import TextTruncate from "react-text-truncate";
import { User } from "../containers/authContainer";
import Link, { NextLinkComposed } from "./Link";
import SkillChip from "./SkillChip";
import Stack from "@mui/material/Stack";
import theme from "../theme";

interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

type CardProps = {
  engineer: User;
};

export default function EngineerCard({ engineer }: CardProps) {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card sx={{ maxWidth: 420, height: 350 }}>
      <CardHeader
        avatar={
          <Avatar
            sx={{ bgcolor: "secondary.main" }}
            aria-label="Engineer"
            component={NextLinkComposed}
            to={{
              pathname: `/engineers/${engineer.id}`,
            }}
            alt={engineer.firstName}
            src={engineer.avatar}
          />
        }
        action={
          <IconButton
            component={NextLinkComposed}
            to={{
              pathname: `/engineers/${engineer.id}`,
            }}
          >
            <ReadMoreIcon />
          </IconButton>
        }
        title={
          <Link href={`/engineers/${engineer.id}`} underline="hover">
            {`${engineer.firstName} ${engineer.lastName}`}
          </Link>
        }
        subheader={engineer.title}
      />

      <CardContent>
        <Stack direction="row" spacing={1} sx={{ flexWrap: "wrap", mb: 2 }}>
          {engineer.engineerProfile?.skills?.map((id: number) => {
            return <SkillChip key={id} skillId={id} size="small" />;
          })}
        </Stack>
        <Typography variant="body2" color="text.secondary">
          <TextTruncate
            line={7}
            element="span"
            truncateText="..."
            text={engineer.engineerProfile?.experience}
            //textTruncateChild={<a href="#">Read on</a>}
          />
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <StarsIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
}
