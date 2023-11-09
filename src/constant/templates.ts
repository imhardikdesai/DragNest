export const Tailwind = (htmlData: string) =>
  `
<!DOCTYPE html>
<html lang="en">
   <head>
      <meta charset="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
      <link href="https://unpkg.com/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet">
      <script src="https://cdn.tailwindcss.com"></script>
      <style>
         .border-style{
         border-style: dashed;
         border-width: 1px;
         border-color: transparent;
         margin: 1px;
         cursor: pointer;
         }
         .border-style:hover{
         border-color: black;
         }
      </style>
   </head>
   <body>
      <div class="sortable ui-sortable">
         ${htmlData}
      </div>
   </body>
   <script src="https://code.jquery.com/jquery-3.5.1.min.js" integrity="sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0=" crossorigin="anonymous"></script>
   <script src="https://code.jquery.com/ui/1.12.1/jquery-ui.js"></script>
   <script>
      const scrollY = localStorage.getItem('scrollY');
      const bodyHeight = localStorage.getItem('bodyHeight');
      if (scrollY) {
          window.scrollTo(0, scrollY);
      }
      
      if (bodyHeight) {
          window.scroll(0, scrollY);
      }
      
      window.addEventListener('scroll', () => {
        localStorage.setItem('scrollY', window.scrollY);
      });
      
      $(function() {
      const sort = $(".sortable").sortable({
          placeholder: "drag-n-drop-placeholder",
          axis: 'y',
          cursor: 'grabbing',
          distance: 10,
          items: '> section[visual-editor]',
          opacity: 0.25,
          scrollSensitivity: 100,
          forcePlaceholderSize: true,
      }).disableSelection();
      
      $('a').click(function(e) {
          e.preventDefault();
      });
      
      sort.on("sortupdate", function( event, ui ) {
        const newOrder = [];
        document.querySelectorAll('section[visual-editor]').forEach(el => {
          newOrder.push(el.getAttribute('visual-editor'));
        });
        window.top.postMessage({
          event: 'sorted',
          newOrder
        }, '*');
      });
      });
   </script>
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
</html>

`;
export const TailwindExport = (htmlData: string) =>
  `
<!DOCTYPE html>
<html lang="en">
   <head>
      <meta charset="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
      <link href="https://unpkg.com/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet">
      <script src="https://cdn.tailwindcss.com"></script>
   </head>
   <body>
      ${htmlData}
   </body>
</html>
`;

export const Bootstrap5 = (htmlData: string) =>
  `
<!DOCTYPE html>
<html lang="en">
   <head>
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous">
   </head>
   <body>
      ${htmlData}
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL" crossorigin="anonymous"></script>
   </body>
</html>
`;
