import React, { useEffect, useState } from 'react';
import { Container, Grid, Typography, Box } from '@mui/material';
import { fetchCategories } from '../../services/CategoryService'; // Your API call

const CategoriesPage = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const loadCategories = async () => {
      const data = await fetchCategories();
      setCategories(data);
    };

    loadCategories();
  }, []);

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Categories
      </Typography>
      <Grid container spacing={2}>
        {categories.map((category) => (
          <Grid item key={category.id} xs={12} sm={6} md={4}>
            <Box>
              <Typography variant="h6">{category.name}</Typography>
              <Typography variant="body2" color="text.secondary">
                {category.description}
              </Typography>
              {/* Add links or buttons to go to Subcategory or products */}
            </Box>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default CategoriesPage;
