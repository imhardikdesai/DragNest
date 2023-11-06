import { createSlice } from '@reduxjs/toolkit';
import BLOCK_DATA from 'src/constant/blocksData';

// types
import { SearchType } from 'src/types/search';

// ----------------------------------------------------------------------

const initialState: SearchType = {
  query: null,
  results: [],
};

const slice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    handleUpdateQuery: (state, action) => {
      state.query = action.payload;
      if (action.payload === '') {
        state.results = [];
      } else {
        state.results = BLOCK_DATA.map((ele) =>
          Object.values(ele.list).map((i) =>
            i.name.toLowerCase().includes(state.query) ? { ...i, type: ele.type } : null
          )
        ).map((subArray) => subArray.filter((im) => im !== null));
      }
    },
  },
});

// Reducer
export default slice.reducer;

export const { handleUpdateQuery } = slice.actions;
