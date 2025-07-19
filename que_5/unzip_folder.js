const fs = require('fs');
const unzipper = require('unzipper');

const zipFile = 'heloo node.zip';         
const outputFolder = 'unzipped';        

fs.createReadStream(zipFile)
  .pipe(unzipper.Extract({ path: outputFolder }))
  .on('close', () => {
    console.log(`Extraction complete! Files are in "${outputFolder}" folder.`);
  })
  .on('error', (err) => {
    console.error('Error while extracting:', err.message);
  });
