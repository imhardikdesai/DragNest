import { Icon } from '@iconify/react';
import { Box } from '@mui/material';
import React from 'react';

const MacMockup = () => (
  <Box
    sx={{
      borderBottom: (theme) => `solid 1px ${theme.palette.divider}`,
      bgcolor: '#1e1e1e',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      gap: 3,
    }}
  >
    <Box sx={{ display: 'flex', alignItems: 'center', gap: '10px', m: 1 }}>
      <Icon color="#FF605C" fontSize={15} icon="fa-solid:dot-circle" />
      <Icon color="#FFBD44" fontSize={15} icon="fa-solid:dot-circle" />
      <Icon color="#00CA4E" fontSize={15} icon="fa-solid:dot-circle" />
    </Box>
    <Box sx={{ display: 'flex', alignItems: 'center', gap: '10px', m: 1 }}>
      <Icon color="#A2AAAD" fontSize={22} icon="ic:twotone-apple" />
    </Box>
    <Box sx={{ display: 'flex', alignItems: 'center', gap: '2px', m: 1 }}>
      <Icon color="#ffffff" fontSize={22} icon="jam:arrow-square-left-f" />
      <Icon color="#ffffff" fontSize={22} icon="jam:arrow-square-right-f" />
      {/* <Icon color="#ffffff" fontSize={22} icon="typcn:plus" /> */}
    </Box>
  </Box>
);

export default MacMockup;
