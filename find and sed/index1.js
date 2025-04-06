
/*== find command

find . -name "file.txt" → Find file by name

find / -type f -size +1M → Files > 1MB

find . -mtime -1 → Modified in last 1 day

find . -exec rm {} \; → Delete matching files

*/

const fs = require('fs');
const path = require('path');

function findFiles(dir, pattern) {
    fs.readdirSync(dir).forEach(file => {
        const fullPath = path.join(dir, file);

        /*== Check recursively inner directory */
        console.log(fs.statSync(fullPath).isDirectory());

        if (fs.statSync(fullPath).isDirectory()) {
            findFiles(fullPath, pattern);
        } else if (file.endsWith(pattern)) {
            console.log(fullPath);
        }
    });
}
findFiles('.', '.js'); // Like find . -name "*.js"
