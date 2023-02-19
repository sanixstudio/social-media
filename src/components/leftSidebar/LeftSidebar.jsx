import {
  Avatar,
  CssBaseline,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  ListSubheader,
  Paper,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const messages = [
  {
    id: 1,
    primary: "Brunch this week?",
  },
  {
    id: 2,
    primary: "Birthday Gift",
  },
  {
    id: 3,
    primary: "Recipe to try",
  },
  {
    id: 4,
    primary: "Yes!",
  },
  {
    id: 5,
    primary: "Doctor's Appointment",
  },
  {
    id: 6,
    primary: "Discussion",
    person: "/static/images/avatar/5.jpg",
  },
];

const LeftSidebar = () => {
  return (
    <Box>
      <Box>
        <CssBaseline />
        <Paper square sx={{ pb: "50px" }}>
          <Typography
            variant="h5"
            gutterBottom
            component="div"
            sx={{ p: 2, pb: 0 }}
          >
            Inbox
          </Typography>
          <List sx={{ mb: 2 }}>
            {messages.map(({ id, primary, person }) => (
              <React.Fragment key={id}>
                {id === 1 && (
                  <ListSubheader sx={{ bgcolor: "background.paper" }}>
                    Today
                  </ListSubheader>
                )}

                {id === 3 && (
                  <ListSubheader sx={{ bgcolor: "background.paper" }}>
                    Yesterday
                  </ListSubheader>
                )}

                <ListItem button>
                  <ListItemAvatar>
                    <Avatar alt="Profile Picture" src={person} />
                  </ListItemAvatar>
                  <ListItemText primary={primary} />
                </ListItem>
              </React.Fragment>
            ))}
          </List>
        </Paper>
      </Box>
    </Box>
  );
};

export default LeftSidebar;
