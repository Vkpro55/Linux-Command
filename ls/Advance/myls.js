const fs = require('fs');
const path = require('path');
const os = require('os');

const args = process.argv.slice(2);
const flags = {
    a: args.includes('-a'),
    l: args.includes('-l'),
    h: args.includes('-h'),
    s: args.includes('-s'),
    t: args.includes('-t'),
    al: args.includes('-al'),
    ah: args.includes('-ah'),
};

const currentDir = process.cwd();

let files = fs.readdirSync(currentDir);

if (!flags.a) {
    files = files.filter(file => !file.startsWith('.'));
}

files = files.map(file => {
    const stats = fs.statSync(path.join(currentDir, file));
    return {
        name: file,
        size: stats.size,
        mtime: stats.mtime,
        isDir: stats.isDirectory(),
        mode: stats.mode
    };
});

if (flags.s) files.sort((a, b) => b.size - a.size);
if (flags.t) files.sort((a, b) => b.mtime - a.mtime);

files.forEach(file => {
    if (flags.l) {
        const perms = (file.isDir ? 'd' : '-') +
            ((file.mode & fs.constants.S_IRUSR) ? 'r' : '-') +
            ((file.mode & fs.constants.S_IWUSR) ? 'w' : '-') +
            ((file.mode & fs.constants.S_IXUSR) ? 'x' : '-');

        const size = flags.h ? humanSize(file.size) : file.size;

        console.log(`${perms} ${size} ${file.mtime.toLocaleString()} ${file.name}`);
    } else {
        console.log(file.name);
    }
});

function humanSize(bytes) {
    const units = ['B', 'KB', 'MB', 'GB', 'TB'];
    let i = 0;
    while (bytes >= 1024 && i < units.length - 1) {
        bytes /= 1024;
        i++;
    }
    return `${bytes.toFixed(1)} ${units[i]}`;
}
