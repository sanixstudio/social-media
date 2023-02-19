import { CssBaseline, Paper, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const LeftSidebar = () => {
  return (
    <Box>
      <Box>
        <CssBaseline />
        <Paper square sx={{ p: "1em" }}>
          <Box
            sx={{
              display: "flex",
              gap: "1em",
              p: ".5em",
              mb: "1em",
              cursor: "pointer",
              alignItems: "center",
              "&:hover": {
                background: "rgba(100, 100, 100, .1)",
              },
            }}
          >
            <img
              src="https://picsum.photos/id/387/100/100"
              style={{ borderRadius: "50%" }}
              alt="user"
              width={32}
            />
            <Typography fontWeight={"bold"} color="#777">
              Hello
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              gap: "1em",
              p: ".5em",
              mb: "1em",
              cursor: "pointer",
              alignItems: "center",
              "&:hover": {
                background: "rgba(100, 100, 100, .1)",
              },
            }}
          >
            <img
              src="https://picsum.photos/id/387/100/100"
              style={{ borderRadius: "50%" }}
              alt="user"
              width={32}
            />
            <Typography fontWeight={"bold"} color="#777">
              Hello
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              gap: "1em",
              p: ".5em",
              mb: "1em",
              cursor: "pointer",
              alignItems: "center",
              "&:hover": {
                background: "rgba(100, 100, 100, .1)",
              },
            }}
          >
            <img
              src="https://picsum.photos/id/387/100/100"
              style={{ borderRadius: "50%" }}
              alt="user"
              width={32}
            />
            <Typography fontWeight={"bold"} color="#777">
              Hello
            </Typography>
          </Box>
        </Paper>
      </Box>
    </Box>
  );
};

export default LeftSidebar;
