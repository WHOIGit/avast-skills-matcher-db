import * as React from "react";
import { useState, useEffect } from "react";
import { useForm, Controller } from "react-hook-form";
import { useRouter } from "next/router";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import FormGroup from "@mui/material/FormGroup";
import useProfile from "../../src/hooks/useProfile";
import Skills, { Skill } from "../../src/containers/skillsContainer";
import InnerNav from "../../src/components/InnerNav";

type FormData = {
  experience: string;
  skills: [];
};

export default function EditProfileForm() {
  const router = useRouter();
  const skillsCtx = Skills.useContainer();
  const { profile, editEngineerProfile } = useProfile();
  const {
    handleSubmit,
    control,
    formState: { errors },
    reset,
  } = useForm();
  const [errorMessage, setErrorMessage] = useState<string>("");

  useEffect(() => {
    // set the initial values for the form
    // set for fields controlled by react-hook-form
    reset({
      experience: profile?.engineerProfile?.experience,
      skills: profile?.engineerProfile?.skills,
    });
  }, [reset, profile]);

  const onSubmit = async (data: any): Promise<void> => {
    console.log(data);
    // send form data to API
    try {
      const resp = await editEngineerProfile(data.experience, data.skills);
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

  const renderSkillsList = (skill: Skill, field: any) => {
    let hasChildren = false;
    if (skill.children.length) {
      hasChildren = true;
    }
    console.log(field);

    if (!field.value) {
      return null;
    }

    return (
      <>
        <FormControlLabel
          key={skill.id}
          label={skill.name}
          control={
            <Checkbox
              value={skill.id}
              checked={field.value.includes(skill.id)}
              onChange={(event, checked) => {
                if (checked) {
                  field.onChange([
                    ...field.value,
                    parseInt(event.target.value),
                  ]);
                } else {
                  field.onChange(
                    field.value.filter(
                      (value: number) => value !== parseInt(event.target.value)
                    )
                  );
                }
              }}
            />
          }
        />
        <Box sx={{ display: "flex", flexDirection: "column", ml: 3 }}>
          {hasChildren &&
            skill.children.map((child) => renderSkillsList(child, field))}
        </Box>
      </>
    );
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
          Edit SME Profile
        </Typography>

        <Avatar
          sx={{ m: 1, bgcolor: "secondary.main", width: 112, height: 112 }}
          alt={profile?.firstName}
          src={profile?.avatar}
        />

        <Typography component="h1" variant="h4">
          {profile?.firstName} {profile?.lastName}
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
                name="experience"
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
                    label={"Describe your skills and experience"}
                    variant="outlined"
                  />
                )}
              />
              <Box sx={{ color: "error.main" }}>
                {errors.experience && "Field is required"}
              </Box>
            </Grid>
            <Grid item xs={12}>
              <FormControl component="fieldset" variant="standard">
                <FormLabel component="legend">Skills</FormLabel>
                <FormGroup>
                  <Controller
                    name="skills"
                    defaultValue={[]}
                    control={control}
                    //rules={{ required: true }}
                    render={({ field }) => (
                      <>
                        {skillsCtx.skills &&
                          skillsCtx.skills.map((skill: Skill) =>
                            renderSkillsList(skill, field)
                          )}
                      </>
                    )}
                  />
                </FormGroup>
              </FormControl>
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
