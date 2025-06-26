import * as React from "react";
import { Box, Checkbox, FormControlLabel, Button } from "@mui/material";
import FormLabel from "@mui/material/FormLabel";
import FormControl from "@mui/material/FormControl";
import FormGroup from "@mui/material/FormGroup";
import Switch from "@mui/material/Switch";
import Urgent from "../containers/urgentContainer";

const UrgentFilter: React.FC = () => {
  const urgentCtx = Urgent.useContainer();
  console.log(urgentCtx);
  

  return (
    <Box sx={{ px: 2 }}>

      <FormControl component="fieldset" variant="standard" sx={{ my: 2 }}>
        <FormLabel component="legend">Urgently Seeking Project</FormLabel>
        <FormGroup>
          <FormControlLabel
            control={
              <Switch
                checked={urgentCtx.urgentProjectSeek}
                onChange={(event) =>
                  urgentCtx.setUrgentProjectSeek(event.target.checked)
                }
                name="urgentProjectSeek"
              />
            }
            label="Yes"
          />
        </FormGroup>
      </FormControl>
    </Box>
  );
};

export default UrgentFilter;
