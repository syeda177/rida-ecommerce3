import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface CartItem {
    id: number;
    title: string;
    price: number;
    category: string;
    image: string;
    rating: {
        rate: number;
        count: number;
    };
    quantity: number;
}

interface CartState {
    item: CartItem[];
}

const initialState:CartState = {
    item: []
};

export const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addItem: (state, action:PayloadAction<Omit<CartItem, "quantity">>) => {
            const existingItem = state.item.find(item => item.id === action.payload.id);
            if (existingItem) {
              existingItem.quantity += 1;
            } else {
              state.item.push({ ...action.payload, quantity: 1 });
            }
          },
          
        removeItem: (state, action: PayloadAction<{ id: number }>) => {
            const existingItem = state.item.find((item) => item.id === action.payload.id);
            if (existingItem) {
                if (existingItem.quantity > 1) {
                    existingItem.quantity -= 1;
                } else {
                    state.item = state.item.filter(item => item.id !== action.payload.id);
                }
            }
        },
        clearCart: (state) => {
            state.item = [];
        }
    }
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
