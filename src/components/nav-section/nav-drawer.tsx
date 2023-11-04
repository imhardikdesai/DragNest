import { Drawer, Box, Typography } from '@mui/material';
import BLOCK_DATA from 'src/constant/blocksData';
import CodeBlockCard from '../common/drawer/code-block-card';

const NavDrawer = ({ item, drawer }: { item: any; drawer: any }) => {
  const { title } = item;
  const { value, onFalse } = drawer;

  const DATA = Object.values(BLOCK_DATA.find((ele) => ele.type === title)?.list || {});

  return (
    <Drawer
      open={value}
      onClose={onFalse}
      anchor="left"
      slotProps={{
        backdrop: { invisible: true },
      }}
      PaperProps={{
        sx: { width: 1, maxWidth: 420 },
      }}
    >
      <Box sx={{ paddingTop: 6, paddingInline: 2, display: 'flex', flexDirection: 'column' }}>
        <Typography variant="subtitle1" fontSize="20px">
          {title}
        </Typography>
        <section>
          {DATA.map((ele) => (
            <CodeBlockCard type={title} item={ele} />
          ))}
        </section>
      </Box>
    </Drawer>
  );
};

export default NavDrawer;
