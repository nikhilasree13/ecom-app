import { createSlice } from "@reduxjs/toolkit";

// Load initial cart from localStorage safely
const loadCart = () => {
  try {
    const serialized = localStorage.getItem("cart");
    return serialized ? JSON.parse(serialized) : [];
  } catch (e) {
    console.warn("Failed to load cart from localStorage", e);
    return [];
  }
};

const initialState = loadCart();

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const product = action.payload;
      const existing = state.find(p => p.id === product.id);
      if (existing) {
        existing.quantity += 1;
      } else {
        state.push({ ...product, quantity: 1 });
      }
    },
    increaseQty: (state, action) => {
      const item = state.find(i => i.id === action.payload);
      if (item) item.quantity += 1;
    },
    decreaseQty: (state, action) => {
      const index = state.findIndex(i => i.id === action.payload);
      if (index !== -1) {
        const item = state[index];
        item.quantity -= 1;
        if (item.quantity <= 0) {
          state.splice(index, 1);
        }
      }
    },
    removeItem: (state, action) => {
      return state.filter(i => i.id !== action.payload);
    },
    clearCart: () => []
  }
});

export const { addToCart, increaseQty, decreaseQty, removeItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
