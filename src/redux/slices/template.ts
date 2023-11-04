import { createSlice } from '@reduxjs/toolkit';

// types
import { templateTypes } from 'src/types/template';

// ----------------------------------------------------------------------

const initialState: templateTypes = {
  blocks: [],
  editId: null,
  editBlock: null,
  editModal: false,
};

const slice = createSlice({
  name: 'template',
  initialState,
  reducers: {
    handlePushBlock: (state, action) => {
      state.blocks.push(action.payload);
    },
    handleSetEditModal: (state, action) => {
      state.editModal = action.payload;
    },
    handleSetEditId: (state, action) => {
      state.editId = action.payload;
      state.editBlock = state.blocks.find((item) => item.uuid === action.payload);
      if (action.payload) {
        state.editModal = true;
      } else {
        state.editModal = false;
      }
    },
    handleUpdateDefaultData: (state, action) => {
      const updateIndex = state.blocks.findIndex((item) => item.uuid === state.editId);
      state.blocks[updateIndex].defaultData = {
        ...state.blocks[updateIndex].defaultData,
        ...action.payload,
      };
    },
  },
});

// Reducer
export default slice.reducer;

export const { handlePushBlock, handleSetEditId, handleSetEditModal, handleUpdateDefaultData } =
  slice.actions;
