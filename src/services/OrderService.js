
export const fetchOrders = async () => {
    const response = await fetch('/api/orders');
    const data = await response.json();
    return data;
  };
  
  export const fetchOrderDetails = async (orderId) => {
    const response = await fetch(`/api/orders/${orderId}`);
    const data = await response.json();
    return data;
  };
  