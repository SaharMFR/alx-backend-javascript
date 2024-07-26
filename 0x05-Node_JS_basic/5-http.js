const http = require('http');
const countStudents = require('./3-read_file_async');

const args = process.argv.slice(2);
const DATABASE = args[0];

const hostname = '127.0.0.1';
const port = 1245;

const app = http.createServer(async (req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');

  const { url } = req;

  if (url === '/') {
    res.write('Hello Holberton School!');
    res.end();
  } else if (url === '/students') {
    res.write('This is the list of our students\n');

    // Redirect console.log output to a string
    const originalConsoleLog = console.log;
    const logOutput = [];
    console.log = (...args) => {
      logOutput.push(args.join(' '));
      originalConsoleLog.apply(console, args);
    };

    try {
      await countStudents(DATABASE);
      res.end(logOutput.join('\n'));
    } catch (error) {
      res.statusCode = 500;
      res.end(error.message);
    } finally {
      // Restore original console.log function
      console.log = originalConsoleLog;
    }
  } else {
    res.statusCode = 404;
    res.end('Not Found');
  }
});

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

module.exports = app;
