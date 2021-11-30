import * as React from "react";
import { useEffect } from "react";
import { useRouter } from "next/router";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import EditIcon from "@mui/icons-material/Edit";
import { NextLinkComposed } from "../../src/components/Link";
import Auth from "../../src/containers/authContainer";

const Me = (): React.ReactElement => {
  const router = useRouter();
  const authCtx = Auth.useContainer();
  console.log(authCtx.user, authCtx.loading, authCtx.getToken());

  if (authCtx.loading) {
    return (
      <Box>
        <p>Loading...</p>
      </Box>
    );
  } else {
    return (
      <Box>
        <h1 className="text-xl pt-3 pb-5">Welcome {authCtx.user?.username}!</h1>
        <Button
          variant="contained"
          startIcon={<EditIcon />}
          component={NextLinkComposed}
          to={{
            pathname: "/profile/edit",
          }}
        >
          Edit Profile
        </Button>
        <span>Profile details:</span>
        <ul className="mt-4">
          <li>ID: {authCtx.user?.id}</li>
          <li>Email: {authCtx.user?.email}</li>
          <li>Username: {authCtx.user?.username}</li>
        </ul>
      </Box>
    );
  }
};

export default Me;
