// src/components/ProductCard.js

import React from 'react';
import { Card, CardContent, Typography, Button } from '@mui/material';

const ProductCard = ({ product }) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <img src={product.image} alt={product.name} style={{ width: '100%' }} />
      <CardContent>
        <Typography variant="h6">{product.name}</Typography>
        <Typography variant="body2" color="text.secondary">
          {product.description}
        </Typography>
        <Button size="small" color="primary">
          View Details
        </Button>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
