import { createSlice } from "@reduxjs/toolkit";

const getInitialCart = () => {

  if (typeof window !== "undefined") {

    const storedCart =
      localStorage.getItem("cart");

    return storedCart
      ? JSON.parse(storedCart)
      : [];
  }

  return [];
};

const initialState = {
  items: getInitialCart(),
};


const cartSlice = createSlice({
  name: "cart",

  initialState,

  reducers: {

    addToCart: (state, action) => {

      const product = action.payload;

      const existingItem = state.items.find(
        (item) => item.id === product.id
      );

      if (existingItem) {

        existingItem.quantity += 1;

      } else {

        state.items.push({
          id: product.id,
          name: product.name,
          imageURL: product.customImage,
          price: product.price,
          quantity: 1,
          brand: product.brand,
        });
      }
    },

    removeFromCart: (state, action) => {

      state.items = state.items.filter(
        (item) => item.id !== action.payload
      );
    },

    increaseQuantity: (state, action) => {

      const item = state.items.find(
        (item) => item.id === action.payload
      );

      if (item) {
        item.quantity += 1;
      }
    },

    decreaseQuantity: (state, action) => {

      const item = state.items.find(
        (item) => item.id === action.payload
      );

      if (item && item.quantity > 1) {
        item.quantity -= 1;
      }
    },

    clearCart: (state) => {
      state.items = [];
    },

  },
});

export const {
  addToCart,
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
  clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;