import * as React from "react";
import { useSWRConfig } from "swr";
import { useForm, Controller } from "react-hook-form";
import { useRouter } from "next/router";
import { styled } from "@mui/material/styles";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import PhotoCamera from "@mui/icons-material/PhotoCamera";
import Typography from "@mui/material/Typography";
import { FormHelperText } from "@mui/material/";
// local imports
import useProfile from "../../src/hooks/useProfile";
import InnerNav from "../../src/components/InnerNav";
import { API_BASE } from "../../src/utils/apiUtils";

const profileUrl = `${API_BASE}/api/users/me/`;

type FormData = {
  firstName: string;
  lastName: string;
  email: string;
  title: string;
};

const Input = styled("input")({
  display: "none",
});

export default function EditForm() {
  const router = useRouter();
  const { mutate } = useSWRConfig();
  const { profile, editProfile, uploadAvatar } = useProfile();
  const [avatarImage, setAvatarImage] = React.useState<string>("");
  const {
    handleSubmit,
    control,
    formState: { errors },
    reset,
  } = useForm<FormData>();
  const [errorMessage, setErrorMessage] = React.useState<string>("");

  React.useEffect(() => {
    console.log("useEffect fired");

    // set the initial values for the form
    profile?.avatar && setAvatarImage(profile.avatar);

    // set for fields controlled by react-hook-form

    reset({
      firstName: profile?.firstName,
      lastName: profile?.lastName,
      email: profile?.email,
      title: profile?.title,
    });
  }, [reset, profile]);

  const handleCapture = async (event: any) => {
    const newImg = event.target.files[0];
    console.log(newImg);

    // send form data to API
    try {
      const resp = await await uploadAvatar(newImg);
      if (!resp.ok) {
        setErrorMessage("API connection error. Please try again later.");
      } else {
        setErrorMessage("");
        /*
        mutate(
          profileUrl,
          {
            ...profile,
            avatar: `"https://skillsdb-api.whoi.edu/media/avatars/${newImg.name}"`,
          },
          false
        );
        //mutate(profileUrl);
        */
      }
    } catch (error: any) {
      console.error(error);
      // TODO: actually parse api 400 error messages
      setErrorMessage(error.message);
    }
  };

  const onSubmit = async (data: FormData): Promise<void> => {
    // send form data to API
    try {
      const resp = await editProfile(data.title);
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
          Edit Account
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
                defaultValue=""
                control={control}
                render={({ field: { onChange, value } }) => (
                  <TextField
                    disabled
                    fullWidth
                    onChange={onChange}
                    value={value}
                    label={"First Name"}
                    variant="outlined"
                  />
                )}
              />
              <FormHelperText>
                Name and email fields are not editable. Please contact WHOI IS
                if there is an issue.
              </FormHelperText>
              <Box sx={{ color: "error.main" }}>
                {errors.firstName && "First name is required"}
              </Box>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Controller
                name="lastName"
                defaultValue=""
                control={control}
                render={({ field: { onChange, value } }) => (
                  <TextField
                    disabled
                    fullWidth
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
                defaultValue=""
                control={control}
                render={({ field: { onChange, value } }) => (
                  <TextField
                    disabled
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
            <Grid item xs={12}>
              <Controller
                name="title"
                defaultValue=""
                control={control}
                render={({ field: { onChange, value } }) => (
                  <TextField
                    fullWidth
                    id="title"
                    label="Title"
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
    </>
  );
}
