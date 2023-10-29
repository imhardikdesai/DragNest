import { createSlice } from '@reduxjs/toolkit';

// types
import { templateTypes } from 'src/types/template';

// ----------------------------------------------------------------------

const initialState: templateTypes = {
  blocks: [],
};

const slice = createSlice({
  name: 'template',
  initialState,
  reducers: {
    handlePushBlock: (state, action) => {
      state.blocks.push(action.payload);
    },
  },
});

// Reducer
export default slice.reducer;

export const { handlePushBlock } = slice.actions;
