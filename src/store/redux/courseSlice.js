import { createSlice } from "@reduxjs/toolkit";

const courseSlice = createSlice({
  name: 'course',
  initialState: {
    items: [],
  },
  reducers: {
    setCourses: (state, action) => {
      state.items = action.payload;
    },
  },
});

export const { setCourses } = courseSlice.actions;
export default courseSlice.reducer;