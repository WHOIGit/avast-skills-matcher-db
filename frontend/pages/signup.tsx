import * as React from "react";
import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { useRouter } from "next/router";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
// local import
import Auth from "../src/containers/authContainer";
import Link from "../src/components/Link";
import useProfile from "../src/hooks/useProfile";

type FormData = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
};

type ComponentProps = {
  userTypeId: string;
};

export const getServerSideProps = (context: any) => {
  console.log(context.query);
  //you can make DB queries using the data in context.query
  return {
    props: {
      userTypeId: context.query.userTypeId, //pass it to the page props
    },
  };
};

export default function SignUp(props: ComponentProps) {
  const router = useRouter();
  const authCtx = Auth.useContainer();
  const { createUser } = useProfile();
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<FormData>();
  const [errorMessage, setErrorMessage] = useState<string>("");

  const onSubmit = async (data: FormData): Promise<void> => {
    console.log(data);
    // send form data to API
    try {
      const resp = await createUser(
        data.firstName,
        data.lastName,
        data.email,
        data.password,
        props.userTypeId
      );
      // now log the user in if creation successful
      if (!resp.ok) {
        setErrorMessage("API connection error. Please try again later.");
      } else {
        try {
          const user = await authCtx.login(data.email, data.password);
          if (user.status === 401) {
            setErrorMessage("Invalid login credentials");
          }
        } catch (error: any) {
          console.error(error);
          // TODO: actually parse api 400 error messages
          setErrorMessage(error.message);
        }
      }
    } catch (error: any) {
      console.error(error);
      // TODO: actually parse api 400 error messages
      setErrorMessage(error.message);
    }
  };

  if (!authCtx.loading && authCtx.isAuthenticated) router.push("/profile/me");

  return (
    <Box
      sx={{
        marginTop: 8,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
        <LockOutlinedIcon />
      </Avatar>
      <Typography component="h1" variant="h5">
        Sign up
      </Typography>
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
          <Grid item xs={12}>
            <Controller
              name="password"
              control={control}
              rules={{ required: true, minLength: 8 }}
              render={({ field: { onChange, value } }) => (
                <TextField
                  fullWidth
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                  onChange={onChange}
                  value={value}
                />
              )}
            />
            <Box sx={{ color: "error.main" }}>
              {errors.password?.type === "required" && "Password is required"}
              {errors.password?.type === "minLength" &&
                "Password must be at least 8 characters"}
            </Box>
          </Grid>
        </Grid>
        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
        >
          Sign Up
        </Button>
        <Box sx={{ color: "error.main" }}>{errorMessage}</Box>
        <Grid container justifyContent="flex-end">
          <Grid item>
            <Link href="/login" variant="body2">
              Already have an account? Sign in
            </Link>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}
