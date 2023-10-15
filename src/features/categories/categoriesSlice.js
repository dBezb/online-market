import { createSlice } from "@reduxjs/toolkit";

export const getCategories = createAsyncThunk(
  "categories/getCategories",
  async (_, thunkAPI) => {
    try {
    } catch (err) {
      console.log("Error");
      return thunkAPI.rejectWithValue(err);
    }
  }
);

const categoriesSlice = createSlice({
  name: "categories",
  initialState: {
    list: [],
  },
});
