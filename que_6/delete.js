const fs = require('fs');         
const util = require('util');       

const unlinkAsync = util.promisify(fs.unlink);

async function deleteFile() {
  const fileName = 'test.txt';     

  try {
    await unlinkAsync(fileName);    
    console.log(`${fileName} deleted successfully`);
  } catch (err) {
    console.error(`Error deleting file:`, err.message);
  }
}

deleteFile();
