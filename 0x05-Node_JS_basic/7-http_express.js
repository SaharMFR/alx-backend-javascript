const express = require('express');
const countStudents = require('./3-read_file_async');
const fs = require('fs');
const path = require('path');

const app = express();
const port = 1245;

app.get('/', (req, res) => res.send('Hello Holberton School!'));

app.get('/students', async (req, res) => {
  const title = 'This is the list of our students\n';

  // Capture console.log output
  const originalConsoleLog = console.log;
  const logOutput = [];
  console.log = (...args) => {
    logOutput.push(args.join(' '));
    originalConsoleLog.apply(console, args);
  };

  try {
    await countStudents(process.argv[2]);
    res.send(`${title}${logOutput.join('\n')}`);
  } catch (error) {
    res.send(`${title}${error.message}`);
  } finally {
    // Restore original console.log function
    console.log = originalConsoleLog;
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});

module.exports = app;
