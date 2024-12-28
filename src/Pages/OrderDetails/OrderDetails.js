import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Typography, Box, Grid, Button } from '@mui/material';
import { fetchOrderDetails } from '../../services/OrderService'; // Your API call

const OrderDetailsPage = () => {
  const { orderId } = useParams();
  const [order, setOrder] = useState(null);

  useEffect(() => {
    const loadOrderDetails = async () => {
      const data = await fetchOrderDetails(orderId);
      setOrder(data);
    };

    loadOrderDetails();
  }, [orderId]);

  if (!order) return <Typography>Loading...</Typography>;

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Order Details
      </Typography>
      <Box>
        <Typography variant="h6">Order ID: {order.id}</Typography>
        <Typography variant="body2">Customer: {order.customerName}</Typography>
        <Typography variant="body2">Status: {order.status}</Typography>

        <Typography variant="h6">Items</Typography>
        <Grid container spacing={2}>
          {order.items.map((item) => (
            <Grid item key={item.id} xs={12} sm={6} md={4}>
              <Box>
                <Typography variant="body2">{item.name}</Typography>
                <Typography variant="body2">Quantity: {item.quantity}</Typography>
                <Typography variant="body2">Price: ${item.price}</Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
      <Button variant="outlined" href="/orders">Back to Orders</Button>
    </Container>
  );
};

export default OrderDetailsPage;
