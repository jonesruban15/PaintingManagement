import React from 'react';
import { Container, Typography } from '@mui/material';
import Cards from '../StyledComponents/Cards/Cards';

const DashboardPage = () => {
  return (
    <Container>
      <Typography variant="h4">Dashboard</Typography>
      <Cards />
      {/* Add dashboard content here */}
    </Container>
  );
};

export default DashboardPage;
