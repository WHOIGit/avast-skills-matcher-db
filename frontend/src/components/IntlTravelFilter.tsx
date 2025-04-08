import * as React from "react";
import { Box, Checkbox, FormControlLabel, Button } from "@mui/material";
import FormLabel from "@mui/material/FormLabel";
import FormControl from "@mui/material/FormControl";
import FormGroup from "@mui/material/FormGroup";
import Switch from "@mui/material/Switch";
import IntlTravel from "../containers/intlTravelContainer";

const IntlTravelFilter: React.FC = () => {
  const intlTravelCtx = IntlTravel.useContainer();
  console.log(intlTravelCtx);
  

  return (
    <Box sx={{ px: 2 }}>

      <FormControl component="fieldset" variant="standard" sx={{ my: 2 }}>
        <FormLabel component="legend">International Travel</FormLabel>
        <FormGroup>
          <FormControlLabel
            control={
              <Switch
                checked={intlTravelCtx.internationalTravel}
                onChange={(event) =>
                  intlTravelCtx.setInternationalTravel(event.target.checked)
                }
                name="internationalTravel"
              />
            }
            label="Available"
          />
        </FormGroup>
      </FormControl>
    </Box>
  );
};

export default IntlTravelFilter;
