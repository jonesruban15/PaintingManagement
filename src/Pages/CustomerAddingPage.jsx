import React from 'react';
import { Container, TextField, Button, Typography } from '@mui/material';

const CustomerAddingPage = () => {
  return (
    <Container>
      <Typography variant="h4">Add Customer</Typography>
      <TextField label="Name" fullWidth margin="normal" />
      <TextField label="Contact" fullWidth margin="normal" />
      <Button variant="contained" color="primary">Add Customer</Button>
    </Container>
  );
};

export default CustomerAddingPage;
