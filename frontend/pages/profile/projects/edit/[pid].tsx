import * as React from "react";
import dayjs from 'dayjs';
import { useState, useEffect } from "react";
import { useForm, Controller } from "react-hook-form";
import { useRouter } from "next/router";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import FormGroup from "@mui/material/FormGroup";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import useProjects from "../../../../src/hooks/useProjects";
import InnerNav from "../../../../src/components/InnerNav";
import SkillsCheckboxes from "../../../../src/components/SkillsCheckboxes";

export default function EditProject() {
  const router = useRouter();
  const pid = parseInt(router.query.pid as string);
  const { project, editProject } = useProjects(pid);

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
      skills: project?.skills,
      internationalTravel: project?.internationalTravel,
      replyByDate: project?.replyByDate ? dayjs(project?.replyByDate) : null, 
    });
  }, [reset, project]);

  const onSubmit = async (data: any): Promise<void> => {
    // send form data to API
    try {
      const resp = await editProject(pid, data);
      if (!resp.ok) {
        setErrorMessage("API connection error. Please try again later.");
      } else {
        setErrorMessage("");
        // redirect to user profile
        router.push("/profile/me?tabId=1");
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
            <Grid item size={12}>
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
            <Grid item size={12}>
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

            <Grid item size={12}>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
              <Controller
                name="replyByDate"
                defaultValue={null}
                control={control}
                rules={{ required: 'Reply by date is required' }} // React Hook Form validation rules
                render={({ field: { onChange, value, ...fieldProps } }) => (
                  <DatePicker
                    {...fieldProps}
                    label="Reply by Date"
                    value={value}
                    onChange={(newValue) => onChange(newValue)} // Explicitly pass the new value to React Hook Form
                    slotProps={{
                      textField: {
                        error: !!errors.replyByDate,
                        helperText: errors.replyByDate?.message,
                        fullWidth: true,
                      },
                    }}
                  />
                )}
              />
              </LocalizationProvider>
              <Box sx={{ color: "error.main" }}>
                {errors.replyByDate && "Field is required"}
              </Box>
            </Grid>

            <Grid item size={12}>
              <FormControl component="fieldset" variant="standard">
                <FormLabel component="legend">International Travel Required?</FormLabel>
                <FormGroup>
                  <Controller
                    name="internationalTravel"
                    defaultValue={false}
                    control={control}
                    //rules={{ required: true }}
                    render={({ field }) => (
                      <FormControlLabel
                        key="internationalTravel"
                        label="YES"
                        control={
                          <Checkbox
                            checked={field.value}
                            {...field}
                          />
                        }
                      />
                    )}
                  />
                </FormGroup>
              </FormControl>
            </Grid>

            <Grid item size={12}>
              <SkillsCheckboxes control={control} />
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
