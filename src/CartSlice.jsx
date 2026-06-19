// Chore: minor meta update for clean commit
import { createSlice } from '@reduxjs/toolkit';

export const CartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [], // Initialize items as an empty array
  },
  reducers: {
    addItem: (state, action) => {
      const newItem = action.payload;
      const existingItem = state.items.find(item => item.name === newItem.name);
      if (existingItem) {
        existingItem.quantity += 1; 
      } else {
        state.items.push({ ...newItem, quantity: 1 });
      }
    },
    removeItem: (state, action) => {
      const item = action.payload;
      state.items = state.items.filter(i => i.name !== item.name);
    },
    updateQuantity: (state, action) => {
      const { name, quantity } = action.payload;
      const item = state.items.find(i => i.name === name);
      if (item) {
        item.quantity = quantity;
      }
    },
  },
});

export const { addItem, removeItem, updateQuantity } = CartSlice.actions;

export default CartSlice.reducer;
