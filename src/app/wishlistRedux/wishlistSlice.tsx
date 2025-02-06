import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface WishlistItem {
  id: string;
  title: string;
  price: number;
  imageUrl: string;
}

interface WishlistState {
  items: WishlistItem[];
  totalQuantity: number;
}

const initialState: WishlistState = {
  items: [],
  totalQuantity: 0,
};

const wishlistSlice = createSlice({
  name: 'wishlist',
  initialState,
  reducers: {
    addToWishlist(state, action: PayloadAction<WishlistItem>) {
      const newItem = action.payload;
      const existingItem = state.items.find((item) => item.id === newItem.id);
      if (!existingItem) {
        state.items.push(newItem);
        state.totalQuantity += 1;
      }
    },
    removeFromWishlist(state, action: PayloadAction<string>) {
      const id = action.payload;
      state.items = state.items.filter((item) => item.id !== id);
      state.totalQuantity -= 1;
    },
    clearWishlist(state) {
      state.items = [];
      state.totalQuantity = 0;
    },
  },
});

export const { addToWishlist, removeFromWishlist, clearWishlist } = wishlistSlice.actions;

export default wishlistSlice.reducer;
