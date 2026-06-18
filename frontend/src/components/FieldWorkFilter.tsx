import * as React from "react";
import { Box, Checkbox, FormControlLabel, Button } from "@mui/material";
import FormLabel from "@mui/material/FormLabel";
import FormControl from "@mui/material/FormControl";
import FormGroup from "@mui/material/FormGroup";
import Switch from "@mui/material/Switch";
import FieldWork from "../containers/fieldWorkContainer";

const FieldWorkFilter: React.FC = () => {
  const fieldWorkCtx = FieldWork.useContainer();
  console.log(fieldWorkCtx);
  

  return (
    <Box sx={{ px: 2 }}>

      <FormControl component="fieldset" variant="standard" sx={{ my: 2 }}>
        <FormLabel component="legend">Looking for Field Work</FormLabel>
        <FormGroup>
          <FormControlLabel
            control={
              <Switch
                checked={fieldWorkCtx.lookingForFieldWork}
                onChange={(event) =>
                  fieldWorkCtx.setLookingForFieldWork(event.target.checked)
                }
                name="lookingForFieldWork"
              />
            }
            label="Yes"
          />
        </FormGroup>
      </FormControl>
    </Box>
  );
};

export default FieldWorkFilter;
