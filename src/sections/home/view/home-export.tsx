'use client';

import React, { useEffect } from 'react';
import {
  AppBar,
  Button,
  Dialog,
  DialogTitle,
  IconButton,
  Toolbar,
  Typography,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import 'prismjs/themes/prism-okaidia.css';
import { useDispatch, useSelector } from 'react-redux';
// components
import { RootState } from 'src/redux/store';
import Prism from 'prismjs';
import 'prismjs/components/prism-haml';
import { Light as SyntaxHighlighter } from 'react-syntax-highlighter';
import { okaidia } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { renderHtmlData } from 'src/utils/utils';
import { Template } from 'src/constant/constant';
import { handleSetExportModal } from 'src/redux/slices/template';
import { Icon } from '@iconify/react';

// ----------------------------------------------------------------------

export default function HomeExportModal() {
  const { exportModal, blocks } = useSelector((state: RootState) => state.template);
  const htmlData = renderHtmlData(blocks);
  const dispatch = useDispatch();
  useEffect(() => {
    const highlight = async () => {
      await Prism.highlightAll();
    };
    highlight();
  }, [htmlData]);

  const handleDownloadFile = () => {
    const blob = new Blob([Template.tailwindExport.content(htmlData)], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'downloaded.html';
    a.click();
    URL.revokeObjectURL(url);
  };

  const handleClose = () => dispatch(handleSetExportModal(false));

  return (
    <Dialog fullScreen open={exportModal} onClose={handleClose}>
      <AppBar sx={{ position: 'relative' }}>
        <Toolbar>
          <IconButton edge="start" color="inherit" onClick={handleClose} aria-label="close">
            <CloseIcon />
          </IconButton>
          <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
            Source Code
          </Typography>
          <Button variant="contained" onClick={handleDownloadFile}>
            Download File
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
  );
}
