/**
 * Problem: In Interviews: You might be asked to recreate a simplified "ls" command using JavaScript by reading files from a directory using fs.readdirSync().
 * 
 * - rmdir
 * - rename
 */


const fs = require('fs');
const path = require('path');

const directoryPath1 = path.join(__dirname, 'your-directory');
const directoryPath2 = path.join(__dirname, 'your-directory2');

/*== fs.access(directoryPath1, ...) → callback-based → non-blocking (async) 

- R_OK means: Check if the file or directory is readable.
- F_OK: Check if the file or directory exists.
- W_OK: Check if the file or directory is writable.
- X_OK: Check if the file or directory is executable.
*/
fs.access(directoryPath1, fs.constants.R_OK, (err) => {
    if (err) {
        console.error(`Error: ${directoryPath1} is not accessible`);
        return;
    }
    else {
        console.log(`Directory ${directoryPath1} is accessible`);
    }
})


/*== checkFolderExistence(directoryPath2) → uses await fs.access() → promise-based → also non-blocking */
async function checkFolderExistence(folderPath) {
    try {
        await fs.access(folderPath, fs.constants.F_OK);
        console.log('Folder exists!');
    } catch (err) {
        console.error('Folder does NOT exist');
    }
}

checkFolderExistence(directoryPath2);


