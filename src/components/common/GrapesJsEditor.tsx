import React from 'react';

const GrapesJsEditor = ({ html }: { html: string }) => (
  <iframe title="GrapesJS Editor" srcDoc={html} style={{ width: '100%', height: '100vh' }} />
);

export default GrapesJsEditor;
