import { createSlice } from '@reduxjs/toolkit';

// types
import { templateTypes } from 'src/types/template';

// ----------------------------------------------------------------------

const initialState: templateTypes = {
  blocks: [],
  editId: null,
  editBlock: null,
  editModal: false,
  exportModal: false,
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
    handleSetExportModal: (state, action) => {
      state.exportModal = action.payload;
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
    handleDeleteBlock: (state) => {
      const deleteIndex = state.blocks.findIndex((item) => item.uuid === state.editId);
      state.blocks.splice(deleteIndex, 1);
    },
    handleSortBlocks: (state, action) => {
      state.blocks = action.payload
        .map((id: string) => {
          const matchingObject = state.blocks.find((obj) => obj.uuid === id);
          if (matchingObject) {
            return matchingObject;
          }
          return null;
        })
        .filter((obj: any) => obj !== null);
    },
    handleReset: (state) => {
      state.blocks = [];
      state.editId = null;
      state.editBlock = null;
      state.editModal = false;
      state.exportModal = false;
    },
  },
});

// Reducer
export default slice.reducer;

export const {
  handlePushBlock,
  handleSetEditId,
  handleSetEditModal,
  handleUpdateDefaultData,
  handleSetExportModal,
  handleDeleteBlock,
  handleSortBlocks,
  handleReset,
} = slice.actions;
