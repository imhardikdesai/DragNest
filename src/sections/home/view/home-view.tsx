'use client';

import { useEffect } from 'react';
// @mui
import { alpha } from '@mui/material/styles';
import { Box, Button, Container, Typography } from '@mui/material';
// components
import { useSettingsContext } from 'src/components/settings';
import { Template } from 'src/constant/constant';
import { useDispatch, useSelector } from 'react-redux';
import { handleSetEditId, handleSetExportModal, handleSortBlocks } from 'src/redux/slices/template';
import { Icon } from '@iconify/react';
import { renderHtmlData } from 'src/utils/utils';
import { RootState } from 'src/redux/store';
import MacMockup from 'src/components/common/MacMockup';
import ResetDialog from 'src/components/common/ResetDialog';
import HomeEditModal from './home-edit';
import HomePreviewScreen from '../home-preview-screen';
import HomeExportModal from './home-export';

// ----------------------------------------------------------------------

export default function HomeEditorView() {
  const settings = useSettingsContext();
  const dispatch = useDispatch();
  const { width } = useSelector((state: RootState) => state.screen.current);
  const { blocks } = useSelector((state: RootState) => state.template);
  const htmlData = renderHtmlData(blocks);

  useEffect(() => {
    window.addEventListener('message', (e) => {
      if (e?.data?.blockId) {
        if (e.data.event === 'click') {
          dispatch(handleSetEditId(e.data.blockId));
        } else if (e.data.event === 'hover') {
          console.log(e.data.blockId);
        }
      } else if (e?.data?.newOrder) {
        dispatch(handleSortBlocks(e.data.newOrder || []));
      }
    });
  }, [dispatch]);

  return (
    <Container maxWidth={settings.themeStretch ? false : 'xl'}>
      <HomeEditModal />
      <HomeExportModal />
      <Box
        display="flex"
        justifyContent="space-between"
        flexDirection={{ xs: 'column', sm: 'row' }}
        gap={{ xs: 2, sm: 5 }}
        alignItems="center"
      >
        <Typography variant="h4">Web Editor</Typography>
        <Box
          display="flex"
          justifyContent="space-between"
          flexDirection={{ xs: 'column', sm: 'row' }}
          alignItems="center"
          gap={2}
        >
          <Button onClick={() => dispatch(handleSetExportModal(true))} variant="contained">
            Export
            <Icon icon="ph:export-duotone" fontSize="1.5rem" />
          </Button>
          <ResetDialog />
          <HomePreviewScreen />
        </Box>
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
            height: '80vh',
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
