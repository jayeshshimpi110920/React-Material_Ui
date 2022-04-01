import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import * as React from "react";
import Typography from "@mui/material/Typography";

export default function SimpleBottomNavigation() {
  const [value, setValue] = React.useState(0);

  return (
    <div className="myybox" styles={{ padding: "50px" }}>
      <Box sx={{ width: 900 }}>
        <BottomNavigation
          showLabels
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        >
          <Typography
            variant="h5"
            gutterBottom
            component="div"
            sx={{ textAlign: "center", marginLeft: "300px" }}
          >
            Footer
            <Typography variant="caption" display="block" gutterBottom>
              Something here give a footer a purpose
              <br />
              Copyright @ yourwebsite 2022
            </Typography>
          </Typography>
          <br />
        </BottomNavigation>
      </Box>
    </div>
  );
}
