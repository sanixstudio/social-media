import { Grid, Paper } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { Outlet } from "react-router-dom";
import { LeftSideBar, Navbar, RightSidebar } from "../components";
import theme from "../theme";

const Root = () => {
  return (
    <Box sx={{ flexGrow: 1, marginTop: theme.spacing(8) }}>
      <Grid container spacing={3}>
        <Navbar />
        <Grid item xs={3}>
          <Paper
            sx={{
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
            }}
          >
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
          <Paper
            sx={{
              padding: theme.spacing(2),
              color: theme.palette.text.secondary,
              position: "sticky",
              top: theme.spacing(8),
              height: "100vh",
              overflowY: "scroll",
            }}
          >
            <RightSidebar />
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

// const Root = () => {
//   return (
//     <Box
//       display={"flex"}
//       justifyContent={"space-between"}
//       maxWidth={"1200px"}
//       margin={"4em auto"}
//       bgcolor={"teal"}
//     >
//       <Navbar />
//       <LeftSideBar />
//       {<Outlet />}
//       <RightSidebar />
//     </Box>
//   );
// };

export default Root;
