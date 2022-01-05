import { createSlice, PayloadAction } from "@reduxjs/toolkit";

//typescript thing
interface CustomerState {
  value: Customer[];
}
interface Customer {
  id: string;
  name: string;
  food: string[];
}
const initialState: CustomerState = {
  value: [],
};

export const customersSlice = createSlice({
  name: "customers",
  initialState,
  reducers: {
    addCustomer: (state, action: PayloadAction<Customer>) => {
      state.value.push(action.payload);
    },
    // addFood: (state, action PayloadAction<string>) =>{
    //   state.value.food.push(action.payload);
    // }
  },
});
export const { addCustomer } = customersSlice.actions;

export default customersSlice.reducer;
