/**
 * Problem:
 * - sed 's/old/new' file_name
 */

const fs = require('fs');
const path = require('path');

function resolve(relativePath) {
    return path.resolve(__dirname, relativePath);
}

function sed(filePath, pattern, replacement) {
    const content = fs.readFileSync(filePath, 'utf8');
    const updatedContent = content.replace(pattern, replacement);
    fs.writeFileSync(filePath, updatedContent, 'utf8');
}

const filePath = resolve('./files/demo.txt');
const pattern = 'Hi';
const replacement = 'Vinod Kumar';

sed(filePath, pattern, replacement); // sed 's/old/new' demo.txt