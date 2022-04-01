import * as React from "react";
import {
  MsalAuthenticationTemplate,
  useIsAuthenticated,
} from "@azure/msal-react";
import { InteractionType } from "@azure/msal-browser";
import { useRouter } from "next/router";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import useEngagement from "../../src/hooks/useEngagement";
// local imports

const ErrorComponent = ({ error }: any) => {
  return <p>An Error Occurred: {error}</p>;
};

const LoadingComponent = () => {
  return <p>Authentication in progress...</p>;
};

const EngagementResponse = (): React.ReactElement => {
  const isAuthenticated = useIsAuthenticated();
  const router = useRouter();
  const { response, pid } = router.query;
  const { recordResponse } = useEngagement(pid, response);

  React.useEffect(() => {
    const fetchResponse = async () => {
      const data = await recordResponse();
      return data;
    };

    if (isAuthenticated) {
      const response = fetchResponse();
    }
  }, [isAuthenticated, recordResponse]);

  return (
    <MsalAuthenticationTemplate
      interactionType={InteractionType.Redirect}
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
            Your response has been recorded and sent to the SME or the Project
            Owner. If you approved their request, they will reach out directly
            to you soon.
          </Typography>
        </Box>
      </Box>
    </MsalAuthenticationTemplate>
  );
};

export default EngagementResponse;
