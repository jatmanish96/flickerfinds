import React, { useEffect, useState } from 'react';
import { Container, Grid, Typography, Button ,Box} from '@mui/material';
import { fetchOrders } from '../../services/OrderService'; // Your API call

const OrdersPage = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const loadOrders = async () => {
      const data = await fetchOrders();
      setOrders(data);
    };

    loadOrders();
  }, []);

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Orders
      </Typography>
      <Grid container spacing={2}>
        {orders.map((order) => (
          <Grid item key={order.id} xs={12} sm={6} md={4}>
            <Box>
              <Typography variant="h6">Order ID: {order.id}</Typography>
              <Typography variant="body2" color="text.secondary">
                Status: {order.status}
              </Typography>
              <Button variant="outlined" href={`/orders/${order.id}`}>
                View Order
              </Button>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default OrdersPage;
