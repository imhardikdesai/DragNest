'use client';

// @mui
import { alpha } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
// components
import { useSettingsContext } from 'src/components/settings';
import { Template } from 'src/constant/constant';
import { useSelector } from 'react-redux';
import { RootState } from 'src/redux/store';
import MacMockup from 'src/components/common/MacMockup';
import HomePreviewScreen from '../home-preview-screen';

// ----------------------------------------------------------------------

export default function HomeEditorView() {
  const settings = useSettingsContext();
  const { width } = useSelector((state: RootState) => state.screen.current);
  const { blocks } = useSelector((state: RootState) => state.template);
  const htmlData = blocks.map((block: any) => block.content).join('');

  return (
    <Container maxWidth={settings.themeStretch ? false : 'xl'}>
      <Box
        display="flex"
        justifyContent="space-between"
        flexDirection={{ xs: 'column', sm: 'row' }}
        gap={{ xs: 2, sm: 5 }}
        alignItems="center"
      >
        <Typography variant="h4">Web Editor</Typography>
        <HomePreviewScreen />
      </Box>
      <Box
        width="100%"
        overflow="auto"
        sx={{
          mt: 5,
          borderRadius: 2,
          border: (theme) => `dashed 1px ${theme.palette.divider}`,
          px: (theme) => theme.spacing(2),
        }}
      >
        <Box
          sx={{
            my: 2,
            width,
            height: '100vh',
            marginInline: 'auto',
            overflowY: 'hidden',
            border: () => `solid 1px gray`,
            color: '#000',
            bgcolor: (theme) => alpha(theme.palette.grey[100], 1),
          }}
        >
          <MacMockup />
          <iframe
            srcDoc={Template.tailwind.content(htmlData)}
            width="100%"
            height="100%"
            title="Preview"
          />
        </Box>
      </Box>
    </Container>
  );
}
