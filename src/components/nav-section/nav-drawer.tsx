import { Drawer, Box, Typography } from '@mui/material';
import { useSelector } from 'react-redux';
import { RootState } from 'src/redux/store';
import BLOCK_DATA from 'src/constant/blocksData';
import CodeBlockCard from '../common/drawer/code-block-card';
import SearchBlocks from '../common/SearchBlocks';

const NavDrawer = ({ item, drawer }: { item: any; drawer: any }) => {
  const { title } = item;
  const { value, onFalse } = drawer;
  const { results } = useSelector((state: RootState) => state.search);
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
        {title === 'Search' ? (
          <>
            <SearchBlocks />
            {[].concat(...(results || []))?.map((ele: any) => (
              <CodeBlockCard type={ele.type} item={ele} />
            ))}
          </>
        ) : (
          <section>
            {DATA.map((ele) => (
              <CodeBlockCard type={title} item={ele} />
            ))}
          </section>
        )}
      </Box>
    </Drawer>
  );
};

export default NavDrawer;
