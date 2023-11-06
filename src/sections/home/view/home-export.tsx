'use client';

import React, { useEffect } from 'react';
import { AppBar, Dialog, DialogTitle, IconButton, Toolbar, Typography } from '@mui/material';
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
  // const handleDownloadFile = async () => {
  //   try {
  //     const response = await fetch('/generate-html-file', {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //       body: JSON.stringify({ htmlData }), // Send the HTML data to the server
  //     });

  //     if (response.ok) {
  //       // Assuming the server sends a downloadable file as a response
  //       const blob = await response.blob();
  //       const url = window.URL.createObjectURL(blob);
  //       const a = document.createElement('a');
  //       a.href = url;
  //       a.download = 'index.html';
  //       document.body.appendChild(a);
  //       a.click();
  //       document.body.removeChild(a);
  //     }
  //   } catch (error) {
  //     console.error('Error downloading file:', error);
  //   }
  // };

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
          {/* <Button autoFocus color="inherit" onClick={handleDownloadFile}>
            Download File
          </Button> */}
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
