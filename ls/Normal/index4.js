const fs = require('fs');
const path = require('path');

function simpleLs(dirPath = '.') {
    try {
        const files = fs.readdirSync(dirPath);

        files.forEach(file => {
            console.log(file);
        });
    } catch (error) {
        console.error('Error reading directory:', error.message);
    }
}

simpleLs();
console.log('Done!');