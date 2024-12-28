// services/categoryService.js

export const fetchCategories = async () => {
    try {
      const response = await fetch("https://yourapi.com/api/categories"); // Replace with your actual API URL
      if (!response.ok) {
        throw new Error("Failed to fetch categories");
      }
      const data = await response.json();
      return data; // Return categories data
    } catch (error) {
      console.error("Error fetching categories:", error);
      throw error; // Rethrow the error to handle it in the component if needed
    }
  };
  