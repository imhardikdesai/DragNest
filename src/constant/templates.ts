export const Tailwind = (htmlData: string) =>
  `<!DOCTYPE html>
    <html lang="en">
    <head>
        <link href="https://unpkg.com/tailwindcss@^1.0/dist/tailwind.min.css" rel="stylesheet">
    </head>
    <body>
    ${htmlData}
    </body>
    <script>
        document.querySelectorAll('section[visual-editor]').forEach(el => {
          el.addEventListener('click', () => {
            window.top.postMessage({
              event: 'click',
              blockId: el.getAttribute('visual-editor')
            }, '*');
          })
        });
      </script>
    </html>`;

export const Bootstrap5 = (htmlData: string) =>
  `<!DOCTYPE html>
    <html lang="en">
    <head>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous">
    </head>
    <body>
    ${htmlData}
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL" crossorigin="anonymous"></script>
    </body>
    </html>`;
