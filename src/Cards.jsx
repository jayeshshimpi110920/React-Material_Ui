import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

import Typography from "@mui/material/Typography";
import mainLogo from "./SmallPlant.jfif";

export default function MediaControlCard() {
  return (
    <div style={{ display: "flex", justifyContent: "space-around" }}>
      <>
        <Card sx={{ display: "flex", width: "400px", textAlign: "left" }}>
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <CardContent sx={{ flex: "1 0 auto" }}>
              <Typography component="div" variant="h5">
                Featured Post
              </Typography>
              <Typography
                variant="subtitle1"
                color="text.secondary"
                component="div"
              >
                Nov 12,
                <br /> This is wider card with supporting text below as natuaral
                read-in to an addition content
              </Typography>
            </CardContent>
            <Box
              sx={{ display: "flex", alignItems: "center", pl: 1, pb: 1 }}
            ></Box>
          </Box>

          <img style={{ width: "100px" }} src={mainLogo} alt="fireSpot" />
        </Card>
      </>
      <>
        <Card sx={{ display: "flex", width: "400px", textAlign: "left" }}>
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <CardContent sx={{ flex: "1 0 auto" }}>
              <Typography component="div" variant="h5">
                Featured Post
              </Typography>
              <Typography
                variant="subtitle1"
                color="text.secondary"
                component="div"
              >
                Nov 12,
                <br /> This is wider card with supporting text below as natuaral
                read-in to an addition content
              </Typography>
            </CardContent>
            <Box
              sx={{ display: "flex", alignItems: "center", pl: 1, pb: 1 }}
            ></Box>
          </Box>
          <img style={{ width: "100px" }} src={mainLogo} alt="fireSpot" />
        </Card>
      </>
    </div>
  );
}
