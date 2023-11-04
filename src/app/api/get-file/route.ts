import fs from 'fs';

export async function POST(req: any, res: any) {
  try {
    const { htmlData } = req.body;

    // Write the HTML data to a file
    fs.writeFileSync('public/index.html', htmlData, 'utf-8');

    // Send the file as a response
    res.setHeader('Content-disposition', 'attachment; filename=index.html');
    res.setHeader('Content-type', 'text/html');
    res.status(200).send(fs.readFileSync('public/index.html'));

    // Cleanup: Delete the temporary file after it's been sent
    fs.unlinkSync('public/index.html');
  } catch (error) {
    console.error('Error generating file:', error);
    res.status(500).end('Error generating file');
  }
}
