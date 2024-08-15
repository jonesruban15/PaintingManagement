import React from 'react';
import { Container, TextField, Button, Typography } from '@mui/material';

const ForgotPasswordPage = () => {
  return (
    <Container>
      <Typography variant="h4">Forgot Password</Typography>
      <TextField label="Email" fullWidth margin="normal" />
      <Button variant="contained" color="primary">Reset Password</Button>
    </Container>
  );
};

export default ForgotPasswordPage;
