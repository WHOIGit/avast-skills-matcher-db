import * as React from "react";
import { MsalAuthenticationTemplate } from "@azure/msal-react";
import { InteractionType } from "@azure/msal-browser";
import { useRouter } from "next/router";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
// local imports

const ErrorComponent = ({ error }: any) => {
  return <p>An Error Occurred: {error}</p>;
};

const LoadingComponent = () => {
  return <p>Authentication in progress...</p>;
};

const EngagementResponse = (): React.ReactElement => {
  const router = useRouter();
  const { response, pid } = router.query;

  return (
    <MsalAuthenticationTemplate
      interactionType={InteractionType.Popup}
      errorComponent={ErrorComponent}
      loadingComponent={LoadingComponent}
    >
      <Box
        sx={{
          marginTop: 1,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Box sx={{ textAlign: "center" }}>
          <Typography component="h1" variant="h4" gutterBottom>
            Thanks for your response!
          </Typography>

          <Typography component="p" variant="subtitle1">
            Your response has been recorded and sent to the Project Owner. If
            you agreed to provide assistance, they will reach out to you soon.
          </Typography>
        </Box>
      </Box>
    </MsalAuthenticationTemplate>
  );
};

export default EngagementResponse;
