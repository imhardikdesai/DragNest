'use client';

import React, { useEffect } from 'react';
import {
  AppBar,
  Button,
  Dialog,
  DialogTitle,
  IconButton,
  Slide,
  Snackbar,
  Toolbar,
  Typography,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { useDispatch, useSelector } from 'react-redux';
// components
import { RootState } from 'src/redux/store';
import copy from 'copy-to-clipboard';
import Prism from 'prismjs';
import 'prismjs/components/prism-haml';
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import 'react-syntax-highlighter/dist/cjs/styles/hljs';
import { okaidia } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { renderHtmlData } from 'src/utils/utils';
import { Template } from 'src/constant/constant';
import { handleSetExportModal } from 'src/redux/slices/template';
import { Icon } from '@iconify/react';

// ----------------------------------------------------------------------

function SlideTransition(props: any) {
  return <Slide {...props} direction="up" />;
}

export default function HomeExportModal() {
  const { exportModal, blocks } = useSelector((state: RootState) => state.template);
  const [open, setOpen] = React.useState(false);
  const htmlData = renderHtmlData(blocks);
  const dispatch = useDispatch();

  useEffect(() => {
    const highlight = () => Prism.highlightAll();
    highlight();
  }, []);

  const handleDownloadFile = () => {
    const blob = new Blob([Template.tailwindExport.content(htmlData)], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'CodeNest.html';
    a.click();
    URL.revokeObjectURL(url);
  };

  const handleClose = () => dispatch(handleSetExportModal(false));
  const handleCopy = () => {
    copy(Template.tailwindExport.content(htmlData));
    setOpen(true);
  };

  return (
    <>
      <Snackbar
        open={open}
        autoHideDuration={6000}
        TransitionComponent={SlideTransition}
        onClose={() => setOpen(false)}
        message="Copied to clipboard!"
      />
      <Dialog fullScreen open={exportModal} onClose={handleClose}>
        <AppBar sx={{ position: 'relative' }}>
          <Toolbar>
            <IconButton edge="start" color="inherit" onClick={handleClose} aria-label="close">
              <CloseIcon />
            </IconButton>
            <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
              Source Code
            </Typography>
            <Button color="success" variant="contained" onClick={handleCopy} sx={{ mr: 1 }}>
              Copy
              <Icon icon="solar:copy-bold" fontSize="1.5rem" style={{ marginLeft: '0.5rem' }} />
            </Button>
            <Button color="info" variant="contained" onClick={handleDownloadFile}>
              Download
              <Icon icon="ph:download-fill" fontSize="1.5rem" style={{ marginLeft: '0.5rem' }} />
            </Button>
          </Toolbar>
        </AppBar>
        <DialogTitle>
          <SyntaxHighlighter language="html" style={okaidia}>
            {Template.tailwindExport.content(htmlData)}
          </SyntaxHighlighter>
        </DialogTitle>
      </Dialog>
    </>
  );
}
