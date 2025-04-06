const fs = require('fs');
const path = require('path');

// Fetch username from UID
const getUserFromUid = (uid) => {
    try {
        const passwd = fs.readFileSync('/etc/passwd', 'utf-8');
        const lines = passwd.split('\n');
        for (const line of lines) {
            const parts = line.split(':');
            if (parts[2] == uid) return parts[0];
        }
    } catch {
        return uid;
    }
    return uid;
};

module.exports = { getUserFromUid };
