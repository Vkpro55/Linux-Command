const fs = require('fs');
const path = require('path');
const { getUserFromUid } = require('./utils');

const procPath = '/proc';

try {
    const pids = fs.readdirSync(procPath).filter(pid => /^\d+$/.test(pid));

    console.log(`PID\tUSER\t\tMEM\tCMD`);
    console.log('------------------------------------------');

    pids.forEach(pid => {
        try {
            const statusPath = path.join(procPath, pid, 'status');
            const cmdPath = path.join(procPath, pid, 'cmdline');

            const status = fs.readFileSync(statusPath, 'utf-8');
            const cmdline = fs.readFileSync(cmdPath, 'utf-8') || '[kernel]';

            const nameLine = status.split('\n').find(line => line.startsWith('Name:'));
            const uidLine = status.split('\n').find(line => line.startsWith('Uid:'));
            const memLine = status.split('\n').find(line => line.startsWith('VmRSS:'));

            const user = getUserFromUid(uidLine?.split(/\s+/)[1] || '-');
            const mem = memLine ? memLine.split(/\s+/)[1] + ' KB' : '-';
            const cmd = cmdline.replace(/\0/g, ' ') || nameLine.split(/\s+/)[1];

            console.log(`${pid}\t${user.padEnd(10)}\t${mem}\t${cmd}`);
        } catch {
            // Process exited between readdir and readFile
        }
    });

} catch (err) {
    console.error('Error reading /proc:', err.message);
}
