import React from 'react';
import { Container, TextField, Button, Typography } from '@mui/material';

const SalaryManagementPage = () => {
  return (
    <Container>
      <Typography variant="h4">Salary Management</Typography>
      <TextField label="Staff ID" fullWidth margin="normal" />
      <TextField label="Salary Amount" fullWidth margin="normal" />
      <Button variant="contained" color="primary">Update Salary</Button>
    </Container>
  );
};

export default SalaryManagementPage;
