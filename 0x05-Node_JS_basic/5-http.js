const http = require('http');
const fs = require('fs');
const path = require('path');

const app = http.createServer((req, res) => {
  if (req.url === '/') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello Holberton School!');
  } else if (req.url === '/students') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.write('This is the list of our students\n');

    const filePath = process.argv[2];
    if (filePath) {
      readDatabase(filePath)
        .then((data) => {
          res.end(data);
        })
        .catch((err) => {
          res.end(err.message);
        });
    } else {
      res.end('No database file provided');
    }
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Not Found');
  }
});

const readDatabase = (filePath) => {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, 'utf-8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
      } else {
        const lines = data.trim().split('\n').filter(line => line);
        if (lines.length === 0) {
          resolve('No students found');
          return;
        }

        const students = {};
        let totalStudents = 0;

        lines.slice(1).forEach((line) => {
          const [firstName, field] = line.split(',');

          if (!students[field]) {
            students[field] = [];
          }
          students[field].push(firstName);
          totalStudents++;
        });

        let output = `Number of students: ${totalStudents}\n`;
        for (const [field, names] of Object.entries(students)) {
          output += `Number of students in ${field}: ${names.length}. List: ${names.join(', ')}\n`;
        }

        resolve(output.trim());
      }
    });
  });
};

app.listen(1245, () => {
  console.log('Server listening on port 1245');
});

module.exports = app;
