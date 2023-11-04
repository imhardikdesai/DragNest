'use client';

import { Dialog, DialogTitle } from '@mui/material';
import { useSelector } from 'react-redux';
import RenderForm from 'src/components/common/RenderForm';
// components
import { RootState } from 'src/redux/store';

// ----------------------------------------------------------------------

export default function HomeEditModal() {
  const { editModal, editBlock, editId } = useSelector((state: RootState) => state.template);

  return (
    <Dialog open={editModal} fullWidth maxWidth="xs">
      <DialogTitle>{editBlock?.blockType}</DialogTitle>
      {editBlock && editId && <RenderForm />}
    </Dialog>
  );
}
