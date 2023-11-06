import { Icon } from '@iconify/react';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from '@mui/material';
import React from 'react';
import { useDispatch } from 'react-redux';
import { handleReset } from 'src/redux/slices/template';

const ResetDialog = () => {
  const [open, setOpen] = React.useState(false);
  const dispatch = useDispatch();
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <>
      <Button color="error" onClick={handleOpen} variant="contained">
        <Icon icon="bx:reset" fontSize="1.5rem" />
        Reset
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">Are you sure?</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            This action will reset all of you changes.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>No</Button>
          <Button
            variant="contained"
            onClick={() => {
              dispatch(handleReset());
              handleClose();
            }}
            autoFocus
          >
            Yes, Please
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default ResetDialog;
