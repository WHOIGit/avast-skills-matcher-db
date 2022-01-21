import * as React from "react";
import { useState, useEffect } from "react";
import { useForm, Controller } from "react-hook-form";
import { useRouter } from "next/router";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import useProjects from "../../../../src/hooks/useProjects";
import InnerNav from "../../../../src/components/InnerNav";

type FormData = {
  title: string;
  description: string;
};

export default function EditProject() {
  const router = useRouter();
  //const { pid } = router.query;
  const pid = parseInt(router.query.pid as string);
  const { project, editProject } = useProjects(pid);
  console.log(project);

  const {
    handleSubmit,
    control,
    formState: { errors },
    reset,
  } = useForm();
  const [errorMessage, setErrorMessage] = useState<string>("");

  useEffect(() => {
    // set for fields controlled by react-hook-form
    reset({
      title: project?.title,
      description: project?.description,
    });
  }, [reset, project]);

  const onSubmit = async (data: any): Promise<void> => {
    console.log(data);
    // send form data to API
    try {
      const resp = await editProject(pid, data.title, data.description);
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
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography component="h1" variant="h5">
          Edit Project
        </Typography>

        <Box
          component="form"
          noValidate
          onSubmit={handleSubmit(onSubmit)}
          sx={{ mt: 3, width: 600 }}
        >
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Controller
                name="title"
                defaultValue=""
                control={control}
                rules={{ required: true }}
                render={({ field: { onChange, value } }) => (
                  <TextField
                    fullWidth
                    label="Project Title"
                    onChange={onChange}
                    value={value}
                  />
                )}
              />
              <Box sx={{ color: "error.main" }}>
                {errors.title && "Title is required"}
              </Box>
            </Grid>
            <Grid item xs={12}>
              <Controller
                name="description"
                defaultValue=""
                control={control}
                rules={{ required: true }}
                render={({ field: { onChange, value } }) => (
                  <TextField
                    fullWidth
                    multiline
                    rows={8}
                    onChange={onChange}
                    value={value}
                    label={"Describe your project"}
                    variant="outlined"
                  />
                )}
              />
              <Box sx={{ color: "error.main" }}>
                {errors.description && "Field is required"}
              </Box>
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Save Project
          </Button>
          <Box sx={{ color: "error.main" }}>{errorMessage}</Box>
        </Box>
      </Box>
    </>
  );
}
