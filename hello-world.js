const fs = require('fs');
const path = require('path');

fs.writeFile(
    path.join(__dirname, '', 'hello-world.txt'),
    'Hello to this great world',
     err => {
        if (err) throw err;
        console.log('File written to...');
    }
);