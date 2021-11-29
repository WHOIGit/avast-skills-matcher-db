import * as React from "react";
import { useState, useEffect } from "react";
import { useForm, Controller } from "react-hook-form";
import { styled } from "@mui/material/styles";
import Router from "next/router";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import PhotoCamera from "@mui/icons-material/PhotoCamera";
import Typography from "@mui/material/Typography";
import useProfile from "../../src/hooks/useProfile";

type FormData = {
  firstName: string;
  lastName: string;
  email: string;
};

const Input = styled("input")({
  display: "none",
});

export default function EditForm() {
  const { profile, editProfile, uploadAvatar } = useProfile();
  const [avatarImage, setAvatarImage] = useState<string>("");
  const {
    handleSubmit,
    control,
    formState: { errors },
    reset,
  } = useForm<FormData>();
  const [errorMessage, setErrorMessage] = useState<string>("");

  useEffect(() => {
    // set the initial values for the form
    profile?.avatar && setAvatarImage(profile?.avatar);

    // set for fields controlled by react-hook-form
    reset({
      firstName: profile?.firstName,
      lastName: profile?.lastName,
      email: profile?.email,
    });
  }, [reset, profile]);

  const handleCapture = (event: any) => {
    console.log("clicked");

    console.log(event.target.files);
    const newImg = event.target.files[0];
    setAvatarImage(newImg);
    uploadAvatar(newImg);
  };

  const onSubmit = async (data: FormData): Promise<void> => {
    console.log(data);
    // send form data to API
    try {
      const resp = await editProfile(data.firstName, data.lastName, data.email);
      if (!resp.ok) {
        setErrorMessage("API connection error. Please try again later.");
      }
    } catch (error: any) {
      console.error(error);
      // TODO: actually parse api 400 error messages
      setErrorMessage(error.message);
    }
  };

  console.log(avatarImage);

  return (
    <Box
      sx={{
        marginTop: 8,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Typography component="h1" variant="h5">
        Edit Profile
      </Typography>
      <Stack direction="row" alignItems="center" spacing={2}>
        <Avatar
          sx={{ m: 1, bgcolor: "secondary.main", width: 56, height: 56 }}
          alt={profile?.firstName}
          src={avatarImage}
        />

        <label htmlFor="avatar-image">
          <Input
            accept="image/*"
            id="avatar-image"
            name="avatar-image"
            type="file"
            onChange={handleCapture}
          />
          <Button
            variant="contained"
            component="span"
            startIcon={<PhotoCamera />}
          >
            Change Profile Image
          </Button>
        </label>
      </Stack>

      <Box
        component="form"
        noValidate
        onSubmit={handleSubmit(onSubmit)}
        sx={{ mt: 3 }}
      >
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <Controller
              name="firstName"
              defaultValue={profile?.firstName}
              control={control}
              rules={{ required: true }}
              render={({ field: { onChange, value } }) => (
                <TextField
                  fullWidth
                  onChange={onChange}
                  value={value}
                  label={"First Name"}
                />
              )}
            />
            <Box sx={{ color: "error.main" }}>
              {errors.firstName && "First name is required"}
            </Box>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Controller
              name="lastName"
              defaultValue={profile?.lastName}
              control={control}
              rules={{ required: true }}
              render={({ field: { onChange, value } }) => (
                <TextField
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  onChange={onChange}
                  value={value}
                />
              )}
            />
            <Box sx={{ color: "error.main" }}>
              {errors.lastName && "Last name is required"}
            </Box>
          </Grid>
          <Grid item xs={12}>
            <Controller
              name="email"
              defaultValue={profile?.email}
              control={control}
              rules={{
                required: true,
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Invalid email address",
                },
              }}
              render={({ field: { onChange, value } }) => (
                <TextField
                  fullWidth
                  id="email"
                  label="Email Address"
                  onChange={onChange}
                  value={value}
                />
              )}
            />
            <Box sx={{ color: "error.main" }}>{errors.email?.message}</Box>
          </Grid>
        </Grid>
        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
        >
          Save Profile
        </Button>
        <Box sx={{ color: "error.main" }}>{errorMessage}</Box>
      </Box>
    </Box>
  );
}
