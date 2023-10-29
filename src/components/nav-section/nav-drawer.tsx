import { Button, Drawer, Box, Typography } from '@mui/material';
import { useDispatch } from 'react-redux';
import { handlePushBlock } from 'src/redux/slices/template';
import CodeBlockCard from '../common/drawer/code-block-card';

const NavDrawer = ({ item, drawer }: { item: any; drawer: any }) => {
  const { title } = item;
  // const { title, path, icon, children, disabled, caption, roles } = item;
  const { value, onFalse } = drawer;
  const dispatch = useDispatch();

  const htmlData = `<section class="text-gray-600 body-font">
  <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
      <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Before they sold out
        <br class="hidden lg:inline-block">readymade gluten
      </h1>
      <p class="mb-8 leading-relaxed">Copper mug try-hard pitchfork pour-over freegan heirloom neutra air plant cold-pressed tacos poke beard tote bag. Heirloom echo park mlkshk tote bag selvage hot chicken authentic tumeric truffaut hexagon try-hard chambray.</p>
      <div class="flex justify-center">
        <button class="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">Button</button>
        <button class="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">Button</button>
      </div>
    </div>
    <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
      <img class="object-cover object-center rounded" alt="hero" src="https://avatars.githubusercontent.com/u/87645745?v=4">
    </div>
  </div>
</section>
`;

  return (
    <Drawer
      // sx={{
      //   '.css-w5t1nz-MuiModal-root-MuiDrawer-root .MuiDrawer-paper': {
      //     left: '5.5rem',
      //   },
      // }}
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
          {[1, 1].map(() => (
            <CodeBlockCard />
          ))}
        </section>
        <Button
          variant="contained"
          onClick={() =>
            dispatch(
              handlePushBlock({
                blockId: 'block-1',
                blockType: 'nav',
                content: htmlData,
              })
            )
          }
        >
          Add Block
        </Button>
      </Box>
    </Drawer>
  );
};

export default NavDrawer;
