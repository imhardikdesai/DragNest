// @mui
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
// theme
import { hideScroll } from 'src/theme/css';
import { NAV } from '../config-layout';

const SideBarWide = () => (
  <Box
    component="nav"
    sx={{
      flexShrink: { lg: 0 },
      width: { lg: NAV.W_MINI },
    }}
  >
    <Stack
      sx={{
        pb: 2,
        height: 1,
        // position: 'fixed',
        width: NAV.W_MINI,
        borderRight: (theme) => `dashed 1px ${theme.palette.divider}`,
        ...hideScroll.x,
      }}
    >
      Final ssss
    </Stack>
  </Box>
);

export default SideBarWide;
