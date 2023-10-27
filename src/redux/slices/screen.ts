import { createSlice } from '@reduxjs/toolkit';

// types
import { ScreenType } from 'src/types/screen';

// ----------------------------------------------------------------------

const initialState: ScreenType = {
  current: {
    type: 'tv',
    width: 1440,
  },
};

const slice = createSlice({
  name: 'screen',
  initialState,
  reducers: {
    setPreviewScreen: (state, action) => {
      state.current = action.payload;
    },
  },
});

// Reducer
export default slice.reducer;

export const { setPreviewScreen } = slice.actions;

// ----------------------------------------------------------------------
export const screenTypes = [
  {
    type: 'tv',
    width: 1440,
  },
  {
    type: 'laptop',
    width: 1024,
  },
  {
    type: 'tablet',
    width: 768,
  },
  {
    type: 'phone',
    width: 425,
  },
];
