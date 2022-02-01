import * as React from "react";
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

import Link, { NextLinkComposed } from "./Link";
import SkillChip from "./SkillChip";
import Stack from "@mui/material/Stack";
import Auth, { User } from "../containers/authContainer";
import useFavorite from "../hooks/useFavorite";
import DirectContactDialog from "./DirectContactDialog";
import UnauthContactDialog from "./UnauthContactDialog";

type CardProps = {
  expert: User;
};

export default function ExpertCard({ expert }: CardProps) {
  const authCtx = Auth.useContainer();
  const { isFavorite, toggleFavorite } = useFavorite(expert);
  const [starColor, setStarColor] =
    React.useState<IconButtonProps["color"]>("default");

  React.useEffect(() => {
    if (isFavorite) {
      setStarColor("secondary");
    } else {
      setStarColor("default");
    }
  }, [isFavorite]);

  return (
    <Card sx={{ maxWidth: 420, height: 350 }}>
      <CardHeader
        avatar={
          <Avatar
            sx={{ bgcolor: "secondary.main" }}
            aria-label="expert"
            component={NextLinkComposed}
            to={{
              pathname: `/experts/${expert.id}`,
            }}
            alt={expert.firstName}
            src={expert.avatar}
          />
        }
        action={
          <IconButton
            component={NextLinkComposed}
            to={{
              pathname: `/experts/${expert.id}`,
            }}
          >
            <ReadMoreIcon />
          </IconButton>
        }
        title={
          <Link href={`/experts/${expert.id}`} underline="hover">
            {`${expert.firstName} ${expert.lastName}`}
          </Link>
        }
        subheader={expert.title}
      />

      <CardContent>
        <Stack direction="row" spacing={1} sx={{ flexWrap: "wrap", mb: 2 }}>
          {expert.expertProfile?.skills?.map((id: number) => {
            return <SkillChip key={id} skillId={id} size="small" />;
          })}
        </Stack>
        <Typography variant="body2" color="text.secondary">
          <TextTruncate
            line={7}
            element="span"
            truncateText="..."
            text={expert.expertProfile?.experience}
            //textTruncateChild={<a href="#">Read on</a>}
          />
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        {authCtx.isAuthenticated ? (
          <>
            <IconButton
              aria-label="add to favorites"
              color={starColor}
              onClick={toggleFavorite}
            >
              <StarsIcon />
            </IconButton>
            <DirectContactDialog expert={expert} />
          </>
        ) : (
          <UnauthContactDialog expert={expert} />
        )}
      </CardActions>
    </Card>
  );
}
