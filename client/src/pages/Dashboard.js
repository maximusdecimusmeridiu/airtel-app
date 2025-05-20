import React from 'react';
import { Container, Grid, Paper, Typography, Button } from '@mui/material';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const user = useSelector((state) => state.auth.user);
  const navigate = useNavigate();

  const handleRecharge = () => {
    // Implement recharge logic
    navigate('/recharge');
  };

  return (
    <Container maxWidth="md" sx={{ mt: 4 }}>
      <Paper elevation={3} sx={{ p: 3 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Welcome, {user?.name}
        </Typography>
        <Typography variant="h6" color="textSecondary" gutterBottom>
          Mobile Number: {user?.mobileNumber}
        </Typography>
        <Typography variant="h6" color="textSecondary" gutterBottom>
          Balance: ₹{user?.balance}
        </Typography>
        <Grid container spacing={3} sx={{ mt: 3 }}>
          <Grid item xs={12} sm={6}>
            <Paper elevation={2} sx={{ p: 2, textAlign: 'center' }}>
              <Button
                variant="contained"
                color="primary"
                fullWidth
                onClick={handleRecharge}
              >
                Recharge
              </Button>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Paper elevation={2} sx={{ p: 2, textAlign: 'center' }}>
              <Button
                variant="contained"
                color="primary"
                fullWidth
                onClick={() => navigate('/data-plans')}
              >
                Data Plans
              </Button>
            </Paper>
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
};

export default Dashboard;