import React from 'react';
import { Container, TextField, Button, Typography } from '@mui/material';

const LoginPage = () => {
  return (
    <Container>
      <Typography variant="h4">Login</Typography>
      <TextField label="Email" fullWidth margin="normal" />
      <TextField label="Password" type="password" fullWidth margin="normal" />
      <Button variant="contained" color="primary">Login</Button>
    </Container>
  );
};

export default LoginPage;
