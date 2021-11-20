var child_process = require('child_process')
child_process.execSync('npm run start', { stdio: [0, 1, 2] })
