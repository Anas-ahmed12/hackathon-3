'use client';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { saveCartToLocalStorage, loadCartFromLocalStorage } from './localStorage'; // Import helper functions

interface CartItem {
  id: string;
  title: string;
  price: number;
  quantity: number;
  imageUrl: string;
  items: any[];
  totalQuantity: number;
  size: string;
  name: string;
  colors: string[];
}

interface CartState {
  items: CartItem[];
  totalQuantity: number;
}

// Load cart from localStorage if it exists, otherwise use the default state
const initialState: CartState = loadCartFromLocalStorage() || {
  items: [],
  totalQuantity: 0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    increaseQuantity(state, action: PayloadAction<string>) {
      const id = action.payload;
      const existingItem = state.items.find((item) => item.id === id);
      if (existingItem) {
        existingItem.quantity += 1;
        // Do not update totalQuantity here
      }
    },
    decreaseQuantity(state, action: PayloadAction<string>) {
      const id = action.payload;
      const existingItem = state.items.find((item) => item.id === id);
    
      if (existingItem) {
        if (existingItem.quantity > 1) {
          existingItem.quantity -= 1;
          // Do not update totalQuantity here
        } else {
          state.totalQuantity -= existingItem.quantity; // Decrement by the current quantity
          state.items = state.items.filter((item) => item.id !== id); // Remove the item
        }
      }
    },
    addToCart(state, action: PayloadAction<CartItem>) {
      const newItem = action.payload;
      const existingItem = state.items.find((item) => item.id === newItem.id);
    
      if (existingItem) {
        existingItem.quantity += 1;
        // Do not update totalQuantity here
      } else {
        state.items.push({ ...newItem, quantity: 1 });
        // Update total quantity only when a new item is added
        state.totalQuantity += 1;
      }
    },
    
       removeFromCart(state, action: PayloadAction<string>) {
      const id = action.payload;
      const existingItem = state.items.find((item) => item.id === id);
      if (existingItem) {
        state.totalQuantity -= existingItem.quantity;
        state.items = state.items.filter((item) => item.id !== id);
      }
    },
    clearCart(state) {
      state.items = [];
      state.totalQuantity = 0;
    },
    updateQuantity(state, action: PayloadAction<{ id: string; quantity: number }>) {
      const { id, quantity } = action.payload;
      const existingItem = state.items.find((item) => item.id === id);
      if (existingItem) {
        existingItem.quantity = quantity;
      }
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
  clearCart,
  updateQuantity,
} = cartSlice.actions;

export default cartSlice.reducer;
