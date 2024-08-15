import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Container, TextField, Button, Typography } from '@mui/material';
import TimePickerComponent from '../StyledComponents/TimePicker';

const StaffEntryPage = () => {
  return (
    <Container>
      <Typography variant="h4" gutterBottom>Staff Entry</Typography>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <TextField label="Staff ID" fullWidth />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField label="Staff Name" fullWidth />
          </Grid>
        </Grid>
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6}>
            <TextField
              id="outlined-multiline-static"
              label="Address"
              multiline
              fullWidth
              rows={4}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField label="Phone Number" fullWidth />
          </Grid>
        </Grid>
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6}>
            <TextField label="Daily Salary" fullWidth />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <TimePickerComponent label="Starting Time" />
              </Grid>
              <Grid item xs={6}>
                <TimePickerComponent label="Ending Time" />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>
      <Button variant="contained" color="primary" sx={{ mt: 2 }}>Add Staff</Button>
    </Container>
  );
};

export default StaffEntryPage;
