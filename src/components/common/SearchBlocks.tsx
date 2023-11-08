import * as React from 'react';
import TextField from '@mui/material/TextField';
import { Box } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'src/redux/store';
import { handleUpdateQuery } from 'src/redux/slices/search';

export default function SearchBlocks() {
  const dispatch = useDispatch();
  const { query } = useSelector((state: RootState) => state.search);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(handleUpdateQuery(event.target.value?.trim()?.toLowerCase()));
  };

  return (
    <Box mt={3}>
      <TextField
        autoFocus
        onChange={handleChange}
        label="Search Components"
        fullWidth
        value={query}
      />
    </Box>
  );
}
