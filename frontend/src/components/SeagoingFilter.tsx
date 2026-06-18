import * as React from "react";
import { Box, Checkbox, FormControlLabel, Button } from "@mui/material";
import FormLabel from "@mui/material/FormLabel";
import FormControl from "@mui/material/FormControl";
import FormGroup from "@mui/material/FormGroup";
import Switch from "@mui/material/Switch";
import Seagoing from "../containers/seagoingContainer";

const SeagoingFilter: React.FC = () => {
  const seagoingCtx = Seagoing.useContainer();

  return (
    <Box sx={{ px: 2 }}>

      <FormControl component="fieldset" variant="standard" sx={{ my: 2 }}>
        <FormLabel component="legend">Available for Seagoing Opportunities</FormLabel>
        <FormGroup>
          <FormControlLabel
            control={
              <Switch
                checked={seagoingCtx.availableForSeagoing}
                onChange={(event) =>
                  seagoingCtx.setAvailableForSeagoing(event.target.checked)
                }
                name="availableForSeagoing"
              />
            }
            label="Yes"
          />
        </FormGroup>
      </FormControl>
    </Box>
  );
};

export default SeagoingFilter;
