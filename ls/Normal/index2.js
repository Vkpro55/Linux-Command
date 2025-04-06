const fs = require('fs');
const path = require('path');

const directory = __dirname;

/* work like "ls" linux command */
function readDirAsync(dir) {
    return new Promise((resolve, reject) => {
        fs.readdir(dir, (err, files) => {
            if (err) reject(err);
            else resolve(files);
        });
    });
}

readDirAsync(directory)
    .then(files => {
        files.forEach(file => {
            const filePath = path.join(directory, file);
            fs.stat(filePath, (err, stats) => {
                if (err) {
                    console.error(`Error getting stats for ${file}:`, err);
                } else {
                    console.log(`${file} - Size: ${stats.size} bytes`);
                }
            });
        });
    })
    .catch(err => {
        console.error('Error reading directory:', err);
    });
