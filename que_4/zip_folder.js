const fs = require('fs');
const archiver = require('archiver');
const path = require('path');

const folderToZip = 'myFolder'; 
const outputZipFile = `${folderToZip}.zip`;

const output = fs.createWriteStream(outputZipFile);

const archive = archiver('zip', {
  zlib: { level: 9 } 
});

output.on('close', () => {
  console.log(`Zip file created: ${outputZipFile} (${archive.pointer()} total bytes)`);
});

archive.on('error', (err) => {
  throw err;
});

archive.pipe(output);

archive.directory(folderToZip, false); 

archive.finalize();
