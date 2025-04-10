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
import Tooltip from "@mui/material/Tooltip";
import TextTruncate from "react-text-truncate";
// local imports
import Link, { NextLinkComposed } from "./Link";
import SkillChip from "./SkillChip";
import { User } from "../containers/authContainer";
import useFavorite from "../hooks/useFavorite";
import ContactDialog from "./ContactDialog";
import UnauthContactDialog from "./UnauthContactDialog";
import PublicIcon from '@mui/icons-material/Public';
import Chip from '@mui/material/Chip';

type CardProps = {
  expert: User;
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

export default function ExpertCard({ expert }: CardProps) {
  const isAuthenticated = useIsAuthenticated();
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
    <Card sx={{ height: 380 }}>
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

      <CardContent sx={{ pt: 0 }}>
        <SkillChipsList>
          {expert.expertProfile?.skills?.map((id: number) => {
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
            text={expert.expertProfile?.experience}
            //textTruncateChild={<a href="#">Read on</a>}
          />
        </Typography>

        {expert.expertProfile?.internationalTravel && 
          <Chip sx={{mt:1}} icon={<PublicIcon />} label="Available for International Travel" variant="outlined" color="primary" />
        } 
          
          
        
      </CardContent>
      <CardActions disableSpacing>
        {isAuthenticated ? (
          <>
            <Tooltip title="Add to Favorites">
              <IconButton
                aria-label="add to favorites"
                color={starColor}
                onClick={toggleFavorite}
              >
                <StarsIcon />
              </IconButton>
            </Tooltip>
            <ContactDialog expert={expert} buttonType="icon" />
          </>
        ) : (
          <UnauthContactDialog item={expert} />
        )}
      </CardActions>
    </Card>
  );
}
