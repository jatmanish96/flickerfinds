import React, { useEffect, useState } from 'react';
import { Container, Grid } from '@mui/material';
import ProductCard from '../../component/ProductCard/ProductCard';
import { fetchProducts } from '../../services/ProductService'; 

const ProductsPage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch products data
    const loadProducts = async () => {
      const data = await fetchProducts();
      setProducts(data);
    };

    loadProducts();
  }, []);

  return (
    <Container>
      <Grid container spacing={2}>
        {products.map((product) => (
          <Grid item key={product.id} xs={12} sm={6} md={4}>
            <ProductCard product={product} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default ProductsPage;
