const fs = require('fs').promises;
const path = require('path');

const directory = __dirname;

async function listFilesWithStats() {
    try {
        const files = await fs.readdir(directory);
        for (const file of files) {
            const filePath = path.join(directory, file);
            const stats = await fs.stat(filePath);
            console.log(`${file} - Size: ${stats.size} bytes`);
        }
    } catch (err) {
        console.error('Error:', err);
    }
}

listFilesWithStats();
