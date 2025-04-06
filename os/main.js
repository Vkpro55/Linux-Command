const os = require('os');

/*== Get the CPU architecture on which current Node.js is compiled */
console.log(os.arch()); // Output: 'x64' or 'arm64'

/*== Get the amount of free system memory */
console.log(`${(os.freemem() / 1024 / 1024 / 1024).toFixed(3)}`); // Output: 1234567890 (in gb)

/*== Get end of the line character of the os */
/*== It’s not visible in console logs — it moves the cursor to the next line instead of printing something you can see. */
console.log(JSON.stringify(os.EOL)); // Output: '\n' or '\r\n' depending on the OS

/*== Get the information about each core of the cpu */
console.log(os.cpus()); // Output: Array of objects with information about each core

/*== Endianness is about the byte order of the cpu on which node.js is running.  Least significant byte first: 78 56 34 12 */
console.log(os.endianness());

/*== Get the hostname of the os */
console.log(os.hostname()); // Output: 'my-computer.local'

/*== Get the information about the network interfaces of the os */
console.log(os.networkInterfaces()); // Output: Object with information about network interfaces

/*== Get the operating system platform on which current Node.js is running */
console.log(os.platform()); // Output: 'darwin', 'linux', 'win32', etc.

/*== Get the operating system release version on which current Node.js is running */
console.log(os.release()); // Output: '20.4.0', '5.4.0-42-generic', etc.

/*== Get the system uptime in seconds */
console.log(os.uptime()); // Output: 123456 (in seconds)

/*== Get the total amount of system memory */
console.log(`${(os.totalmem() / 1024 / 1024 / 1024).toFixed(3)}`); // Output: 1234567890 (in gb)

/*== Get the user information of the os */
console.log(os.userInfo()); // Output: Object with information about the current user

/*== Get the home directory of the current user */
console.log(os.homedir()); // Output: '/Users/username' or 'C:\Users\username'

/*== Get the temporary directory of the os */
console.log(os.tmpdir()); // Output: '/tmp' or 'C:\Users\username\AppData\Local\Temp'

/*== Get the priority of the process */
console.log(os.getPriority()); // Output: 0 (default priority)

