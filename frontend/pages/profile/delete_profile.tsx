import * as React from "react";
import { useState } from "react";
import { useRouter } from "next/router";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import DeleteIcon from "@mui/icons-material/Delete";
// local import
import useProfile from "../../src/hooks/useProfile";
import InnerNav from "../../src/components/InnerNav";
import Stack from "@mui/material/Stack";
import { NextLinkComposed } from "../../src/components/Link";

export default function DeleteProfile() {
  const router = useRouter();
  const { profile, deleteExpertProfile } = useProfile();
  const [errorMessage, setErrorMessage] = useState<string>("");

  const handleDelete = async (): Promise<void> => {
    // send form data to API
    try {
      const resp = await deleteExpertProfile("delete");
      if (!resp.ok) {
        setErrorMessage("API connection error. Please try again later.");
      } else {
        setErrorMessage("");
        // redirect to user profile
        router.push("/profile/me");
      }
    } catch (error: any) {
      console.error(error);
      // TODO: actually parse api 400 error messages
      setErrorMessage(error.message);
    }
  };

  // guard to make sure profile data is available
  if (!profile) {
    return null;
  }

  return (
    <>
      <InnerNav />
      <Box
        sx={{
          marginTop: 1,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography component="h1" variant="h5">
          Confirm Delete SME Profile
        </Typography>

        <Box sx={{ mt: 3, width: 600 }}>
          <Typography component="h5" paragraph>
            Are you sure you want to delete your SME Profile? This action will
            remove you from the Skills Matcher SME database.
          </Typography>

          <Stack
            sx={{ mt: 1 }}
            direction="row"
            spacing={2}
            justifyContent="center"
          >
            <Button
              variant="contained"
              color="error"
              startIcon={<DeleteIcon />}
              onClick={handleDelete}
            >
              Confirm SME Profile Delete
            </Button>

            <Button
              variant="outlined"
              component={NextLinkComposed}
              to={{
                pathname: "/profile/me",
              }}
            >
              Cancel
            </Button>
          </Stack>
          <Box sx={{ color: "error.main" }}>{errorMessage}</Box>
        </Box>
      </Box>
    </>
  );
}
