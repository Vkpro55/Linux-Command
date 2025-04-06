const fs = require('fs');
const fsPromises = require('fs').promises;
const path = require('path');

const dirPath1 = 'your-folder1';
const dirPath2 = 'your-folder2';
const dirPath3 = 'your-folder3';

// Asynchronous mkdir (callback style)
fs.mkdir(dirPath1, { recursive: true }, (err) => {
    if (err) {
        console.error('Error creating directory:', err);
    } else {
        console.log('Directory 1 created successfully!');
    }
});

// Synchronous mkdir
fs.mkdirSync(dirPath2, { recursive: true });
console.log('Directory 2 created successfully!');

// Promise-based mkdir
fsPromises.mkdir(dirPath3, { recursive: true })
    .then(() => console.log('Directory 3 created successfully!'))
    .catch((err) => console.error('Error creating directory:', err));
