import * as React from "react";
import { Box, Checkbox, FormControlLabel, Button } from "@mui/material";
import FormLabel from "@mui/material/FormLabel";
import FormControl from "@mui/material/FormControl";
import FormGroup from "@mui/material/FormGroup";
import Switch from "@mui/material/Switch";
import PartTimeWork from "../containers/partTimeWorkContainer";

const PartTimeWorkFilter: React.FC = () => {
  const partTimeWorkCtx = PartTimeWork.useContainer();

  return (
    <Box sx={{ px: 2 }}>

      <FormControl component="fieldset" variant="standard" sx={{ my: 2 }}>
        <FormLabel component="legend">Looking for Part-time or Short-term Work</FormLabel>
        <FormGroup>
          <FormControlLabel
            control={
              <Switch
                checked={partTimeWorkCtx.lookingForPartTimeWork}
                onChange={(event) =>
                  partTimeWorkCtx.setLookingForPartTimeWork(event.target.checked)
                }
                name="lookingForPartTimeWork"
              />
            }
            label="Yes"
          />
        </FormGroup>
      </FormControl>
    </Box>
  );
};

export default PartTimeWorkFilter;
