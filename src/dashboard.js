import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Box from "@mui/material/Box";
import Drawer from "@material-ui/core/Drawer";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import EventIcon from "@mui/icons-material/Event";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";

export default function Dashboard() {
  return (
    <Box m={2}>
      <Grid container spacing={2}>
        <Grid item xs={3}>
          <Button>
            <Paper>
              <Grid container>
                <Grid item xs={6}>
                  <Typography variant="caption" display="block" gutterBottom>
                    New Issues
                  </Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography variant="caption" display="block" gutterBottom>
                    New Reports
                  </Typography>
                </Grid>
              </Grid>
            </Paper>
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
}
