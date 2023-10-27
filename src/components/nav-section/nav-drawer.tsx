import { Drawer } from '@mui/material';

const NavDrawer = ({ item, drawer }: { item: any; drawer: any }) => {
  const { title, path, icon, children, disabled, caption, roles } = item;
  const { value, onFalse } = drawer;
  return (
    <Drawer
      sx={{
        '.MuiPaper-root': {
          left: '5.5rem',
        },
      }}
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
      {title}
    </Drawer>
  );
};

export default NavDrawer;
