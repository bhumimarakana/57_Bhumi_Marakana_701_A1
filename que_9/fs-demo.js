const fs = require('fs');

fs.writeFile('example.txt', 'Hello Bhumi!', (err) => {
  if (err) throw err;
  console.log('File created and data written!');

  fs.appendFile('example.txt', '\nHow are you today?', (err) => {
    if (err) throw err;
    console.log('Data appended to file!');

    fs.readFile('example.txt', 'utf8', (err, data) => {
      if (err) throw err;
      console.log('File content:\n' + data);

      fs.rename('example.txt', 'bhumi-note.txt', (err) => {
        if (err) throw err;
        console.log('File renamed to bhumi-note.txt');

        // fs.unlink('bhumi-note.txt', (err) => {
        //   if (err) throw err;
        //   console.log('File deleted successfully!');
       // });
      });
    });
  });
});
