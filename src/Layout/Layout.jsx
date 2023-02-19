import { Grid, Paper } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { Outlet } from "react-router-dom";
import { LeftSideBar, Navbar, RightSidebar } from "../components";
import theme from "../theme";

const Root = () => {
  const sidebarStyles = {
    padding: theme.spacing(2),
    color: theme.palette.text.secondary,
    position: "sticky",
    top: theme.spacing(8),
    maxWidth: "400px",
    height: "100vh",
    overflowY: "scroll",
    "::-webkit-scrollbar  ": {
      display: "none",
    },
  };

  return (
    <Box sx={{ marginTop: theme.spacing(8) }}>
      <Grid container spacing={3}>
        <Navbar />
        <Grid item xs={3}>
          <Paper sx={sidebarStyles}>
            <LeftSideBar />
          </Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper
            sx={{
              padding: theme.spacing(2),
              color: theme.palette.text.secondary,
            }}
          >
            <Outlet />
          </Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper sx={sidebarStyles}>
            <RightSidebar />
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Root;
