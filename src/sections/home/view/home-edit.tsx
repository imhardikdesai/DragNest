'use client';

import { Button, Dialog, DialogTitle } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import RenderForm from 'src/components/common/RenderForm';
import { handleDeleteBlock, handleSetEditModal } from 'src/redux/slices/template';
// components
import { RootState } from 'src/redux/store';

// ----------------------------------------------------------------------

export default function HomeEditModal() {
  const { editModal, editBlock, editId } = useSelector((state: RootState) => state.template);
  const dispatch = useDispatch();

  const deleteBlock = () => {
    dispatch(handleDeleteBlock());
    dispatch(handleSetEditModal(false));
  };
  return (
    <Dialog open={editModal} fullWidth maxWidth="xs">
      <DialogTitle display="flex" justifyContent="space-between">
        {editBlock?.blockType}
        <Button onClick={deleteBlock} color="error" variant="contained">
          Delete
        </Button>
      </DialogTitle>
      {editBlock && editId && <RenderForm />}
    </Dialog>
  );
}
